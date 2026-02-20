import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Work",
  alternates: { canonical: "/work" },
};

const industries = [
  {
    title: "Enterprise SaaS & B2B Platforms",
    desc: "We've built and scaled multi-tenant platforms, internal tools, and operational software for companies at every stage. Our work spans user management, billing systems, admin dashboards, and the APIs that tie them together.",
    highlights: [
      "Multi-tenant architecture design and implementation",
      "Admin tooling and internal dashboards",
      "Billing, subscription, and usage-based pricing systems",
      "Role-based access control and permissions frameworks",
    ],
    tags: ["Multi-tenant", "B2B", "Developer tools", "Operational software"],
  },
  {
    title: "Cloud, Infrastructure & Developer Tools",
    desc: "High-scale systems that need to be fast, observable, and maintainable. We've designed cloud-native architectures, built CI/CD pipelines, and helped teams move from legacy infrastructure to modern platforms.",
    highlights: [
      "Cloud-native architecture on AWS, GCP, and Azure",
      "CI/CD pipeline design and automation",
      "Infrastructure as code with Terraform and Pulumi",
      "Observability, logging, and alerting systems",
    ],
    tags: ["Cloud-native", "APIs", "DevOps", "Infrastructure"],
  },
  {
    title: "Healthcare & HealthTech",
    desc: "Digital health platforms, compliance-driven systems, and healthcare data integrations. We understand HIPAA requirements, EDI workflows, and the interoperability constraints that shape healthcare software.",
    highlights: [
      "EDI 837/835 claims processing and validation",
      "EHR and clinical system integrations",
      "HIPAA-compliant data handling and audit trails",
      "Patient-facing portals and provider tooling",
    ],
    tags: ["HIPAA", "EDI", "Clinical systems", "Interoperability"],
  },
  {
    title: "Fintech & Payments",
    desc: "Subscription billing, payment orchestration, and financial workflow automation. We've built systems that handle real money, with the reliability, auditability, and compliance rigor that demands.",
    highlights: [
      "Payment processing and gateway integrations",
      "Subscription and usage-based billing engines",
      "Financial reporting and reconciliation systems",
      "Compliance automation and audit-ready logging",
    ],
    tags: ["Payments", "Billing", "Compliance", "Financial workflows"],
  },
  {
    title: "Media, Content & Digital Experiences",
    desc: "Publishing platforms, content management systems, streaming infrastructure, and analytics. We've helped media companies deliver content at scale with the editorial and operational tooling to support it.",
    highlights: [
      "Content management and publishing platforms",
      "Streaming and media delivery infrastructure",
      "Analytics dashboards and audience insights",
      "Editorial workflow and collaboration tools",
    ],
    tags: ["Publishing", "Streaming", "Analytics", "CMS"],
  },
  {
    title: "Retail, E-commerce & Consumer Brands",
    desc: "Commerce platforms, digital storefronts, and the operational tooling that keeps them running. From catalog management to checkout flows to fulfillment integrations.",
    highlights: [
      "E-commerce platform development and optimization",
      "Catalog, inventory, and order management systems",
      "Checkout and payment flow optimization",
      "Fulfillment and logistics integrations",
    ],
    tags: ["E-commerce", "Digital experiences", "Brand technology", "Operations"],
  },
  {
    title: "Blockchain & Web3",
    desc: "Wallets, smart contract infrastructure, and decentralized applications. We've worked across the stack, from on-chain logic to the user-facing interfaces that make Web3 products accessible.",
    highlights: [
      "Wallet and key management systems",
      "Smart contract development and auditing",
      "Decentralized application frontends",
      "Token and NFT infrastructure",
    ],
    tags: ["Wallets", "Smart contracts", "dApps", "Infrastructure"],
  },
];

export default function WorkPage() {
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
            Work
          </Badge>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight animate-fade-up delay-100">
            Deep experience across industries that matter.
          </h1>
          <p className="mt-4 max-w-2xl text-white/60 leading-relaxed animate-fade-up delay-200">
            We bring domain context to every engagement. Here&apos;s where
            we&apos;ve done meaningful work and what that looks like in practice.
          </p>
        </Container>
      </section>

      {/* Industry sections */}
      {industries.map((ind, idx) => {
        const isAlt = idx % 2 === 0;
        return (
          <section key={ind.title} className="relative">
            {isAlt && <div className="divider-gradient" />}
            <div className={isAlt ? "py-14 md:py-20 bg-white/[0.01]" : "py-14 md:py-20"}>
              <Container>
                <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
                  <div className="animate-fade-up delay-0">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                      {ind.title}
                    </h2>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ind.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-xs text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Card className="animate-fade-up delay-100">
                    <div className="text-xs font-medium uppercase tracking-wider text-white/30 mb-4">
                      Representative work
                    </div>
                    <ul className="space-y-3">
                      {ind.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-white/60 leading-relaxed"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </Container>
            </div>
            {isAlt && <div className="divider-gradient" />}
          </section>
        );
      })}

      <CTA />
    </>
  );
}
