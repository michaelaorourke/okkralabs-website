"use client";

import { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "text";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "btn-glow bg-white text-black hover:bg-white/90 rounded-lg font-medium",
  secondary:
    "bg-white/[0.04] text-white/80 hover:text-white hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.12] rounded-lg font-medium",
  ghost:
    "bg-transparent text-white/70 hover:text-white hover:bg-white/[0.04] border border-transparent rounded-lg font-medium",
  text: "text-white/60 hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
};

interface CalendlyButtonProps {
  text?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function CalendlyButton({
  text = "Book a call",
  variant = "primary",
  size = "md",
  className,
}: CalendlyButtonProps) {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootEl(document.body);
  }, []);

  if (!rootEl) {
    // SSR / first render fallback — renders a matching styled span to avoid layout shift
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 cursor-pointer",
          variant !== "text" && sizeClasses[size],
          variantClasses[variant],
          className
        )}
      >
        {text}
      </span>
    );
  }

  return (
    <PopupButton
      url={site.calendly}
      rootElement={rootEl}
      text={text}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200 cursor-pointer",
        variant !== "text" && sizeClasses[size],
        variantClasses[variant],
        className
      )}
    />
  );
}
