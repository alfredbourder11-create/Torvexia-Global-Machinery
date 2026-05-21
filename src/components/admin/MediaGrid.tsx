"use client";
import { useState } from "react";
import type { MediaFile } from "@/lib/media-store";

interface Props {
  initialFiles: MediaFile[];
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function MediaGrid({ initialFiles }: Props) {
  const [files, setFiles] = useState(initialFiles);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
  const [selected, setSelected] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  const filtered = filter === "all" ? files : files.filter((f) => f.type === filter);
  const selectedFile = files.find((f) => f.id === selected) ?? null;

  async function handleDelete(id: string) {
    if (!confirm("Supprimer ce fichier définitivement ?")) return;
    setDeleting(id);
    try {
      const res = await fetch("/admin/api/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setFiles((prev) => prev.filter((f) => f.id !== id));
        if (selected === id) setSelected(null);
      }
    } finally {
      setDeleting(null);
    }
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(window.location.origin + url);
    setCopyFeedback(url);
    setTimeout(() => setCopyFeedback(null), 2000);
  }

  return (
    <div className="flex gap-6">
      {/* Grid */}
      <div className="flex-1 min-w-0">
        {/* Filter */}
        <div className="flex gap-2 mb-4">
          {(["all", "image", "video"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                filter === f
                  ? "bg-amber-500 text-zinc-950"
                  : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              {f === "all" ? "Tous" : f === "image" ? "Images" : "Vidéos"}
              <span className="ml-1.5 opacity-60">
                {f === "all" ? files.length : files.filter((x) => x.type === f).length}
              </span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 border-dashed p-16 text-center">
            <p className="text-zinc-500 text-sm">Aucun fichier dans cette catégorie</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
            {filtered.map((file) => (
              <div
                key={file.id}
                onClick={() => setSelected(selected === file.id ? null : file.id)}
                className={`group relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border cursor-pointer transition-all duration-150 ${
                  selected === file.id
                    ? "border-amber-500 ring-2 ring-amber-500/30"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {file.type === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={file.url} alt={file.originalName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-1 bg-zinc-900">
                    <svg className="w-7 h-7 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.277A1 1 0 0121 8.68v6.64a1 1 0 01-1.447.897L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  </div>
                )}
                {/* Delete button */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleDelete(file.id); }}
                  disabled={deleting === file.id}
                  className="absolute top-1 right-1 w-6 h-6 rounded-md bg-zinc-950/80 text-zinc-400 hover:text-red-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 cursor-pointer hover:bg-zinc-950"
                  title="Supprimer"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail panel */}
      {selectedFile && (
        <div className="w-64 flex-shrink-0 rounded-2xl bg-zinc-900 border border-zinc-800 p-5 space-y-4 self-start sticky top-6">
          <div className="aspect-square rounded-xl overflow-hidden bg-zinc-800">
            {selectedFile.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={selectedFile.url} alt={selectedFile.originalName} className="w-full h-full object-cover" />
            ) : (
              <video src={selectedFile.url} controls className="w-full h-full object-cover" />
            )}
          </div>

          <div className="space-y-2">
            <p className="text-white font-semibold text-sm truncate">{selectedFile.originalName}</p>
            <div className="space-y-1">
              {[
                { label: "Type", value: selectedFile.type },
                { label: "Taille", value: formatBytes(selectedFile.size) },
                { label: "Catégorie", value: selectedFile.category },
                { label: "Ajouté", value: new Date(selectedFile.uploadedAt).toLocaleDateString("fr") },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-xs">
                  <span className="text-zinc-500">{item.label}</span>
                  <span className="text-zinc-300">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => copyUrl(selectedFile.url)}
            className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium py-2 rounded-lg transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copyFeedback === selectedFile.url ? "Copié !" : "Copier l'URL"}
          </button>

          <button
            onClick={() => handleDelete(selectedFile.id)}
            disabled={deleting === selectedFile.id}
            className="w-full flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium py-2 rounded-lg transition-colors cursor-pointer border border-red-500/20"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            {deleting === selectedFile.id ? "Suppression..." : "Supprimer"}
          </button>
        </div>
      )}
    </div>
  );
}
