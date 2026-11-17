export const site = {
  name: "Pho Kentish",
  tagline: "Vietnamese Street Food in Kentish Town",
  description:
    "Authentic Vietnamese street food in Kentish Town — fragrant pho, fresh summer rolls, and warm hospitality at 85 Willes Road.",
  phone: "020 7428 9898",
  phoneHref: "tel:+442074289898",
  email: "Phovagrill@gmail.com",
  emailHref: "mailto:Phovagrill@gmail.com",
  address: {
    line1: "85 Willes Road",
    line2: "Kentish Town",
    postcode: "NW5 3DN",
    city: "London",
    full: "85 Willes Road, Kentish Town, London NW5 3DN",
  },
  hours: {
    weekdays: "Mon – Fri · 12:00pm – 3:30pm & 4:30pm – 9:30pm",
    weekend: "Sat – Sun · 12:00pm – 9:30pm",
    short: "Open daily · see visit page for hours",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=85+Willes+Road+Kentish+Town+NW5+3DN",
  instagram: "https://www.instagram.com/photastreetfood",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Visit" },
  { href: "/book", label: "Reserve" },
] as const;

export const footerLinks = [
  { href: "/faq", label: "Questions & answers" },
  { href: "/food-safety", label: "Food hygiene & allergies" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of use" },
  { href: "/cookies", label: "Cookie policy" },
] as const;
