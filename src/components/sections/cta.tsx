import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Card className="relative overflow-hidden animate-fade-up">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute inset-0 vignette" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold">
                Let&apos;s talk about what you&apos;re building.
              </h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                Whether it&apos;s a new product, a modernization effort, or a
                system that needs senior engineering attention, we&apos;ll
                give you an honest read on how we can help.
              </p>
            </div>
            <div className="flex gap-3">
              <ButtonLink href={site.calendly} size="lg">
                Book a call
              </ButtonLink>
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
