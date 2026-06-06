import Image from "next/image";
import Link from "next/link";

// Official brand mark (client-supplied /public/logo.png) + wordmark.
// The PNG's curved text is illegible at navbar size, so the company name
// is rendered as text beside the mark.

export function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Wield Developers — Home"
    >
      {/* Brand mark on a white chip so it stays legible on dark & light bars */}
      <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white p-0.5 shadow-lg shadow-navy-950/20 ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="Wield Developers logo"
          width={44}
          height={44}
          priority
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          Wield Developers
        </span>
        <span
          className={`mt-1 text-[10px] font-medium uppercase tracking-[0.25em] ${
            light ? "text-gold-300" : "text-gold-600"
          }`}
        >
          Pvt. Ltd.
        </span>
      </span>
    </Link>
  );
}
