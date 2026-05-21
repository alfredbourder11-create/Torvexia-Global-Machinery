import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

export interface MediaFile {
  id: string;
  filename: string;
  originalName: string;
  url: string;
  type: "image" | "video";
  category: string;
  size: number;
  uploadedAt: string;
}

export interface Gallery {
  id: string;
  name: string;
  description: string;
  fileIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface SiteSettings {
  contactEmail: string;
  contactWhatsapp: string;
  heroTitle: string;
  heroSubtitle: string;
  version: number;
}

function readJSON<T>(file: string): T {
  const filePath = path.join(DATA_DIR, file);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

function writeJSON(file: string, data: unknown): void {
  const filePath = path.join(DATA_DIR, file);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Media

export function getMediaFiles(): MediaFile[] {
  const data = readJSON<{ files: MediaFile[] }>("media.json");
  return data.files;
}

export function addMediaFile(file: MediaFile): void {
  const data = readJSON<{ files: MediaFile[]; version: number }>("media.json");
  data.files.unshift(file);
  writeJSON("media.json", data);
}

export function deleteMediaFile(id: string): MediaFile | null {
  const data = readJSON<{ files: MediaFile[]; version: number }>("media.json");
  const idx = data.files.findIndex((f) => f.id === id);
  if (idx === -1) return null;
  const [removed] = data.files.splice(idx, 1);
  writeJSON("media.json", data);
  return removed;
}

// Galleries

export function getGalleries(): Gallery[] {
  const data = readJSON<{ galleries: Gallery[] }>("galleries.json");
  return data.galleries;
}

export function getGallery(id: string): Gallery | null {
  return getGalleries().find((g) => g.id === id) ?? null;
}

export function saveGallery(gallery: Gallery): void {
  const data = readJSON<{ galleries: Gallery[]; version: number }>("galleries.json");
  const idx = data.galleries.findIndex((g) => g.id === gallery.id);
  if (idx === -1) {
    data.galleries.unshift(gallery);
  } else {
    data.galleries[idx] = gallery;
  }
  writeJSON("galleries.json", data);
}

export function deleteGallery(id: string): boolean {
  const data = readJSON<{ galleries: Gallery[]; version: number }>("galleries.json");
  const idx = data.galleries.findIndex((g) => g.id === id);
  if (idx === -1) return false;
  data.galleries.splice(idx, 1);
  writeJSON("galleries.json", data);
  return true;
}

// Settings

export function getSettings(): SiteSettings {
  return readJSON<SiteSettings>("settings.json");
}

export function saveSettings(settings: Partial<SiteSettings>): void {
  const current = getSettings();
  writeJSON("settings.json", { ...current, ...settings });
}
