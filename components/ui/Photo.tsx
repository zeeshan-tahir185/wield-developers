import Image from "next/image";

// Wrapper around next/image for client-supplied photos. Mirrors the framing of
// ImagePlaceholder (rounded, object-cover) so the two are interchangeable.
export function Photo({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-navy-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}
