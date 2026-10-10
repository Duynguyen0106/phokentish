import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import {
  formatItemPrice,
  menuCategories,
  type MenuTag,
} from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the Pho Kentish menu — pho, starters, wok & grill, rice dishes, and drinks in Kentish Town.",
};

const tagLabels: Record<MenuTag, string> = {
  GF: "GF",
  V: "V",
  Vg: "Vg",
  Mild: "Mild",
  Signature: "Signature",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border-subtle py-20 md:py-28">
        <Image
          src="/images/spring-rolls.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          aria-hidden
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="section-pad relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Eat well"
            title="The Menu"
            subtitle="Browse our dishes. Filter by dietary tags when you ask your server — GF gluten-free options, V vegetarian, Vg vegan."
          />
          <p className="mt-6 text-sm text-muted">
            Pho Kentish · Kentish Town · Daily menu · Prices may vary
          </p>
        </div>
      </section>

      <div className="section-pad mx-auto max-w-7xl py-16">
        <nav className="mb-14 flex flex-wrap gap-3 border-b border-border-subtle pb-6">
          {menuCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="text-xs tracking-[0.18em] text-muted uppercase transition hover:text-gold-light"
            >
              {cat.name}
            </a>
          ))}
        </nav>

        <div className="space-y-20">
          {menuCategories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-28">
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-border-subtle pb-4">
                <h2 className="font-display text-3xl md:text-4xl">
                  {category.name}
                </h2>
                <span className="text-xs tracking-[0.2em] text-muted uppercase">
                  {category.items.length} dishes
                </span>
              </div>
              <ul className="divide-y divide-border-subtle">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="grid gap-3 py-6 md:grid-cols-[1fr_auto] md:items-start"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl md:text-2xl">
                          {item.name}
                        </h3>
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] tracking-[0.15em] uppercase ${
                              tag === "Signature"
                                ? "text-gold"
                                : "text-muted"
                            }`}
                          >
                            {tag === "Signature" ? "★ " : ""}
                            {tagLabels[tag]}
                          </span>
                        ))}
                      </div>
                      <p className="mt-2 max-w-2xl font-serif text-lg text-muted">
                        {item.description}
                      </p>
                      {item.options && (
                        <ul className="mt-3 space-y-1 text-sm text-muted">
                          {item.options.map((opt) => (
                            <li key={opt.name} className="flex gap-4">
                              <span>{opt.name}</span>
                              <span className="text-gold-light">
                                £{opt.price % 1 === 0 ? opt.price : opt.price.toFixed(2)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <p className="font-serif text-xl text-gold-light md:pt-1">
                      {formatItemPrice(item)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 border border-border bg-surface p-8 text-center md:p-10">
          <p className="font-serif text-xl text-muted">
            Allergies or dietary needs? Please tell us when you book or arrive —
            see our{" "}
            <Link href="/food-safety" className="text-gold-light underline-offset-2 hover:underline">
              food hygiene & allergies
            </Link>{" "}
            page.
          </p>
          <Link
            href="/book"
            className="mt-6 inline-block border border-gold/40 px-6 py-3 text-xs tracking-[0.2em] text-gold-light uppercase transition hover:bg-gold/10"
          >
            Reserve a table
          </Link>
        </div>
      </div>
    </>
  );
}
