import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { services, getService } from "@/lib/services";

// Pre-render every service page at build time.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  // Related services from the same category (excluding current).
  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.summary}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-px grid gap-14 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-navy-900 text-gold-400">
                <Icon name={service.icon} className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-navy-900">
                Overview
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
                {service.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              {service.image ? (
                <Photo
                  src={service.image.src}
                  alt={service.image.alt}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="mt-10 aspect-[16/9] w-full rounded-3xl shadow-lg"
                />
              ) : (
                <ImagePlaceholder
                  label={service.title}
                  icon={service.icon}
                  tone="navy"
                  className="mt-10 aspect-[16/9] w-full rounded-3xl"
                />
              )}
            </Reveal>

            <Reveal delay={120}>
              <h3 className="mt-12 font-display text-xl font-bold text-navy-900">
                Scope &amp; capabilities
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-navy-50/40 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-eco-500" />
                    <span className="text-sm font-medium text-navy-800">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {service.toolset && service.toolset.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-2 text-navy-900">
                    <Cpu className="h-5 w-5 text-gold-500" />
                    <h3 className="font-display text-base font-bold">
                      Tools &amp; software
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.toolset.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-navy-100 bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-2xl bg-navy-900 p-7 text-white">
                <h3 className="font-display text-lg font-bold">
                  Interested in this service?
                </h3>
                <p className="mt-2 text-sm text-navy-100/75">
                  Let&apos;s discuss your requirements and how we can deliver it
                  for your project.
                </p>
                <ButtonLink href="/contact" variant="primary" className="mt-5 w-full">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-navy-50/60 py-20">
          <div className="container-px">
            <div className="mb-10 flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Related {service.category} services
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-gold-600"
              >
                All services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold leading-snug text-navy-900">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {s.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
