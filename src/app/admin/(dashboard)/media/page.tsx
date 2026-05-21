import { getMediaFiles } from "@/lib/media-store";
import { MediaManager } from "@/components/admin/MediaManager";

export default function MediaPage() {
  const files = getMediaFiles();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white font-black text-2xl mb-1">Médiathèque</h1>
        <p className="text-zinc-500 text-sm">Téléversez et gérez vos photos et vidéos</p>
      </div>
      <MediaManager initialFiles={files} />
    </div>
  );
}
