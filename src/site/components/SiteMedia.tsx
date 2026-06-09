import type { MediaValue } from "../content/siteContent";

type SiteMediaProps = {
  media: MediaValue;
  className?: string;
};

export function SiteMedia({ media, className }: SiteMediaProps) {
  if (!media?.src) return null;

  if (media.type === "video") {
    return (
      <video
        className={className}
        src={media.src}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return <img className={className} src={media.src} alt={media.alt} loading="lazy" />;
}
