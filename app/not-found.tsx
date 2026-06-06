import { ButtonLink } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy-950">
      <div className="bg-blueprint absolute inset-0 opacity-50" />
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="container-px relative text-center">
        <p className="font-display text-7xl font-extrabold text-gradient-gold sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-navy-100/70">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/" variant="primary" size="lg">
            <Home className="h-4 w-4" />
            Back to Home
          </ButtonLink>
          <ButtonLink href="/services" variant="outline" size="lg">
            <ArrowLeft className="h-4 w-4" />
            Browse Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
