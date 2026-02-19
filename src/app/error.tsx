"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-xl">
          <div className="text-sm font-medium text-white/50">500</div>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Something went wrong.
          </h1>
          <p className="mt-4 text-white/70 leading-relaxed">
            An unexpected error occurred. Please try again or contact us if the problem persists.
          </p>
          <div className="mt-8 flex gap-3">
            <Button onClick={reset}>Try again</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
