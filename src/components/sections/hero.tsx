import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

const pills = [
  "AI-augmented process",
  "Senior-led delivery",
  "Architecture-first",
  "Production-grade systems",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 vignette" />
      <Container className="relative py-20 md:py-28">
        <div className="max-w-3xl">
          <Badge className="animate-fade-up delay-0">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            Product Engineering Partner
          </Badge>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight animate-fade-up delay-100">
            Startup velocity.{" "}
            <span className="text-white/50">Enterprise-grade discipline.</span>
          </h1>

          <p className="mt-5 text-lg text-white/70 leading-relaxed animate-fade-up delay-200">
            We partner with product teams to design, build, and scale
            software. Our AI-augmented process delivers faster without
            cutting corners.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
            <ButtonLink href={site.calendly} size="lg">
              Book a call
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Get in touch
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-xs text-white/50 animate-fade-up delay-400">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
