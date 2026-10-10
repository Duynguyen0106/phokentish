import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Food Hygiene & Allergies",
  description:
    "Food hygiene standards and allergen information at Pho Kentish, Kentish Town.",
};

const allergens = [
  {
    title: "Cereals containing gluten",
    body: "Some noodles, spring roll wrappers, and marinades may contain wheat or gluten.",
    examples: "Certain noodles, dumplings, some sauces",
  },
  {
    title: "Crustaceans & molluscs",
    body: "Prawns, crab, and squid appear in several dishes and stocks.",
    examples: "Seafood pho, salt & pepper squid, prawn summer rolls",
  },
  {
    title: "Eggs",
    body: "Used in some batters, noodles, and desserts.",
    examples: "Certain stir-fries, egg noodles",
  },
  {
    title: "Fish",
    body: "Fish sauce (nước mắm) is used widely in Vietnamese cooking.",
    examples: "Most pho broths, marinades, dipping sauces",
  },
  {
    title: "Peanuts & tree nuts",
    body: "Peanuts and nuts may be used as garnishes or in sauces.",
    examples: "Salads, noodle toppings, peanut dipping sauce",
  },
  {
    title: "Soy",
    body: "Soy sauce and tofu are common across the menu.",
    examples: "Marinades, vegetarian options, wok dishes",
  },
  {
    title: "Sesame",
    body: "Sesame oil and seeds may be used in dressings and garnishes.",
    examples: "Some salads and wok dishes",
  },
  {
    title: "Celery, mustard & sulphites",
    body: "May be present in stocks, seasonings, or wine used in cooking.",
    examples: "Stocks and some stews",
  },
];

export default function FoodSafetyPage() {
  return (
    <section className="section-pad mx-auto max-w-3xl py-20 md:py-28">
      <SectionHeading
        eyebrow="Your wellbeing"
        title="Food Hygiene & Allergies"
        subtitle="We take food safety seriously. Please read this if you or a guest has allergies or dietary requirements."
      />

      <p className="mt-8 border-l-2 border-gold/60 bg-surface py-4 pl-5 font-serif text-lg text-muted">
        If you have a <strong className="font-normal text-foreground">severe food allergy</strong>,
        please speak to a manager before ordering. We cannot guarantee an
        allergen-free kitchen environment.
      </p>

      <div className="mt-14 space-y-10">
        <div>
          <h2 className="mb-4 text-xs tracking-[0.3em] text-gold uppercase">
            Our hygiene commitment
          </h2>
          <div className="space-y-6 font-serif text-lg leading-relaxed text-muted">
            <div>
              <h3 className="font-display text-xl text-foreground">
                Food hygiene standards
              </h3>
              <p className="mt-2">
                Pho Kentish follows UK food safety law and HACCP principles. Our
                kitchen maintains cleaning schedules, temperature controls, and
                staff training so every dish is prepared safely.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground">
                Fresh ingredients
              </h3>
              <p className="mt-2">
                We source quality produce and proteins regularly. Stocks and
                broths are prepared in-house; herbs and garnishes are prepared
                fresh for service.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground">
                Staff training
              </h3>
              <p className="mt-2">
                Food-handling staff receive allergen awareness training. If you
                have questions about how a dish is prepared, please ask before
                ordering.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xs tracking-[0.3em] text-gold uppercase">
            Allergen information
          </h2>
          <p className="mb-6 font-serif text-lg text-muted">
            Under UK law, we provide information on 14 major allergens. The
            following may be present in our menu:
          </p>
          <ul className="space-y-5">
            {allergens.map((a) => (
              <li key={a.title} className="border-b border-border-subtle pb-5">
                <h3 className="font-display text-xl">{a.title}</h3>
                <p className="mt-2 text-muted">{a.body}</p>
                <p className="mt-1 text-sm text-muted">
                  Examples: {a.examples}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-border bg-surface p-6 md:p-8">
          <h2 className="font-display text-2xl">Important advice</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 font-serif text-lg text-muted">
            <li>
              A full allergen matrix is available on request — ask your server
              or manager.
            </li>
            <li>
              We cannot guarantee a completely allergen-free environment because
              ingredients are prepared in a shared kitchen.
            </li>
            <li>
              Always declare allergies when booking in special requests, and
              remind your server when you arrive.
            </li>
            <li>
              Allergy information you provide is handled carefully — see our{" "}
              <Link href="/privacy" className="text-gold-light">
                Privacy policy
              </Link>
              .
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/faq"
          className="text-sm tracking-[0.15em] text-muted uppercase hover:text-foreground"
        >
          ← Questions & Answers
        </Link>
        <Link
          href="/book"
          className="text-sm tracking-[0.15em] text-gold-light uppercase hover:text-gold"
        >
          Book with dietary notes →
        </Link>
      </div>
    </section>
  );
}
