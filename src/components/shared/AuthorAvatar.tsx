import { CardMedia } from "./CardMedia";

interface AuthorAvatarProps {
  src?: string | null;
  alt: string;
  /** Kenar uzunluğu (px). Varsayılan 36. */
  size?: number;
  className?: string;
}

/**
 * Yazar, danışman veya yönetici gibi kişi fotoğraflarını gösteren
 * dairesel avatar bileşeni.
 *
 * Duyurular bölümündeki CardMedia ile aynı Blur Letterbox koruma
 * katmanını kullanır: editör kare olmayan bir fotoğraf yüklese bile
 * görsel sert şekilde kırpılmaz veya deforme olmaz, arka planda
 * bulanık bir dolgu ile kare çerçeveye oturtulur.
 *
 * Sadece Makaleler kartlarında değil, ileride Yönetim Kurulu gibi
 * kişi fotoğrafı gösterilen her yerde tekrar kullanılabilir.
 */
export function AuthorAvatar({
  src,
  alt,
  size = 36,
  className = "",
}: AuthorAvatarProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm ${className}`}
    >
      <CardMedia
        src={src}
        alt={alt}
        ratio="square"
        fit="contain"
        className="rounded-full"
      />
    </div>
  );
}
