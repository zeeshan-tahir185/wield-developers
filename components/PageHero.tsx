import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "./ui/SectionHeading";

type Crumb = { label: string; href?: string };

// Shared hero band for interior pages — consistent, premium, with breadcrumbs.
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="bg-blueprint absolute inset-0 opacity-50" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-navy-600/30 blur-3xl" />

      <div className="container-px relative">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-navy-100/60">
            <li>
              <Link href="/" className="transition-colors hover:text-gold-300">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-gold-300">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold-300">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-100/75 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
