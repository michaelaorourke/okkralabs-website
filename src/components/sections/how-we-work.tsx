import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Discovery",
    desc: "Understand the problem, the constraints, and the people. Define success criteria and scope before committing to a plan.",
  },
  {
    title: "Architecture",
    desc: "Design the system: data models, service boundaries, integration points, and deployment strategy. Validate before building.",
  },
  {
    title: "Build & Ship",
    desc: "Iterative delivery in short cycles. Working software, reviewed and deployed continuously. Clear checkpoints, no surprises.",
  },
  {
    title: "Evolve",
    desc: "Stay engaged. Ship features, resolve incidents, reduce debt, and adapt the system as the business changes.",
  },
];

const staggerDelays = ["delay-0", "delay-100", "delay-200", "delay-300"];

export function HowWeWork() {
  return (
    <section className="py-16 md:py-20 border-y border-white/5 bg-white/[0.02]">
      <Container>
        <div className="max-w-2xl animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold">How we work</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            A repeatable process that keeps delivery predictable and teams
            aligned.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((s, idx) => (
            <Card
              key={s.title}
              className={`p-6 animate-fade-up ${staggerDelays[idx]}`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl2 border border-white/10 bg-white/5 text-sm font-semibold text-white/80">
                  {idx + 1}
                </div>
                <div>
                  <div className="text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
