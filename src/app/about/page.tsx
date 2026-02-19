import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import { Eye, Shield, Target } from "lucide-react";

export const metadata = {
  title: "About",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 vignette" />
        <Container className="relative py-16 md:py-20">
          <Badge className="animate-fade-up delay-0">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            About
          </Badge>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight animate-fade-up delay-100">
            Senior engineers. AI-augmented process.{" "}
            <span className="text-white/50">Real accountability.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed animate-fade-up delay-200">
            Okkralabs is a product engineering partner that combines experienced
            engineers with structured AI workflows to build, modernize, and
            scale production software.
          </p>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mt-0 grid gap-6 md:grid-cols-3">
            <Card className="animate-fade-up delay-0">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl2 border border-white/10 bg-white/5 flex items-center justify-center">
                  <Eye className="h-4 w-4 text-white/70" />
                </div>
                <div className="text-lg font-semibold">Clarity</div>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Clear scope, honest timelines, and no surprises.
              </p>
            </Card>
            <Card className="animate-fade-up delay-100">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl2 border border-white/10 bg-white/5 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white/70" />
                </div>
                <div className="text-lg font-semibold">Quality</div>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Strong engineering standards that make systems easier to evolve.
              </p>
            </Card>
            <Card className="animate-fade-up delay-200">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl2 border border-white/10 bg-white/5 flex items-center justify-center">
                  <Target className="h-4 w-4 text-white/70" />
                </div>
                <div className="text-lg font-semibold">Ownership</div>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                We take responsibility for outcomes, not just tasks.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Who we are / How we engage */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="animate-fade-up delay-0">
              <div className="text-sm text-white/60">Who we are</div>
              <div className="mt-2 text-xl font-semibold">
                Product engineering partner
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Not a dev shop. Not staffing. We act as a long-term technical
                partner with an AI-augmented engineering process, helping teams
                build new digital products and strengthen the ones they already
                run.
              </p>
            </div>
            <div className="animate-fade-up delay-100">
              <div className="text-sm text-white/60">How we engage</div>
              <div className="mt-2 text-xl font-semibold">
                Embedded collaboration
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                We work in your tooling, join your rituals, and keep
                communication tight so delivery stays predictable.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
