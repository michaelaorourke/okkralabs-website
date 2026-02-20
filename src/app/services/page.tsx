import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import { Layers, RefreshCcw, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "New Products & Platforms",
    desc: "From first commit to production launch. We build MVPs, web and mobile applications, APIs, and the foundational architecture that lets them scale.",
    capabilities: [
      {
        title: "Product strategy & discovery",
        desc: "Define goals, scope, constraints, and a plan that reduces risk before heavy build work starts.",
        tags: ["Workshops", "Requirements", "Technical discovery", "Delivery plan"],
      },
      {
        title: "Application development",
        desc: "Senior engineers building production-grade systems, not prototypes that fall apart at scale.",
        tags: ["Web apps", "Mobile apps", "Design systems", "Testing & QA"],
      },
      {
        title: "Platform & API development",
        desc: "The infrastructure and services that power products. Clean interfaces, performance, and reliability.",
        tags: ["APIs", "Event-driven systems", "Data modeling", "Observability"],
      },
    ],
  },
  {
    icon: RefreshCcw,
    title: "Modernization & Performance",
    desc: "Make existing software faster, more stable, and easier to change. We reduce technical debt and operational risk without rewriting everything.",
    capabilities: [
      {
        title: "Performance engineering",
        desc: "Identify bottlenecks, optimize critical paths, and bring response times and costs under control.",
        tags: ["Profiling", "Caching strategy", "Database tuning", "Load testing"],
      },
      {
        title: "Cloud migration & infrastructure",
        desc: "Move workloads to modern infrastructure with minimal disruption and a clear rollback plan.",
        tags: ["AWS / GCP / Azure", "Containerization", "CI/CD pipelines", "Infrastructure as code"],
      },
      {
        title: "Security hardening & compliance",
        desc: "Close gaps, enforce best practices, and meet the compliance requirements your industry demands.",
        tags: ["Auth & access control", "Vulnerability remediation", "Audit readiness", "Data protection"],
      },
    ],
  },
  {
    icon: Handshake,
    title: "Ongoing Engineering Partnership",
    desc: "A long-term technical partner, not a vendor. We deliver features, handle incidents, and provide the senior engineering leadership your roadmap needs.",
    capabilities: [
      {
        title: "Feature delivery & roadmap execution",
        desc: "Continuous development against your product roadmap with the same rigor as a greenfield build.",
        tags: ["Sprint delivery", "Release management", "Backlog refinement", "Stakeholder alignment"],
      },
      {
        title: "Incident response & reliability",
        desc: "When things break, we fix them. Proactive monitoring and structured incident management to keep systems healthy.",
        tags: ["On-call support", "Root cause analysis", "SLA management", "Runbook development"],
      },
      {
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
        <div className="hero-glow animate-glow-pulse" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 vignette" />
        <Container className="relative py-20 md:py-28">
          <Badge className="animate-fade-up delay-0">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400/80" />
            Services
          </Badge>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight animate-fade-up delay-100">
            Everything you need to build, modernize, and&nbsp;ship.
          </h1>
          <p className="mt-4 max-w-2xl text-white/60 leading-relaxed animate-fade-up delay-200">
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
          <section key={pillar.title} className="relative">
            {isAlt && <div className="divider-gradient" />}
            <div className={isAlt ? "py-20 md:py-28 bg-white/[0.01]" : "py-20 md:py-28"}>
              <Container>
                <div className={`flex items-start gap-4 max-w-2xl animate-fade-up ${pillarDelays[pIdx]}`}>
                  <div className="icon-box mt-1 h-11 w-11">
                    <PillarIcon className="h-5 w-5 text-white/70" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-white/60 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  {pillar.capabilities.map((cap, cIdx) => (
                    <Card
                      key={cap.title}
                      className={`h-full animate-fade-up ${pillarDelays[cIdx]}`}
                    >
                      <CardTitle className="text-base">{cap.title}</CardTitle>
                      <CardDescription>{cap.desc}</CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-xs text-white/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </Container>
            </div>
            {isAlt && <div className="divider-gradient" />}
          </section>
        );
      })}

      {/* Engagement model */}
      <section className="relative">
        <div className="divider-gradient" />
        <div className="py-20 md:py-28 bg-white/[0.01]">
          <Container>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="animate-fade-up delay-0">
                <div className="text-xs font-medium uppercase tracking-wider text-white/40">Engagements</div>
                <div className="mt-3 text-lg font-semibold">
                  Flexible by design
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  We can lead a full build, augment an internal team, or own a
                  defined slice of a platform.
                </p>
              </div>
              <div className="animate-fade-up delay-100">
                <div className="text-xs font-medium uppercase tracking-wider text-white/40">Team shape</div>
                <div className="mt-3 text-lg font-semibold">
                  Senior and accountable
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  You work with experienced engineers and product leaders, not a
                  rotating bench.
                </p>
              </div>
              <div className="animate-fade-up delay-200">
                <div className="text-xs font-medium uppercase tracking-wider text-white/40">Outcomes</div>
                <div className="mt-3 text-lg font-semibold">
                  Ship reliably
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Strong engineering practices, clear communication, and
                  predictable delivery.
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
