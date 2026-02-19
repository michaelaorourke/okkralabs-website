"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/container";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
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
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-lg">
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
          <ButtonLink href={site.calendly} variant="secondary" size="sm" className="hidden sm:inline-flex">
            Book a call
          </ButtonLink>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl2 border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
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
                "rounded-xl2 px-4 py-3 text-lg font-medium transition hover:bg-white/5",
                pathname === i.href ? "text-white bg-white/5" : "text-white/70"
              )}
            >
              {i.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-white/10">
            <ButtonLink href={site.calendly} size="lg" className="w-full justify-center">
              Book a call
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
