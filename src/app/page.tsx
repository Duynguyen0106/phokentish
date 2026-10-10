import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { signatureDishes } from "@/lib/menu";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero — brand first, one composition, full-bleed image */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/pho-bo.jpg"
          alt="Bowl of fragrant beef pho at Pho Kentish"
          fill
          priority
          className="hero-zoom object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background" />
        <div className="section-pad relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-16 pt-28 md:pb-24">
          <p className="fade-up mb-4 text-xs tracking-[0.35em] text-gold-light uppercase">
            London · Kentish Town
          </p>
          <h1 className="fade-up-delay max-w-3xl">
            <span className="font-script block text-6xl text-yellow md:text-8xl">
              Pho Kentish
            </span>
            <span className="mt-3 block font-display text-2xl text-foreground md:text-4xl">
              Vietnamese street food, served with care
            </span>
          </h1>
          <p className="fade-up-delay-2 mt-5 max-w-xl font-serif text-xl leading-relaxed text-muted-light">
            Fragrant broths, fresh herbs, and the flavours of Vietnam — a short
            stroll from Camden, on Willes Road.
          </p>
          <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="border border-gold bg-gold/20 px-6 py-3.5 text-xs tracking-[0.25em] text-gold-light uppercase transition hover:bg-gold/30"
            >
              Reserve a table
            </Link>
            <Link
              href="/menu"
              className="border border-foreground/25 px-6 py-3.5 text-xs tracking-[0.25em] text-foreground uppercase transition hover:border-foreground/50"
            >
              View menu
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad mx-auto grid max-w-7xl gap-12 py-24 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/exterior.png"
            alt="Pho Kentish restaurant on Willes Road, Kentish Town"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Our story"
            title="A taste of the street"
            subtitle="Pho Kentish brings authentic Vietnamese street food to Kentish Town — healthy, tasty, and fresh."
          />
          <div className="mt-8 space-y-5 font-serif text-xl leading-relaxed text-muted">
            <p>
              Formerly known as Pho Ta Vietnamese Street Food, we are the same
              kitchen and the same welcome — now under a name that belongs to
              this neighbourhood.
            </p>
            <p>
              Whether you come for a calming bowl of pho, crispy spring rolls,
              or grilled vermicelli, every plate is prepared with care in our
              intimate dining room on Willes Road.
            </p>
          </div>
        </div>
      </section>

      {/* Signatures */}
      <section className="border-y border-border-subtle bg-surface py-24">
        <div className="section-pad mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The menu"
            title="Signature selections"
            subtitle="Handcrafted dishes that define the Pho Kentish experience."
            align="center"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {signatureDishes.map((dish) => (
              <article key={dish.name} className="group">
                <div className="relative mb-5 aspect-[3/4] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-display text-2xl">{dish.name}</h3>
                <p className="mt-2 font-serif text-lg text-muted">
                  {dish.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-block border border-gold/40 px-6 py-3 text-xs tracking-[0.25em] text-gold-light uppercase transition hover:bg-gold/10"
            >
              View full menu
            </Link>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="section-pad mx-auto max-w-7xl py-24">
        <SectionHeading
          eyebrow="Visit us"
          title="Pho Kentish"
          subtitle="Kentish Town — Vietnamese street food in a welcoming dining room."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-end">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/spread.png"
              alt="A spread of Vietnamese dishes at Pho Kentish"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl">Kentish Town</h3>
              <p className="mt-2 font-serif text-xl text-muted">
                {site.address.line1}
                <br />
                {site.address.line2}, {site.address.postcode}
              </p>
            </div>
            <div className="space-y-1 text-muted">
              <p>{site.hours.weekdays}</p>
              <p>{site.hours.weekend}</p>
            </div>
            <p>
              <a
                href={site.phoneHref}
                className="text-xl text-gold-light hover:text-gold"
              >
                {site.phone}
              </a>
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/book"
                className="border border-gold bg-gold/15 px-5 py-3 text-xs tracking-[0.2em] text-gold-light uppercase transition hover:bg-gold/25"
              >
                Reserve a table
              </Link>
              <Link
                href="/locations"
                className="border border-foreground/25 px-5 py-3 text-xs tracking-[0.2em] uppercase transition hover:border-foreground/50"
              >
                Plan your visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / hygiene teaser */}
      <section className="border-t border-border-subtle bg-surface-alt py-24">
        <div className="section-pad mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Before you dine"
            title="Questions, hygiene & allergies"
            subtitle="Helpful information before you visit us."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/faq"
              className="border border-border bg-surface p-8 transition hover:border-gold/50"
            >
              <h3 className="font-display text-2xl">Questions & answers</h3>
              <p className="mt-3 font-serif text-lg text-muted">
                Reservations, opening hours, dietary requirements, parking, and
                more.
              </p>
              <span className="mt-6 inline-block text-xs tracking-[0.2em] text-gold uppercase">
                Read Q&A →
              </span>
            </Link>
            <Link
              href="/food-safety"
              className="border border-border bg-surface p-8 transition hover:border-gold/50"
            >
              <h3 className="font-display text-2xl">Food hygiene & allergies</h3>
              <p className="mt-3 font-serif text-lg text-muted">
                Our food safety standards and allergen guidance for the 14 major
                allergens.
              </p>
              <span className="mt-6 inline-block text-xs tracking-[0.2em] text-gold uppercase">
                Allergen info →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="relative overflow-hidden py-28">
        <Image
          src="/images/summer-rolls.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="section-pad relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Reservations
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            We look forward to welcoming you
          </h2>
          <p className="mt-5 font-serif text-xl text-muted">
            Secure your table in moments. Select your preferred time and we will
            confirm by email.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-block border border-gold bg-gold/20 px-8 py-4 text-xs tracking-[0.25em] text-gold-light uppercase transition hover:bg-gold/30"
          >
            Book a table
          </Link>
        </div>
      </section>
    </>
  );
}
