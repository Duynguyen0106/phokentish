import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Pho Kentish website.",
};

export default function TermsPage() {
  return (
    <section className="section-pad mx-auto max-w-3xl py-20 md:py-28">
      <SectionHeading
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="Please read these terms before using the Pho Kentish website."
      />

      <div className="mt-12 space-y-8 font-serif text-lg leading-relaxed text-muted">
        <section>
          <h2 className="font-display text-2xl text-foreground">1. About these terms</h2>
          <p className="mt-3">
            This website is operated by Pho Kentish ({site.address.full}). By
            using the site you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">2. Reservations</h2>
          <p className="mt-3">
            Online booking requests are subject to availability and confirmation
            by the restaurant. We may contact you to adjust time or party size.
            Please arrive on time; tables may be released if you are
            significantly late without notice.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">3. Menu & prices</h2>
          <p className="mt-3">
            Menu items and prices on this website are indicative and may change.
            The menu available in the restaurant on the day of your visit takes
            precedence.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">4. Allergies</h2>
          <p className="mt-3">
            Guests are responsible for informing us of allergies. See our{" "}
            <Link href="/food-safety" className="text-gold-light">
              Food hygiene & allergies
            </Link>{" "}
            page.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">5. Intellectual property</h2>
          <p className="mt-3">
            Content on this site — including text, branding, and photographs —
            is owned by or licensed to Pho Kentish. You may not copy or reuse it
            for commercial purposes without permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">6. Contact</h2>
          <p className="mt-3">
            Questions about these terms:{" "}
            <a href={site.emailHref} className="text-gold-light">
              {site.email}
            </a>{" "}
            or {site.phone}.
          </p>
        </section>

        <p className="text-sm">Last updated: October 2026</p>
      </div>
    </section>
  );
}
