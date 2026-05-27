"use client";
import { useState } from "react";
import { UploadZone } from "./UploadZone";
import { MediaGrid } from "./MediaGrid";
import type { MediaFile } from "@/lib/media-store";

const CATEGORIES = [
  { value: "general", label: "General" },
  { value: "tractors", label: "Tractors" },
  { value: "implements", label: "Equipment" },
  { value: "logos", label: "Logos" },
  { value: "videos", label: "Videos" },
];

interface Props {
  initialFiles: MediaFile[];
}

export function MediaManager({ initialFiles }: Props) {
  const [files, setFiles] = useState(initialFiles);
  const [category, setCategory] = useState("general");

  function onUploaded(file: MediaFile) {
    setFiles((prev) => [file, ...prev]);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 space-y-4">
        <div>
          <h2 className="text-white font-bold text-base mb-1">Add media</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  category === cat.value
                    ? "bg-amber-500 text-zinc-950"
                    : "bg-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <UploadZone category={category} onUploaded={onUploaded} />
      </div>

      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
        <h2 className="text-white font-bold text-base mb-4">
          Library <span className="text-zinc-500 font-normal text-sm">({files.length} files)</span>
        </h2>
        <MediaGrid initialFiles={files} />
      </div>
    </div>
  );
}
