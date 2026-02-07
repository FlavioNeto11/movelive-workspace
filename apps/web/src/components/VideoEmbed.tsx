import type { VideoRef } from '@/lib/types';

export function VideoEmbed({ video, title }: { video?: VideoRef; title: string }) {
  if (!video) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 text-sm text-zinc-300">
        Vídeo em breve.
      </div>
    );
  }

  if (video.provider === 'youtube') {
    if (!video.videoId) {
      return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 text-sm text-zinc-300">
          Vídeo em breve. (Admin: cadastre o <strong>YouTube videoId</strong>.)
        </div>
      );
    }
    const src = `https://www.youtube-nocookie.com/embed/${video.videoId}`;
    return (
      <div className="aspect-video overflow-hidden rounded-2xl border border-zinc-800">
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (video.provider === 'vimeo') {
    if (!video.videoId) {
      return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 text-sm text-zinc-300">
          Vídeo em breve. (Admin: cadastre o <strong>Vimeo videoId</strong>.)
        </div>
      );
    }
    const src = `https://player.vimeo.com/video/${video.videoId}`;
    return (
      <div className="aspect-video overflow-hidden rounded-2xl border border-zinc-800">
        <iframe className="h-full w-full" src={src} title={title} loading="lazy" allow="autoplay; fullscreen" />
      </div>
    );
  }

  if (video.url) {
    return (
      <a
        className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold hover:bg-zinc-800"
        href={video.url}
        target="_blank"
        rel="noreferrer"
      >
        Abrir vídeo
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 text-sm text-zinc-300">Vídeo em breve.</div>
  );
}
