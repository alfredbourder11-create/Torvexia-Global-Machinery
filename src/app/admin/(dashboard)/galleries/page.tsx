import { getGalleries, getMediaFiles } from "@/lib/media-store";
import { GalleriesManager } from "@/components/admin/GalleriesManager";

export default function GalleriesPage() {
  const galleries = getGalleries();
  const mediaFiles = getMediaFiles();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white font-black text-2xl mb-1">Galeries</h1>
        <p className="text-zinc-500 text-sm">Créez et organisez des collections de photos</p>
      </div>
      <GalleriesManager initialGalleries={galleries} allFiles={mediaFiles} />
    </div>
  );
}
