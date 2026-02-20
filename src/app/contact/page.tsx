import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow animate-glow-pulse" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 vignette" />
      <Container className="relative py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <Badge className="animate-fade-up delay-0">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400/80" />
              Contact
            </Badge>
            <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight animate-fade-up delay-100">
              Tell us about your project.
            </h1>
            <p className="mt-4 text-white/60 leading-relaxed max-w-md animate-fade-up delay-200">
              We&apos;ll get back to you within 24 hours. Usually much sooner. If it&apos;s easier,
              email us directly at{" "}
              <a
                className="text-white/80 hover:text-white transition"
                href="mailto:hello@okkralabs.com"
              >
                hello@okkralabs.com
              </a>
              .
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/60 animate-fade-up delay-300">
              <div className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-accent-400/40" />
                <span>New Products &amp; Platforms</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-accent-400/40" />
                <span>Modernization &amp; Performance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-accent-400/40" />
                <span>Ongoing Engineering Partnership</span>
              </div>
            </div>
          </div>

          <Card className="p-6 animate-fade-up delay-200">
            <ContactForm />
          </Card>
        </div>
      </Container>
    </section>
  );
}
