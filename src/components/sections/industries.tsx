import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import {
  Server,
  Cloud,
  HeartPulse,
  Landmark,
  Tv,
  ShoppingCart,
  Link as LinkIcon,
} from "lucide-react";

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
    icon: Server,
    title: "Enterprise SaaS & B2B Platforms",
    desc: "Multi-tenant platforms, developer tools, and operational software.",
  },
  {
    icon: Cloud,
    title: "Cloud, Infrastructure & Developer Tools",
    desc: "High-scale systems, APIs, and cloud-native platforms.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & HealthTech",
    desc: "Digital health platforms, compliance-driven systems, and healthcare integrations.",
  },
  {
    icon: Landmark,
    title: "Fintech & Payments",
    desc: "Subscriptions, billing, payments, and financial workflows.",
  },
  {
    icon: Tv,
    title: "Media, Content & Digital Experiences",
    desc: "Streaming, publishing, analytics, and consumer-facing platforms.",
  },
  {
    icon: ShoppingCart,
    title: "Retail, E-commerce & Consumer Brands",
    desc: "Commerce platforms, digital experiences, and brand technology.",
  },
  {
    icon: LinkIcon,
    title: "Blockchain & Web3",
    desc: "Wallets, infrastructure, and decentralized applications.",
  },
];

export function Industries() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-2xl animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Industries we serve
          </h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            We bring domain context, not just technical skills, to every
            engagement.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Card
                key={ind.title}
                className={`animate-fade-up ${staggerDelays[idx]}`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl2 border border-white/10 bg-white/5">
                    <Icon className="h-4 w-4 text-white/70" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{ind.title}</div>
                    <p className="mt-1 text-sm text-white/60 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
