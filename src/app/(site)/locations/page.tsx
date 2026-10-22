import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `Visit Pho Kentish at ${site.address.full}. Opening hours, directions, and contact details.`,
};

export default function LocationsPage() {
  return (
    <>
      <section className="section-pad mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading
          eyebrow="Visit"
          title="Pho Kentish"
          subtitle="Kentish Town — authentic Vietnamese street food a short walk from Camden."
        />
      </section>

      <section className="section-pad mx-auto grid max-w-7xl gap-12 pb-24 md:grid-cols-2 md:items-start">
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
          <Image
            src="/images/exterior.png"
            alt="Pho Kentish storefront on Willes Road"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-10 md:pt-4">
          <div>
            <h2 className="font-display text-3xl">Kentish Town</h2>
            <p className="mt-4 font-serif text-xl leading-relaxed text-muted">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.postcode}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs tracking-[0.25em] text-gold uppercase">
              Opening hours
            </h3>
            <p className="text-muted">{site.hours.weekdays}</p>
            <p className="text-muted">{site.hours.weekend}</p>
            <p className="mt-3 text-sm text-muted">
              Kitchen closes 30 minutes before closing time.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs tracking-[0.25em] text-gold uppercase">
              Contact
            </h3>
            <p>
              <a
                href={site.phoneHref}
                className="text-xl text-gold-light hover:text-gold"
              >
                {site.phone}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={site.emailHref}
                className="text-muted hover:text-foreground"
              >
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs tracking-[0.25em] text-gold uppercase">
              Getting here
            </h3>
            <p className="font-serif text-lg text-muted">
              A short walk from Kentish Town and Camden Road stations. Limited
              street parking nearby — allow extra time at peak hours. Our dining
              room is intimate (around ten tables), so booking ahead is
              recommended at weekends.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/book"
              className="border border-gold bg-gold/15 px-6 py-3 text-xs tracking-[0.2em] text-gold-light uppercase transition hover:bg-gold/25"
            >
              Reserve a table
            </Link>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/25 px-6 py-3 text-xs tracking-[0.2em] uppercase transition hover:border-foreground/50"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-surface py-20">
        <div className="section-pad mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            {
              src: "/images/nem-thit.jpg",
              alt: "Crispy spring rolls",
            },
            {
              src: "/images/pho-ga.jpg",
              alt: "Chicken and prawn pho",
            },
            {
              src: "/images/bia-saigon.jpg",
              alt: "Vietnamese beer at the table",
            },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
