import { CardMedia } from "./CardMedia";

interface AuthorAvatarProps {
  src?: string | null;
  alt?: string | null;
  /** Kenar uzunluğu (px). Varsayılan 36. */
  size?: number;
  className?: string;
}

export function AuthorAvatar({
  src,
  alt,
  size = 36,
  className = "",
}: AuthorAvatarProps) {
  const safeAlt = alt && alt.trim().length > 0 ? alt : "";

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm ${className}`}
    >
      <CardMedia
        src={src}
        alt={safeAlt}
        ratio="square"
        fit="contain"
        className="rounded-full"
      />
    </div>
  );
}
