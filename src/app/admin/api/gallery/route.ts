import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";
import { getGalleries, saveGallery, deleteGallery, getGallery } from "@/lib/media-store";
import type { Gallery } from "@/lib/media-store";
import { randomUUID } from "crypto";

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ galleries: getGalleries() });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { name, description, fileIds } = await req.json() as Partial<Gallery>;
  if (!name) return NextResponse.json({ error: "Name required" }, { status: 400 });

  const gallery: Gallery = {
    id: randomUUID(),
    name,
    description: description ?? "",
    fileIds: fileIds ?? [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  saveGallery(gallery);
  return NextResponse.json({ gallery });
}

export async function PATCH(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, ...updates } = await req.json() as Partial<Gallery> & { id: string };
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const existing = getGallery(id);
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const updated = { ...existing, ...updates, id, updatedAt: new Date().toISOString() };
  saveGallery(updated);
  return NextResponse.json({ gallery: updated });
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json() as { id: string };
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const deleted = deleteGallery(id);
  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
