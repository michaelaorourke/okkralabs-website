import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";

const staggerDelays = [
  "delay-0",
  "delay-100",
  "delay-200",
  "delay-0",
  "delay-100",
  "delay-200",
  "delay-0",
];

const industries = [
  {
    title: "Enterprise SaaS & B2B Platforms",
    desc: "Multi-tenant platforms, developer tools, and operational software.",
  },
  {
    title: "Cloud, Infrastructure & Developer Tools",
    desc: "High-scale systems, APIs, and cloud-native platforms.",
  },
  {
    title: "Healthcare & HealthTech",
    desc: "Digital health platforms, compliance-driven systems, and healthcare integrations.",
  },
  {
    title: "Fintech & Payments",
    desc: "Subscriptions, billing, payments, and financial workflows.",
  },
  {
    title: "Media, Content & Digital Experiences",
    desc: "Streaming, publishing, analytics, and consumer-facing platforms.",
  },
  {
    title: "Retail, E-commerce & Consumer Brands",
    desc: "Commerce platforms, digital experiences, and brand technology.",
  },
  {
    title: "Blockchain & Web3",
    desc: "Wallets, infrastructure, and decentralized applications.",
  },
];

export function Industries() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Industries we serve
          </h2>
          <p className="mt-3 text-white/60 leading-relaxed">
            We bring domain context, not just technical skills, to every
            engagement.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, idx) => (
            <Card
              key={ind.title}
              className={`animate-fade-up ${staggerDelays[idx]}`}
            >
              <div className="text-sm font-semibold">{ind.title}</div>
              <p className="mt-1.5 text-sm text-white/50 leading-relaxed">
                {ind.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
