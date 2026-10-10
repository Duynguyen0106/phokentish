import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book a table at Pho Kentish in Kentish Town. Choose your date, time, and party size.",
};

export default function BookPage() {
  return (
    <section className="section-pad mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Reservations"
            title="Book a table"
            subtitle="Choose your date, time, and party size. We confirm by email. For same-day bookings, please call us."
          />
          <div className="mt-10 space-y-6 border border-border bg-surface p-6 md:p-8">
            <div>
              <p className="text-xs tracking-[0.25em] text-gold uppercase">
                Venue
              </p>
              <h3 className="mt-2 font-display text-2xl">Pho Kentish</h3>
              <p className="mt-2 font-serif text-lg text-muted">
                {site.address.full}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] text-gold uppercase">
                Hours
              </p>
              <p className="mt-2 text-muted">{site.hours.weekdays}</p>
              <p className="text-muted">{site.hours.weekend}</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] text-gold uppercase">
                Call
              </p>
              <a
                href={site.phoneHref}
                className="mt-2 inline-block text-xl text-gold-light"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="border border-border bg-surface-alt p-6 md:p-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
