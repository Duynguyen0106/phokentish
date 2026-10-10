import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Questions & Answers",
  description:
    "FAQ for Pho Kentish — reservations, opening hours, dietary requirements, parking, and more.",
};

const faqs = [
  {
    group: "Reservations",
    items: [
      {
        q: "Do I need a reservation?",
        a: "We welcome walk-ins when tables are available, but reserving ahead is recommended — especially on weekends and for groups of four or more. Our dining room is intimate, with roughly ten tables.",
      },
      {
        q: "How far in advance can I book?",
        a: "You can request a table online for any future date during opening hours. For large groups or celebrations, please call us so we can plan seating.",
      },
      {
        q: "How soon can I book for today?",
        a: "For same-day bookings, please call us on " +
          site.phone +
          ". Online requests are best with a few hours' notice.",
      },
      {
        q: "Can I change or cancel my booking?",
        a: "Yes — email or call us with your name and booking time. As much notice as possible helps us welcome other guests.",
      },
      {
        q: "Will I receive a confirmation?",
        a: "Yes. After you send a reservation request, we confirm by email (or phone if preferred).",
      },
    ],
  },
  {
    group: "Dining with us",
    items: [
      {
        q: "What are your opening hours?",
        a: `${site.hours.weekdays}. ${site.hours.weekend}.`,
      },
      {
        q: "Do you cater for dietary requirements?",
        a: "Yes. We offer vegetarian and vegan dishes, and many items can be prepared gluten-free. Please tell us about allergies when booking and again when you arrive. See our food hygiene page for allergen guidance.",
      },
      {
        q: "Is there a dress code?",
        a: "No — we are a casual Vietnamese street-food restaurant. Come as you are.",
      },
      {
        q: "Do you have high chairs or space for pushchairs?",
        a: "We can usually accommodate families. Please mention a pushchair or high chair when you book so we can arrange seating.",
      },
    ],
  },
  {
    group: "Menu & visit",
    items: [
      {
        q: "What is on the menu?",
        a: "We serve pho, starters, wok & grill dishes, rice plates, and drinks. Browse the full menu online or ask your server about any dish.",
      },
      {
        q: "Do you offer takeaway or delivery?",
        a: "Yes — eat in, takeaway, and delivery are available. Call us for takeaway orders or ask about current delivery partners.",
      },
      {
        q: "Where can I park?",
        a: "Street parking is available nearby; spaces can be limited at peak times. Public transport via Kentish Town or Camden Road is often easiest.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <section className="section-pad mx-auto max-w-3xl py-20 md:py-28">
      <SectionHeading
        eyebrow="Guest information"
        title="Questions & Answers"
        subtitle="Everything you need to know before your visit — from booking to dietary requirements."
      />

      <div className="mt-14 space-y-14">
        {faqs.map((section) => (
          <div key={section.group}>
            <h2 className="mb-6 text-xs tracking-[0.3em] text-gold uppercase">
              {section.group}
            </h2>
            <div className="space-y-6">
              {section.items.map((item) => (
                <details
                  key={item.q}
                  className="group border-b border-border-subtle pb-6"
                >
                  <summary className="cursor-pointer list-none font-display text-xl marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span className="text-gold transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 font-serif text-lg leading-relaxed text-muted">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border border-border bg-surface p-8 text-center">
        <p className="font-serif text-xl text-muted">Still have a question?</p>
        <p className="mt-2 text-muted">
          Call{" "}
          <a href={site.phoneHref} className="text-gold-light">
            {site.phone}
          </a>{" "}
          or ask when you book.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/book"
            className="border border-gold/40 px-5 py-2.5 text-xs tracking-[0.2em] text-gold-light uppercase transition hover:bg-gold/10"
          >
            Book a table
          </Link>
          <Link
            href="/food-safety"
            className="border border-foreground/20 px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition hover:border-foreground/40"
          >
            Food hygiene & allergies
          </Link>
        </div>
      </div>
    </section>
  );
}
