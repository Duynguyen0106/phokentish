import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Pho Kentish uses cookies on this website.",
};

export default function CookiesPage() {
  return (
    <section className="section-pad mx-auto max-w-3xl py-20 md:py-28">
      <SectionHeading
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="This site uses minimal cookies required for hosting and basic functionality."
      />

      <div className="mt-12 space-y-8 font-serif text-lg leading-relaxed text-muted">
        <section>
          <h2 className="font-display text-2xl text-foreground">What we use</h2>
          <p className="mt-3">
            Our public website is designed to work with minimal cookies. Our
            hosting provider may process technical data (such as IP address and
            browser type) to deliver and secure the site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">
            Essential / technical
          </h2>
          <p className="mt-3">
            Necessary for security, load balancing, and remembering basic
            preferences where applicable. These do not require consent under UK
            guidance when strictly necessary.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">Analytics</h2>
          <p className="mt-3">
            We do not currently run third-party advertising cookies. If we add
            analytics in future, we will update this policy and seek consent
            where required.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">More information</h2>
          <p className="mt-3">
            See our{" "}
            <Link href="/privacy" className="text-gold-light">
              Privacy policy
            </Link>{" "}
            for how personal data is handled.
          </p>
        </section>

        <p className="text-sm">Last updated: October 2026</p>
      </div>
    </section>
  );
}
