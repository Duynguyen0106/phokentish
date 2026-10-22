import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingForm } from "@/components/booking/BookingForm";
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
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Reservations"
            title="Book a table"
            subtitle="Choose your date, time, and seating. Online bookings need at least 3 hours' notice. We confirm by email."
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

        <div className="min-w-0 border border-border bg-surface-alt p-4 sm:p-6 md:p-10">
          <Suspense
            fallback={
              <p className="font-serif text-lg text-muted">Loading booking form…</p>
            }
          >
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
