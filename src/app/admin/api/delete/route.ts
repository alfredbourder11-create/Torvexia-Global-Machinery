import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";
import { deleteMediaFile } from "@/lib/media-store";
import { unlink } from "fs/promises";
import path from "path";

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json() as { id: string };
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const file = deleteMediaFile(id);
  if (!file) return NextResponse.json({ error: "File not found" }, { status: 404 });

  try {
    await unlink(path.join(process.cwd(), "public", file.url));
  } catch {
    // File may already be deleted from disk
  }

  return NextResponse.json({ success: true });
}
