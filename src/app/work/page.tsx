import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import {
  Server,
  Cloud,
  HeartPulse,
  Landmark,
  Tv,
  ShoppingCart,
  Link as LinkIcon,
} from "lucide-react";

export const metadata = {
  title: "Work",
  alternates: { canonical: "/work" },
};

const industries = [
  {
    icon: Server,
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
    icon: Cloud,
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
    icon: HeartPulse,
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
    icon: Landmark,
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
    icon: Tv,
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
    icon: ShoppingCart,
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
    icon: LinkIcon,
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

const staggerDelays = ["delay-0", "delay-100", "delay-200"];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 vignette" />
        <Container className="relative py-16 md:py-20">
          <Badge className="animate-fade-up delay-0">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            Work
          </Badge>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight animate-fade-up delay-100">
            Deep experience across industries that matter.
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed animate-fade-up delay-200">
            We bring domain context to every engagement. Here&apos;s where
            we&apos;ve done meaningful work and what that looks like in practice.
          </p>
        </Container>
      </section>

      {/* Industry sections */}
      {industries.map((ind, idx) => {
        const Icon = ind.icon;
        const isAlt = idx % 2 === 0;
        return (
          <section
            key={ind.title}
            className={
              isAlt
                ? "py-12 md:py-16 border-y border-white/5 bg-white/[0.02]"
                : "py-12 md:py-16"
            }
          >
            <Container>
              <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
                {/* Left: industry header */}
                <div className="animate-fade-up delay-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl2 border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-white/70" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold">
                      {ind.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed">
                    {ind.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ind.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: highlights */}
                <Card className="animate-fade-up delay-100">
                  <div className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                    Representative work
                  </div>
                  <ul className="space-y-3">
                    {ind.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Container>
          </section>
        );
      })}

      <CTA />
    </>
  );
}
