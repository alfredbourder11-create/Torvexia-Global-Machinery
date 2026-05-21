import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";
import { addMediaFile } from "@/lib/media-store";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const ALLOWED_IMAGES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const ALLOWED_VIDEOS = ["video/mp4", "video/webm", "video/quicktime"];
const MAX_SIZE = 100 * 1024 * 1024; // 100 MB

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const category = (formData.get("category") as string) || "general";

  if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });
  if (file.size > MAX_SIZE) return NextResponse.json({ error: "File too large (max 100 MB)" }, { status: 413 });

  const isImage = ALLOWED_IMAGES.includes(file.type);
  const isVideo = ALLOWED_VIDEOS.includes(file.type);
  if (!isImage && !isVideo) {
    return NextResponse.json({ error: "Unsupported file type" }, { status: 415 });
  }

  const ext = file.name.split(".").pop() ?? "bin";
  const id = randomUUID();
  const filename = `${id}.${ext}`;
  const subdir = isVideo ? "videos" : category;
  const uploadDir = path.join(process.cwd(), "public", "uploads", subdir);

  await mkdir(uploadDir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadDir, filename), buffer);

  const mediaFile = {
    id,
    filename,
    originalName: file.name,
    url: `/uploads/${subdir}/${filename}`,
    type: (isImage ? "image" : "video") as "image" | "video",
    category: subdir,
    size: file.size,
    uploadedAt: new Date().toISOString(),
  };

  addMediaFile(mediaFile);
  return NextResponse.json({ file: mediaFile });
}
