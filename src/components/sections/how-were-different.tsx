import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { FileText, Boxes, TestTubeDiagonal, Sparkles } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Specification & documentation",
    desc: "AI agents help translate requirements into structured technical artifacts, so nothing gets lost between kickoff and implementation.",
  },
  {
    icon: Boxes,
    title: "Architecture & system design",
    desc: "Systems are modeled with clear boundaries and validated interfaces before a line of code is written.",
  },
  {
    icon: TestTubeDiagonal,
    title: "Test generation & QA",
    desc: "Comprehensive test coverage is generated alongside features, not bolted on after.",
  },
  {
    icon: Sparkles,
    title: "Code quality & maintainability",
    desc: "Continuous refactoring, linting, and documentation keep the codebase clean as it grows.",
  },
];

const staggerDelays = ["delay-0", "delay-100", "delay-200", "delay-300"];

export function HowWereDifferent() {
  return (
    <section className="py-16 md:py-20 border-y border-white/5 bg-white/[0.02]">
      <Container>
        <div className="max-w-2xl animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold">
            A modern operating model for software delivery
          </h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            We don&apos;t just write code. We operate a structured,
            AI-augmented engineering process that produces better artifacts,
            tighter feedback loops, and more predictable outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <Card
                key={f.title}
                className={`animate-fade-up ${staggerDelays[idx]}`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl2 border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{f.title}</div>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-14 text-center animate-fade-up delay-400">
          <p className="text-xl md:text-2xl font-semibold tracking-tight leading-snug">
            AI increases leverage.
            <br />
            <span className="text-white/50">
              Experienced engineers ensure precision.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
