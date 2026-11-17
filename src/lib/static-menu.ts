export type MenuTag = "GF" | "V" | "Vg" | "Mild" | "Signature";

export type MenuOption = {
  name: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price?: number;
  priceFrom?: number;
  priceTo?: number;
  tags?: MenuTag[];
  options?: MenuOption[];
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

/** Compact static menu used for homepage signatures / offline fallback. */
export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    items: [
      {
        id: "s01",
        name: "Nem Thit",
        description: "Crispy pork spring rolls served with nuoc cham sauce (3 rolls)",
        price: 7.5,
      },
      {
        id: "s05",
        name: "Goi Cuon Tom",
        description: "King prawn summer rolls served with peanut sauce (2 rolls)",
        price: 8,
      },
      {
        id: "s09",
        name: "Muc Muoi",
        description: "Salt and pepper squid served with sweet chilli sauce",
        price: 10,
        tags: ["Mild"],
      },
    ],
  },
  {
    id: "pho",
    name: "Pho Noodle Soup",
    items: [
      {
        id: "m01",
        name: "Pho Bo Tai",
        description: "Rare steak beef noodle soup",
        price: 14,
        tags: ["Signature"],
      },
      {
        id: "m09",
        name: "Special Pho Kentish Mixed Beef",
        description: "Meat balls, rare steak and well cooked beef noodle soup",
        price: 15,
        tags: ["Signature"],
      },
      {
        id: "m07",
        name: "Pho Ga",
        description: "Chicken noodle soup",
        price: 13,
      },
      {
        id: "v01",
        name: "Pho Chay",
        description: "Flat rice noodles soup with tofu and vegetables",
        price: 12,
        tags: ["V", "Vg"],
      },
      {
        id: "m10",
        name: "Bun Hue",
        description: "Spicy vermicelli noodle soup",
        priceFrom: 13.5,
        priceTo: 15.5,
        tags: ["Mild", "Signature"],
        options: [
          { name: "Chicken", price: 13.5 },
          { name: "Beef", price: 14.5 },
          { name: "King prawn", price: 15.5 },
        ],
      },
    ],
  },
  {
    id: "wok",
    name: "Wok & Grill",
    items: [
      {
        id: "m11",
        name: "Pho Xao",
        description: "Wok stir-fried flat rice noodle with Asian vegetables",
        priceFrom: 12.5,
        priceTo: 14.5,
        options: [
          { name: "Chicken", price: 12.5 },
          { name: "Beef", price: 13 },
          { name: "King prawns", price: 14.5 },
        ],
      },
      {
        id: "m14",
        name: "Bun Cha",
        description:
          "Vermicelli with grilled mixed pork belly and vegetables spring rolls",
        price: 14,
        tags: ["Signature"],
      },
      {
        id: "m13",
        name: "Bun Ga Nuong",
        description: "Vermicelli with grilled chicken thighs",
        price: 13.5,
      },
    ],
  },
  {
    id: "rice",
    name: "Jasmine Rice",
    items: [
      {
        id: "m15",
        name: "Com Ga Nuong",
        description:
          "Jasmine rice with grilled chicken thighs served with vegetables and nuoc cham sauce",
        price: 13.5,
      },
      {
        id: "m20",
        name: "Pork Belly Stew with Rice",
        description: "Slow-cooked pork belly stew served with jasmine rice",
        price: 13,
        tags: ["Signature"],
      },
      {
        id: "m21",
        name: "Com Sot Xoai",
        description: "Jasmine rice served with mango sauce",
        priceFrom: 11.5,
        priceTo: 13,
        options: [
          { name: "Chicken", price: 11.5 },
          { name: "Prawn", price: 13 },
        ],
      },
    ],
  },
];

export const signatureDishes = [
  {
    name: "Pho Bo Tai",
    description: "Rare steak beef noodle soup — our Kentish Town classic.",
    image: "/images/pho-bo.jpg",
    alt: "Bowl of beef pho with herbs and chilli",
  },
  {
    name: "Summer Rolls",
    description: "Fresh rice-paper rolls with peanut sauce — light and fragrant.",
    image: "/images/summer-rolls.jpg",
    alt: "Fresh prawn summer rolls with peanut sauce",
  },
  {
    name: "Bun Cha",
    description:
      "Vermicelli with grilled pork belly, spring rolls, herbs and nuoc cham.",
    image: "/images/bun-bowl.jpg",
    alt: "Vermicelli noodle bowl with spring roll and herbs",
  },
] as const;

export function formatPrice(n: number) {
  return `£${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`;
}

export function formatItemPrice(item: MenuItem) {
  if (item.price != null) return formatPrice(item.price);
  if (item.priceFrom != null && item.priceTo != null) {
    return `${formatPrice(item.priceFrom)} – ${formatPrice(item.priceTo)}`;
  }
  if (item.priceFrom != null) return `from ${formatPrice(item.priceFrom)}`;
  return "";
}
