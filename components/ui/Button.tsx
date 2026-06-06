import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-lg shadow-gold-500/20 hover:shadow-gold-400/40 hover:-translate-y-0.5",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20 hover:-translate-y-0.5",
  outline:
    "border border-white/30 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm",
  ghost: "text-navy-800 hover:text-gold-600 hover:bg-navy-50",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-4",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
