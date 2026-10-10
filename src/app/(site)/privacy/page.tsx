import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pho Kentish handles personal information on this website.",
};

export default function PrivacyPage() {
  return (
    <section className="section-pad mx-auto max-w-3xl py-20 md:py-28">
      <SectionHeading
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we handle your personal information when you use our website and booking service."
      />

      <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
        <Link href="/privacy" className="text-gold-light">
          Privacy policy
        </Link>
        <Link href="/terms" className="hover:text-foreground">
          Terms of use
        </Link>
        <Link href="/cookies" className="hover:text-foreground">
          Cookie policy
        </Link>
        <Link href="/food-safety" className="hover:text-foreground">
          Food hygiene & allergies
        </Link>
      </div>

      <div className="prose-legal mt-12 space-y-8 font-serif text-lg leading-relaxed text-muted">
        <section>
          <h2 className="font-display text-2xl text-foreground">1. Who we are</h2>
          <p className="mt-3">
            Pho Kentish operates Vietnamese dining at {site.address.full}. We
            are the data controller for personal information collected through
            this website and reservation requests.
          </p>
          <p className="mt-3">
            For privacy enquiries, contact{" "}
            <a href={site.emailHref} className="text-gold-light">
              {site.email}
            </a>{" "}
            or call {site.phone} during opening hours.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">
            2. Information we collect
          </h2>
          <p className="mt-3">When you make a reservation or contact us, we may collect:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Your name, email address, and telephone number</li>
            <li>Reservation details: date, time, party size, and notes</li>
            <li>Special requests (e.g. dietary needs, celebrations)</li>
            <li>
              Technical data when you use the site (browser type, IP address,
              pages visited) through our hosting provider
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">
            3. How and why we use your data
          </h2>
          <p className="mt-3">We use your information to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Process and manage your table reservation</li>
            <li>Send booking confirmations and updates</li>
            <li>Contact you about changes or questions regarding your visit</li>
            <li>Improve our service and keep our website secure</li>
          </ul>
          <p className="mt-3">
            Our lawful bases under UK GDPR include performance of a contract
            (honouring your booking), consent where applicable, and legitimate
            interests in running the restaurant safely.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">
            4. Who we share data with
          </h2>
          <p className="mt-3">
            We use trusted service providers for website hosting and email
            delivery. We do not sell your personal data. We may disclose
            information if required by law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">5. Your rights</h2>
          <p className="mt-3">
            Under UK data protection law you may request access, correction,
            erasure, restriction, or object to certain processing. Contact{" "}
            <a href={site.emailHref} className="text-gold-light">
              {site.email}
            </a>
            . You may also lodge a complaint with the ICO (ico.org.uk).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-foreground">6. Cookies</h2>
          <p className="mt-3">
            See our{" "}
            <Link href="/cookies" className="text-gold-light">
              Cookie policy
            </Link>{" "}
            for details.
          </p>
        </section>

        <p className="text-sm">Last updated: October 2026</p>
      </div>
    </section>
  );
}
