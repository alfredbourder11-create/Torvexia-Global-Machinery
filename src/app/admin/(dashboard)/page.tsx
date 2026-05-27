import { getMediaFiles, getGalleries } from "@/lib/media-store";

export default function AdminDashboard() {
  const files = getMediaFiles();
  const galleries = getGalleries();
  const images = files.filter((f) => f.type === "image");
  const videos = files.filter((f) => f.type === "video");
  const recent = files.slice(0, 6);

  const stats = [
    {
      label: "Total media",
      value: files.length,
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      label: "Images",
      value: images.length,
      icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      label: "Videos",
      value: videos.length,
      icon: "M15 10l4.553-2.277A1 1 0 0121 8.68v6.64a1 1 0 01-1.447.897L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
    },
    {
      label: "Galleries",
      value: galleries.length,
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white font-black text-2xl mb-1">Dashboard</h1>
        <p className="text-zinc-500 text-sm">Manage your site media and content</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
              </svg>
            </div>
            <p className="text-3xl font-black text-white mb-1">{s.value}</p>
            <p className="text-zinc-500 text-xs uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Recent uploads */}
      <div>
        <h2 className="text-white font-bold text-lg mb-4">Recently added</h2>
        {recent.length === 0 ? (
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 border-dashed p-12 text-center">
            <svg className="w-10 h-10 text-zinc-700 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-zinc-500 text-sm">No media yet</p>
            <a href="/admin/media" className="text-amber-400 text-sm hover:text-amber-300 transition-colors mt-1 inline-block cursor-pointer">
              Add media →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {recent.map((file) => (
              <div key={file.id} className="aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 relative group">
                {file.type === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={file.url} alt={file.originalName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.277A1 1 0 0121 8.68v6.64a1 1 0 01-1.447.897L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <p className="text-white text-[10px] truncate w-full">{file.originalName}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
