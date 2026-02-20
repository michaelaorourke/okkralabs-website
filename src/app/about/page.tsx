import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "About",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-glow animate-glow-pulse" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 vignette" />
        <Container className="relative py-20 md:py-28">
          <Badge className="animate-fade-up delay-0">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400/80" />
            About
          </Badge>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight animate-fade-up delay-100">
            Senior engineers. AI-augmented process.{" "}
            <span className="text-gradient">Real accountability.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/60 leading-relaxed animate-fade-up delay-200">
            Okkralabs is a product engineering partner that combines experienced
            engineers with structured AI workflows to build, modernize, and
            scale production software.
          </p>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="animate-fade-up delay-0">
              <div className="text-xs font-medium uppercase tracking-wider text-white/40">Principle</div>
              <div className="mt-3 text-lg font-semibold">Clarity</div>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Clear scope, honest timelines, and no surprises.
              </p>
            </Card>
            <Card className="animate-fade-up delay-100">
              <div className="text-xs font-medium uppercase tracking-wider text-white/40">Principle</div>
              <div className="mt-3 text-lg font-semibold">Quality</div>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Strong engineering standards that make systems easier to evolve.
              </p>
            </Card>
            <Card className="animate-fade-up delay-200">
              <div className="text-xs font-medium uppercase tracking-wider text-white/40">Principle</div>
              <div className="mt-3 text-lg font-semibold">Ownership</div>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                We take responsibility for outcomes, not just tasks.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Who we are / How we engage */}
      <section className="relative">
        <div className="divider-gradient" />
        <div className="py-20 md:py-28 bg-white/[0.01]">
          <Container>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="animate-fade-up delay-0">
                <div className="text-xs font-medium uppercase tracking-wider text-white/40">Who we are</div>
                <div className="mt-3 text-xl font-semibold">
                  Product engineering partner
                </div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  Not a dev shop. Not staffing. We act as a long-term technical
                  partner with an AI-augmented engineering process, helping teams
                  build new digital products and strengthen the ones they already
                  run.
                </p>
              </div>
              <div className="animate-fade-up delay-100">
                <div className="text-xs font-medium uppercase tracking-wider text-white/40">How we engage</div>
                <div className="mt-3 text-xl font-semibold">
                  Embedded collaboration
                </div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  We work in your tooling, join your rituals, and keep
                  communication tight so delivery stays predictable.
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className="divider-gradient" />
      </section>

      <CTA />
    </>
  );
}
