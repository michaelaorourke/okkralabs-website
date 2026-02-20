import * as React from "react";
import { cn } from "@/lib/cn";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/60 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}
