import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-xl">
          <div className="text-sm font-medium text-white/50">404</div>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Page not found.
          </h1>
          <p className="mt-4 text-white/70 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex gap-3">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
