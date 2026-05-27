"use client";
import { useState } from "react";
import type { Gallery, MediaFile } from "@/lib/media-store";

interface Props {
  initialGalleries: Gallery[];
  allFiles: MediaFile[];
}

export function GalleriesManager({ initialGalleries, allFiles }: Props) {
  const [galleries, setGalleries] = useState(initialGalleries);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState<Gallery | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function openCreate() {
    setEditing(null);
    setName("");
    setDescription("");
    setSelectedIds([]);
    setCreating(true);
  }

  function openEdit(g: Gallery) {
    setEditing(g);
    setName(g.name);
    setDescription(g.description);
    setSelectedIds(g.fileIds);
    setCreating(true);
  }

  function toggleFile(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  async function handleSave() {
    if (!name.trim()) { setError("Name is required"); return; }
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/admin/api/gallery", {
        method: editing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editing?.id, name, description, fileIds: selectedIds }),
      });
      const data = await res.json() as { gallery?: Gallery; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Error");
      if (data.gallery) {
        setGalleries((prev) => {
          const idx = prev.findIndex((g) => g.id === data.gallery!.id);
          if (idx === -1) return [data.gallery!, ...prev];
          const next = [...prev];
          next[idx] = data.gallery!;
          return next;
        });
      }
      setCreating(false);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this gallery?")) return;
    const res = await fetch("/admin/api/gallery", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) setGalleries((prev) => prev.filter((g) => g.id !== id));
  }

  const images = allFiles.filter((f) => f.type === "image");

  if (creating) {
    return (
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-bold text-lg">{editing ? "Edit gallery" : "New gallery"}</h2>
          <button onClick={() => setCreating(false)} className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {error && (
          <div className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400 text-sm">{error}</div>
        )}

        <div className="space-y-3">
          <div>
            <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-1.5">Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. TX504 Tractors"
              className="w-full bg-zinc-800 border border-zinc-700 focus:border-amber-500/60 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-amber-500/15"
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-1.5">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional description..."
              rows={3}
              className="w-full bg-zinc-800 border border-zinc-700 focus:border-amber-500/60 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none focus:ring-2 focus:ring-amber-500/15"
            />
          </div>
        </div>

        <div>
          <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">
            Select images ({selectedIds.length} selected)
          </label>
          {images.length === 0 ? (
            <p className="text-zinc-600 text-sm">No images available — upload media first.</p>
          ) : (
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 max-h-72 overflow-y-auto">
              {images.map((f) => {
                const active = selectedIds.includes(f.id);
                return (
                  <div
                    key={f.id}
                    onClick={() => toggleFile(f.id)}
                    className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      active ? "border-amber-500 ring-2 ring-amber-500/30" : "border-transparent"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.url} alt={f.originalName} className="w-full h-full object-cover" />
                    {active && (
                      <div className="absolute inset-0 bg-amber-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-zinc-950 font-bold py-3 rounded-xl text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            {saving ? "Saving..." : "Save"}
          </button>
          <button
            onClick={() => setCreating(false)}
            className="px-6 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium py-3 rounded-xl text-sm transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <button
        onClick={openCreate}
        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-5 py-3 rounded-xl text-sm uppercase tracking-wider transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
        </svg>
        New gallery
      </button>

      {galleries.length === 0 ? (
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 border-dashed p-16 text-center">
          <p className="text-zinc-500 text-sm">No galleries yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleries.map((g) => {
            const thumbs = g.fileIds
              .slice(0, 4)
              .map((id) => allFiles.find((f) => f.id === id))
              .filter(Boolean) as MediaFile[];

            return (
              <div key={g.id} className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                <div className="grid grid-cols-2 h-32">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="bg-zinc-800 overflow-hidden">
                      {thumbs[i] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={thumbs[i].url} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <p className="text-white font-semibold text-sm truncate">{g.name}</p>
                  {g.description && <p className="text-zinc-500 text-xs truncate mt-0.5">{g.description}</p>}
                  <p className="text-zinc-600 text-xs mt-1">{g.fileIds.length} image{g.fileIds.length !== 1 ? "s" : ""}</p>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => openEdit(g)}
                      className="flex-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(g.id)}
                      className="flex-1 text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 py-1.5 rounded-lg transition-colors cursor-pointer border border-red-500/20"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
