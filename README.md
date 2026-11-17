# Pho Kentish

Website and staff admin for **Pho Kentish** — Vietnamese street food in Kentish Town (formerly Pho Ta Vietnamese Street Food).

Public site structure mirrors [photarestaurants.com](https://www.photarestaurants.com/). Staff admin is ported from [Pho-ta-website](https://github.com/Duynguyen0106/Pho-ta-website).

## Features

- **Public site** — Home, menu, visit, reservations, FAQ, food safety, legal
- **Online booking** — Party size, time slots, seating preference
- **Staff admin** (`/admin`) — Bookings, menu, customers, closures, rota, settings, notifications, reports
- **Staff schedule** (`/staff/schedule`) — Employees download their rota with a personal token

## Quick start

```bash
npm install
npm run dev
```

- Site: http://localhost:3000
- Admin: http://localhost:3000/admin/login (default password `123456` unless `ADMIN_PASSWORD` is set)

## Production setup

1. Copy `.env.example` → Vercel environment variables
2. Set a strong `ADMIN_PASSWORD`
3. (Recommended) Create a Supabase project and run `supabase/setup-complete.sql`, then set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Configure email (SMTP or Resend) and optional Twilio SMS
5. Set `CRON_SECRET` for daily booking reminders (`vercel.json` cron at 09:00 UTC)

Without Supabase, admin/menu data falls back to local JSON (fine for local dev; ephemeral on Vercel).

## Venue

- **Address:** 85 Willes Road, Kentish Town, London NW5 3DN
- **Phone:** 020 7428 9898
- **Email:** Phovagrill@gmail.com
- **Live:** https://phokentish.vercel.app
