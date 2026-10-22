import type { Location } from "../types";

export const location: Location = {
  slug: "kentish-town",
  name: "Pho Kentish",
  shortName: "Kentish Town",
  address: "85 Willes Road, Kentish Town",
  city: "London",
  postcode: "NW5 3DN",
  phone: "020 7428 9898",
  email: "Phovagrill@gmail.com",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=85+Willes+Road+Kentish+Town+London+NW5+3DN",
  maxCoversPerSlot: 20,
  openTime: "12:00",
  closeTime: "21:30",
  slotIntervalMinutes: 30,
};

/** @deprecated Use `location` — kept for imports that iterate a single venue */
export const locations: Location[] = [location];

export function getLocation(slug: string): Location | undefined {
  if (slug === location.slug) return location;
  return undefined;
}
