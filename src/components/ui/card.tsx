import * as React from "react";
import { cn } from "@/lib/cn";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "card-glow rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:-translate-y-0.5 hover:border-white/[0.10] hover:bg-white/[0.03]",
        className
      )}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-lg font-semibold text-white", className)} {...props} />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-2 text-sm text-white/60 leading-relaxed", className)} {...props} />
  );
}
