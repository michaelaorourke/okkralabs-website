import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/ui/logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <Container className="py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link href="/">
              <Logo className="h-4 w-auto" />
            </Link>
            <p className="mt-3 text-sm text-white/60 max-w-md">
              Startup velocity. Enterprise-grade discipline.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            {site.nav.map((i) => (
              <Link key={i.href} href={i.href} className="hover:text-white transition">
                {i.label}
              </Link>
            ))}
            <a
              className="hover:text-white transition"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
