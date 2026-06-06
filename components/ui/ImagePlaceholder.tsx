import { Icon } from "./Icon";

// Branded placeholder shown wherever a client-supplied photo will go.
// Swap these out by dropping real images into /public and using next/image.

export function ImagePlaceholder({
  label,
  icon = "Building2",
  className = "",
  tone = "navy",
}: {
  label?: string;
  icon?: string;
  className?: string;
  tone?: "navy" | "gold" | "light";
}) {
  const tones = {
    navy: "from-navy-800 to-navy-950 text-navy-100/70",
    gold: "from-navy-800 via-navy-900 to-navy-950 text-gold-300/80",
    light: "from-navy-50 to-navy-100 text-navy-400",
  } as const;

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      {/* blueprint grid texture */}
      <div className="absolute inset-0 bg-blueprint opacity-50" />
      {/* corner ticks */}
      <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-current opacity-30" />
      <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-current opacity-30" />
      <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-current opacity-30" />
      <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-current opacity-30" />

      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <Icon name={icon} className="h-9 w-9 opacity-80" strokeWidth={1.4} />
        {label && (
          <span className="text-xs font-medium uppercase tracking-[0.18em] opacity-80">
            {label}
          </span>
        )}
        <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">
          Image coming soon
        </span>
      </div>
    </div>
  );
}
