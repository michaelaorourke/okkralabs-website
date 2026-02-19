import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import {
  Rocket,
  Wrench,
  ShieldCheck,
  Lightbulb,
  Code,
  Server,
  Gauge,
  CloudUpload,
  Lock,
  GitBranch,
  Siren,
  Users,
} from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    title: "New Products & Platforms",
    desc: "From first commit to production launch. We build MVPs, web and mobile applications, APIs, and the foundational architecture that lets them scale.",
    capabilities: [
      {
        icon: Lightbulb,
        title: "Product strategy & discovery",
        desc: "Define goals, scope, constraints, and a plan that reduces risk before heavy build work starts.",
        tags: ["Workshops", "Requirements", "Technical discovery", "Delivery plan"],
      },
      {
        icon: Code,
        title: "Application development",
        desc: "Senior engineers building production-grade systems, not prototypes that fall apart at scale.",
        tags: ["Web apps", "Mobile apps", "Design systems", "Testing & QA"],
      },
      {
        icon: Server,
        title: "Platform & API development",
        desc: "The infrastructure and services that power products. Clean interfaces, performance, and reliability.",
        tags: ["APIs", "Event-driven systems", "Data modeling", "Observability"],
      },
    ],
  },
  {
    icon: Wrench,
    title: "Modernization & Performance",
    desc: "Make existing software faster, more stable, and easier to change. We reduce technical debt and operational risk without rewriting everything.",
    capabilities: [
      {
        icon: Gauge,
        title: "Performance engineering",
        desc: "Identify bottlenecks, optimize critical paths, and bring response times and costs under control.",
        tags: ["Profiling", "Caching strategy", "Database tuning", "Load testing"],
      },
      {
        icon: CloudUpload,
        title: "Cloud migration & infrastructure",
        desc: "Move workloads to modern infrastructure with minimal disruption and a clear rollback plan.",
        tags: ["AWS / GCP / Azure", "Containerization", "CI/CD pipelines", "Infrastructure as code"],
      },
      {
        icon: Lock,
        title: "Security hardening & compliance",
        desc: "Close gaps, enforce best practices, and meet the compliance requirements your industry demands.",
        tags: ["Auth & access control", "Vulnerability remediation", "Audit readiness", "Data protection"],
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Engineering Partnership",
    desc: "A long-term technical partner, not a vendor. We deliver features, handle incidents, and provide the senior engineering leadership your roadmap needs.",
    capabilities: [
      {
        icon: GitBranch,
        title: "Feature delivery & roadmap execution",
        desc: "Continuous development against your product roadmap with the same rigor as a greenfield build.",
        tags: ["Sprint delivery", "Release management", "Backlog refinement", "Stakeholder alignment"],
      },
      {
        icon: Siren,
        title: "Incident response & reliability",
        desc: "When things break, we fix them. Proactive monitoring and structured incident management to keep systems healthy.",
        tags: ["On-call support", "Root cause analysis", "SLA management", "Runbook development"],
      },
      {
        icon: Users,
        title: "Technical leadership & enablement",
        desc: "Architecture guidance, code review, and the engineering leadership that keeps teams productive as they grow.",
        tags: ["Architecture reviews", "Code quality", "Team mentoring", "Process improvement"],
      },
    ],
  },
];

const pillarDelays = ["delay-0", "delay-100", "delay-200"];

export const metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 vignette" />
        <Container className="relative py-16 md:py-20">
          <Badge className="animate-fade-up delay-0">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            Services
          </Badge>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight animate-fade-up delay-100">
            Everything you need to build, modernize, and&nbsp;ship.
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed animate-fade-up delay-200">
            Senior engineers and an AI-augmented process, integrated directly
            into your team. From greenfield builds to legacy modernization to
            long-term support.
          </p>
        </Container>
      </section>

      {/* Pillars with nested capabilities */}
      {pillars.map((pillar, pIdx) => {
        const PillarIcon = pillar.icon;
        const isAlt = pIdx % 2 === 1;
        return (
          <section
            key={pillar.title}
            className={
              isAlt
                ? "py-16 md:py-20 border-y border-white/5 bg-white/[0.02]"
                : "py-16 md:py-20"
            }
          >
            <Container>
              {/* Pillar header */}
              <div className={`flex items-start gap-4 max-w-2xl animate-fade-up ${pillarDelays[pIdx]}`}>
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl2 border border-white/10 bg-white/5">
                  <PillarIcon className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Capability cards */}
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {pillar.capabilities.map((cap, cIdx) => {
                  const CapIcon = cap.icon;
                  return (
                    <Card
                      key={cap.title}
                      className={`h-full animate-fade-up ${pillarDelays[cIdx]}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl2 border border-white/10 bg-white/5 flex items-center justify-center">
                          <CapIcon className="h-4 w-4 text-white/70" />
                        </div>
                        <CardTitle className="text-base">
                          {cap.title}
                        </CardTitle>
                      </div>
                      <CardDescription>{cap.desc}</CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </Container>
          </section>
        );
      })}

      {/* Engagement model */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up delay-0">
              <div className="text-sm text-white/60">Engagements</div>
              <div className="mt-2 text-lg font-semibold">
                Flexible by design
              </div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                We can lead a full build, augment an internal team, or own a
                defined slice of a platform.
              </p>
            </div>
            <div className="animate-fade-up delay-100">
              <div className="text-sm text-white/60">Team shape</div>
              <div className="mt-2 text-lg font-semibold">
                Senior and accountable
              </div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                You work with experienced engineers and product leaders, not a
                rotating bench.
              </p>
            </div>
            <div className="animate-fade-up delay-200">
              <div className="text-sm text-white/60">Outcomes</div>
              <div className="mt-2 text-lg font-semibold">
                Ship reliably
              </div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Strong engineering practices, clear communication, and
                predictable delivery.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
