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
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 vignette" />
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <Badge className="animate-fade-up delay-0">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Contact
            </Badge>
            <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight animate-fade-up delay-100">
              Tell us about your project.
            </h1>
            <p className="mt-4 text-white/70 leading-relaxed max-w-md animate-fade-up delay-200">
              We respond within 1&ndash;2 business days. If it&apos;s easier,
              email us directly at{" "}
              <a
                className="text-white hover:underline"
                href="mailto:hello@okkralabs.com"
              >
                hello@okkralabs.com
              </a>
              .
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/70 animate-fade-up delay-300">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                <span>New Products &amp; Platforms</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                <span>Modernization &amp; Performance</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
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
