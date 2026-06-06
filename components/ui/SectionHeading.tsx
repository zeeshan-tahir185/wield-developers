import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-gold-300" : "text-gold-600"
      } ${className}`}
    >
      <span className="h-px w-7 bg-current opacity-60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "items-start";
  return (
    <div
      className={`flex flex-col gap-4 ${alignClass} ${
        align === "center" ? "max-w-2xl" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? "text-navy-100/80" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
