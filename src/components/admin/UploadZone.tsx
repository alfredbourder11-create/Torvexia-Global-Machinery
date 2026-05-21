"use client";
import { useCallback, useState } from "react";
import type { MediaFile } from "@/lib/media-store";

interface Props {
  category: string;
  onUploaded: (file: MediaFile) => void;
}

export function UploadZone({ category, onUploaded }: Props) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const uploadFile = useCallback(async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    setUploading((prev) => [...prev, file.name]);
    setErrors([]);

    try {
      const res = await fetch("/admin/api/upload", { method: "POST", body: formData });
      const data = await res.json() as { file?: MediaFile; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      if (data.file) onUploaded(data.file);
    } catch (err) {
      setErrors((prev) => [...prev, `${file.name}: ${(err as Error).message}`]);
    } finally {
      setUploading((prev) => prev.filter((n) => n !== file.name));
    }
  }, [category, onUploaded]);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach(uploadFile);
  }, [uploadFile]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    e.target.value = "";
  };

  return (
    <div className="space-y-3">
      <label
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 transition-colors duration-200 cursor-pointer ${
          dragging
            ? "border-amber-500 bg-amber-500/5"
            : "border-zinc-700 bg-zinc-900 hover:border-zinc-600"
        }`}
      >
        <input
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,video/quicktime"
          className="sr-only"
          onChange={onInputChange}
        />
        <svg className="w-10 h-10 text-zinc-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-zinc-300 font-medium text-sm mb-1">
          {dragging ? "Déposez les fichiers ici" : "Glissez-déposez ou cliquez pour téléverser"}
        </p>
        <p className="text-zinc-600 text-xs">
          Images (JPG, PNG, WebP) · Vidéos (MP4, WebM) · Max 100 MB
        </p>
      </label>

      {uploading.length > 0 && (
        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-4 space-y-2">
          {uploading.map((name) => (
            <div key={name} className="flex items-center gap-3 text-sm text-zinc-400">
              <svg className="w-4 h-4 animate-spin text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="truncate">{name}</span>
            </div>
          ))}
        </div>
      )}

      {errors.length > 0 && (
        <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 space-y-1">
          {errors.map((err) => (
            <p key={err} className="text-red-400 text-sm">{err}</p>
          ))}
        </div>
      )}
    </div>
  );
}
