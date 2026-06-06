import type { Metadata } from "next";
import { Mail, Phone, Smartphone, Printer, MapPin, Clock, Globe } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Wield Developers (Pvt.) Ltd. — Rawalpindi, Pakistan. Email, phone and address for project enquiries.",
};

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.contact.phone,
    href: `tel:${site.contact.phoneHref}`,
  },
  {
    icon: Smartphone,
    label: "Mobile",
    value: site.contact.mobile,
    href: `tel:${site.contact.mobileHref}`,
  },
  {
    icon: Printer,
    label: "Fax",
    value: site.contact.fax,
    href: undefined,
  },
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(site.contact.address);

  return (
    <>
      <PageHero
        eyebrow="Let's Connect"
        title="Get in touch with our team"
        description="Have a project in mind or a question about our services? Reach out — our team in Rawalpindi is ready to help."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-px grid gap-14 lg:grid-cols-2">
          {/* LEFT — contact details */}
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Contact information
            </h2>
            <p className="mt-3 text-slate-600">
              We&apos;d love to hear about your project. Get in touch through any
              of the channels below.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((c) => {
                const inner = (
                  <div className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                      <c.icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {c.label}
                      </div>
                      <div className="mt-1 font-medium text-navy-900 break-all">
                        {c.value}
                      </div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href}>
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>

            {/* Address */}
            <div className="mt-4 flex items-start gap-4 rounded-2xl border border-slate-200 bg-navy-50/50 p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400">
                <MapPin className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Head Office
                </div>
                <div className="mt-1 font-medium text-navy-900">
                  {site.contact.address}
                </div>
              </div>
            </div>

            {/* Hours + links */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6">
                <Clock className="h-6 w-6 shrink-0 text-gold-500" strokeWidth={1.6} />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Working Hours
                  </div>
                  <div className="mt-1 text-sm font-medium text-navy-900">
                    Mon – Sat, 9:00 AM – 6:00 PM
                  </div>
                </div>
              </div>
              <div className="flex items-center rounded-2xl border border-slate-200 bg-white p-6">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-gold-600"
                >
                  <Globe className="h-4 w-4 text-gold-500" />
                  www.wielddevelopers.com
                </a>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — map */}
          <Reveal delay={120}>
            <div className="h-full min-h-[28rem] overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <iframe
                title="Wield Developers location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full min-h-[28rem] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative overflow-hidden bg-navy-900 py-14">
        <div className="bg-blueprint absolute inset-0 opacity-40" />
        <div className="container-px relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">
              Prefer to talk directly?
            </h2>
            <p className="mt-2 text-navy-100/70">
              Call our office and our team will be happy to assist you.
            </p>
          </div>
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-semibold text-navy-950 shadow-lg shadow-gold-500/25 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
          >
            <Phone className="h-5 w-5" />
            {site.contact.phone}
          </a>
        </div>
      </section>
    </>
  );
}
