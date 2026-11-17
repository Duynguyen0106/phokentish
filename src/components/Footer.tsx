import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle bg-surface-alt">
      <div className="section-pad mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-baseline gap-1.5">
            <span className="font-script text-3xl text-yellow">Pho</span>
            <span className="font-display text-lg tracking-[0.18em] uppercase">
              Kentish
            </span>
          </div>
          <p className="max-w-sm font-serif text-lg leading-relaxed text-muted">
            Authentic Vietnamese street food in Kentish Town. Fresh ingredients,
            fragrant broths, and warm hospitality.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs tracking-[0.25em] text-gold uppercase">
            Visit us
          </h3>
          <p className="font-serif text-lg text-foreground">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.postcode}
          </p>
          <p className="mt-4">
            <a
              href={site.phoneHref}
              className="text-gold-light transition hover:text-gold"
            >
              {site.phone}
            </a>
          </p>
          <p>
            <a
              href={site.emailHref}
              className="text-muted transition hover:text-foreground"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-4 text-sm text-muted">{site.hours.weekdays}</p>
          <p className="text-sm text-muted">{site.hours.weekend}</p>
        </div>

        <div>
          <h3 className="mb-4 text-xs tracking-[0.25em] text-gold uppercase">
            Guest information
          </h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/book"
            className="mt-6 inline-block border border-gold/40 px-5 py-2.5 text-xs tracking-[0.2em] text-gold-light uppercase transition hover:bg-gold/10"
          >
            Reserve
          </Link>
        </div>
      </div>

      <div className="section-pad border-t border-border-subtle py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {site.name}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
