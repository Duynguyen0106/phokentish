"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const times = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const date = String(data.get("date") || "").trim();
    const time = String(data.get("time") || "").trim();
    const guests = String(data.get("guests") || "").trim();
    const notes = String(data.get("notes") || "").trim();

    if (!name || !email || !phone || !date || !time || !guests) {
      setError("Please fill in all required fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Table reservation — ${name} — ${date} ${time}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Date: ${date}`,
        `Time: ${time}`,
        `Guests: ${guests}`,
        `Venue: Pho Kentish — ${site.address.full}`,
        notes ? `Special requests: ${notes}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-gold/30 bg-surface p-8 text-center md:p-12">
        <p className="text-xs tracking-[0.25em] text-gold uppercase">
          Request ready
        </p>
        <h3 className="mt-3 font-display text-3xl">Thanks for booking</h3>
        <p className="mt-4 font-serif text-lg text-muted">
          Your email client should open with the reservation details. If it
          doesn&apos;t, call us on{" "}
          <a href={site.phoneHref} className="text-gold-light">
            {site.phone}
          </a>{" "}
          or email{" "}
          <a href={site.emailHref} className="text-gold-light">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.2em] text-muted uppercase">
            Name *
          </span>
          <input name="name" required className="luxury-input" />
        </label>
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.2em] text-muted uppercase">
            Email *
          </span>
          <input name="email" type="email" required className="luxury-input" />
        </label>
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.2em] text-muted uppercase">
            Phone *
          </span>
          <input name="phone" type="tel" required className="luxury-input" />
        </label>
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.2em] text-muted uppercase">
            Guests *
          </span>
          <select name="guests" required className="luxury-input" defaultValue="2">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </label>
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.2em] text-muted uppercase">
            Date *
          </span>
          <input name="date" type="date" required className="luxury-input" />
        </label>
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.2em] text-muted uppercase">
            Time *
          </span>
          <select name="time" required className="luxury-input" defaultValue="">
            <option value="" disabled>
              Select a time
            </option>
            {times.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-xs tracking-[0.2em] text-muted uppercase">
          Special requests
        </span>
        <textarea
          name="notes"
          rows={4}
          className="luxury-input resize-y"
          placeholder="Allergies, celebration, accessibility…"
        />
      </label>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        className="w-full border border-gold bg-gold/15 px-6 py-3.5 text-xs tracking-[0.25em] text-gold-light uppercase transition hover:bg-gold/25 md:w-auto"
      >
        Book now
      </button>

      <p className="text-sm text-muted">
        Prefer to call?{" "}
        <a href={site.phoneHref} className="text-gold-light">
          {site.phone}
        </a>
      </p>
    </form>
  );
}
