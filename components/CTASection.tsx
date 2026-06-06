import { ButtonLink } from "./ui/Button";
import { Eyebrow } from "./ui/SectionHeading";
import { site } from "@/lib/site";
import { Phone } from "lucide-react";

export function CTASection({
  title = "Have a project in mind? Let's build it together.",
  description = "From renewable energy to large-scale civil infrastructure, our team is ready to deliver engineering excellence on your next project.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
      <div className="bg-blueprint absolute inset-0 opacity-50" />
      {/* glow accents */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-eco-500/10 blur-3xl" />

      <div className="container-px relative flex flex-col items-center text-center">
        <Eyebrow light>Let&apos;s Connect</Eyebrow>
        <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
          {description}
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/contact" variant="primary" size="lg">
            Contact Us
          </ButtonLink>
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {site.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
