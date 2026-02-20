import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendlyButton } from "@/components/ui/calendly-button";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Card className="relative overflow-hidden p-8 md:p-12 animate-fade-up">
          <div className="hero-glow animate-glow-pulse" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Let&apos;s talk about what you&apos;re building.
              </h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Whether it&apos;s a new product, a modernization effort, or a
                system that needs senior engineering attention, we&apos;ll
                give you an honest read on how we can help.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <CalendlyButton size="lg" />
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
