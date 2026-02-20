import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { CalendlyButton } from "@/components/ui/calendly-button";

const pills = [
  "AI-augmented process",
  "Senior-led delivery",
  "Architecture-first",
  "Production-grade systems",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow animate-glow-pulse" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 vignette" />
      <Container className="relative py-24 md:py-32">
        <div className="max-w-3xl">
          <Badge className="animate-fade-up delay-0">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400/80" />
            Product Engineering Partner
          </Badge>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight animate-fade-up delay-100">
            Startup velocity.{" "}
            <span className="text-gradient">Enterprise-grade discipline.</span>
          </h1>

          <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-2xl animate-fade-up delay-200">
            We partner with product teams to design, build, and scale
            software. Our AI-augmented process delivers faster without
            cutting corners.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
            <CalendlyButton size="lg" />
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Get in touch
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up delay-400">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-white/40"
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
