import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, CalendarDays, Zap, ImageIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { epcProjects, getEpcProject } from "@/lib/epc";

// Pre-render every EPC project page at build time.
export function generateStaticParams() {
  return epcProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/epc-projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getEpcProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — EPC Project`,
    description: project.summary,
  };
}

export default async function EpcProjectDetailPage({
  params,
}: PageProps<"/epc-projects/[slug]">) {
  const { slug } = await params;
  const project = getEpcProject(slug);
  if (!project) notFound();

  const related = epcProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${project.type} EPC · ${project.status}`}
        title={project.title}
        description={project.summary}
        crumbs={[
          { label: "EPC Projects", href: "/epc-projects" },
          { label: project.title },
        ]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-px grid gap-14 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-navy-900 text-gold-400">
                <Icon name={project.icon} className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-navy-900">
                Project overview
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
                {project.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="mt-12 font-display text-xl font-bold text-navy-900">
                EPC scope
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.scope.map((s) => (
                  <div
                    key={s}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-navy-50/40 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-eco-500" />
                    <span className="text-sm font-medium text-navy-800">{s}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* GALLERY — real photos first; placeholders until photos arrive */}
            <Reveal delay={120}>
              <div className="mt-12 flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-gold-500" />
                <h3 className="font-display text-xl font-bold text-navy-900">
                  Project gallery
                </h3>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {project.gallery.length > 0
                  ? project.gallery.map((img) => (
                      <Photo
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        className="aspect-square w-full rounded-2xl"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    ))
                  : [0, 1, 2].map((i) => (
                      <ImagePlaceholder
                        key={i}
                        label={project.type}
                        icon={project.icon}
                        tone={i % 2 === 0 ? "navy" : "gold"}
                        className="aspect-square w-full rounded-2xl"
                      />
                    ))}
              </div>
              {project.gallery.length === 0 && (
                <p className="mt-3 text-xs text-slate-400">
                  Site photos for this project are being added soon.
                </p>
              )}
            </Reveal>
          </div>

          {/* Sidebar — project facts */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-base font-bold text-navy-900">
                  Project facts
                </h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Capacity
                      </dt>
                      <dd className="mt-0.5 font-semibold text-navy-900">
                        {project.capacity} · {project.type}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Client
                      </dt>
                      <dd className="mt-0.5 font-semibold text-navy-900">
                        {project.client}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Timeline
                      </dt>
                      <dd className="mt-0.5 font-semibold text-navy-900">
                        {project.year} ·{" "}
                        <span
                          className={
                            project.status === "Ongoing"
                              ? "text-eco-600"
                              : "text-navy-600"
                          }
                        >
                          {project.status}
                        </span>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-navy-900 p-7 text-white">
                <h3 className="font-display text-lg font-bold">
                  Have a similar project?
                </h3>
                <p className="mt-2 text-sm text-navy-100/75">
                  Our EPC team can take it from feasibility to commissioning.
                </p>
                <ButtonLink href="/contact" variant="primary" className="mt-5 w-full">
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED EPC PROJECTS */}
      {related.length > 0 && (
        <section className="bg-navy-50/60 py-20">
          <div className="container-px">
            <div className="mb-10 flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-navy-900">
                More EPC projects
              </h2>
              <Link
                href="/epc-projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-gold-600"
              >
                All EPC projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/epc-projects/${p.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold leading-snug text-navy-900">
                      {p.capacity} — {p.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {p.client} · {p.year}
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
