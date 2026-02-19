import { Container } from "@/components/layout/container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Wrench, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "New Products & Platforms",
    desc: "From first commit to production launch. We build MVPs, web and mobile applications, APIs, and the foundational architecture that lets them scale.",
    bullets: [
      "MVPs & pilots",
      "Web & mobile apps",
      "APIs & services",
      "System architecture",
    ],
  },
  {
    icon: Wrench,
    title: "Modernization & Performance",
    desc: "Make existing software faster, more stable, and easier to change. We reduce technical debt and operational risk without rewriting everything.",
    bullets: [
      "Refactoring",
      "Performance",
      "Cloud migration",
      "Security hardening",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Engineering Partnership",
    desc: "A long-term technical partner, not a vendor. We deliver features, handle incidents, and provide the senior engineering leadership your roadmap needs.",
    bullets: [
      "Feature velocity",
      "Incident response",
      "Roadmap execution",
      "Technical leadership",
    ],
  },
];

const staggerDelays = ["delay-0", "delay-100", "delay-200"];

export function ServicePillars() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-2xl animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Three ways we work with you, whether you&apos;re building from
            zero, fixing what&apos;s broken, or keeping critical systems
            healthy.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <Card
                key={it.title}
                className={`h-full animate-fade-up ${staggerDelays[idx]}`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl2 border border-white/10 bg-white/5 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white/80" />
                  </div>
                  <CardTitle>{it.title}</CardTitle>
                </div>
                <CardDescription>{it.desc}</CardDescription>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
