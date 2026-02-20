"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/container";
import { site } from "@/lib/site";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* close drawer on navigation */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl">
      <div className="absolute bottom-0 left-0 right-0 divider-gradient" />
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-5 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
          {site.nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={cn(
                "transition hover:text-white",
                pathname === i.href && "text-white"
              )}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CalendlyButton variant="secondary" size="sm" className="hidden sm:inline-flex" />

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/70 transition hover:bg-white/[0.06]"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-300 ease-out",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <Container className="flex flex-col gap-1 pt-6">
          {site.nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={cn(
                "rounded-lg px-4 py-3 text-lg font-medium transition hover:bg-white/[0.04]",
                pathname === i.href ? "text-white bg-white/[0.04]" : "text-white/60"
              )}
            >
              {i.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <CalendlyButton size="lg" className="w-full justify-center" />
          </div>
        </Container>
      </div>
    </header>
  );
}
