"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-background/90 backdrop-blur-md">
      <div className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex items-baseline gap-1.5"
          onClick={() => setOpen(false)}
        >
          <span className="font-script text-3xl text-yellow md:text-4xl">
            Pho
          </span>
          <span className="font-display text-lg tracking-[0.18em] text-foreground uppercase md:text-xl">
            Kentish
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.22em] uppercase transition-colors ${
                  active
                    ? "text-gold-light"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/book"
            className="border border-gold/50 bg-gold/10 px-4 py-2 text-xs tracking-[0.2em] text-gold-light uppercase transition hover:bg-gold/20"
          >
            Book
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-foreground transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-foreground transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-full bg-foreground transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-background md:hidden">
          <nav className="section-pad flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-[0.18em] text-muted uppercase hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="py-3 text-sm tracking-[0.12em] text-gold-light"
            >
              {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
