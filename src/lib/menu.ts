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
        tags: ["GF"],
      },
      {
        id: "s02",
        name: "Nem Hai San",
        description: "Crispy crab, prawn & pork spring rolls with nuoc cham (2 rolls)",
        price: 7.5,
        tags: ["GF"],
      },
      {
        id: "s03",
        name: "Nem Rau",
        description: "Crispy vegetable spring rolls with nuoc cham",
        price: 6.5,
        tags: ["GF", "V", "Vg"],
      },
      {
        id: "s04",
        name: "Goi Cuon Tom",
        description: "Fresh king prawn summer rolls with peanut sauce",
        price: 8,
        tags: ["GF"],
      },
      {
        id: "s05",
        name: "Goi Cuon Ga",
        description: "Chicken summer rolls with peanut sauce",
        price: 7.5,
        tags: ["GF"],
      },
      {
        id: "s06",
        name: "Goi Cuon Rau",
        description: "Vegetable summer rolls with peanut sauce",
        price: 7,
        tags: ["GF", "V", "Vg"],
      },
      {
        id: "s07",
        name: "Muc Muoi",
        description: "Salt & pepper squid with sweet chilli sauce",
        price: 10,
        tags: ["GF", "Mild"],
      },
      {
        id: "s08",
        name: "Canh Ga Chien",
        description: "Vietnamese golden chicken wings with chilli sauce",
        price: 9,
        tags: ["GF", "Mild"],
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
        price: 12.5,
        tags: ["GF", "Signature"],
      },
      {
        id: "m02",
        name: "Pho Bo Chin",
        description: "Well-cooked beef noodle soup",
        price: 12.5,
        tags: ["GF"],
      },
      {
        id: "m03",
        name: "Special Mixed Beef Pho",
        description: "Meatballs, rare steak & well-cooked beef noodle soup",
        price: 14,
        tags: ["GF", "Signature"],
      },
      {
        id: "m04",
        name: "Pho Ga",
        description: "Chicken noodle soup",
        price: 12.5,
        tags: ["GF"],
      },
      {
        id: "m05",
        name: "Pho Tom",
        description: "King prawn noodle soup",
        price: 13.5,
        tags: ["GF"],
      },
      {
        id: "m06",
        name: "Pho Chay",
        description: "Mushroom & vegetable noodle soup",
        price: 12,
        tags: ["GF", "V", "Vg"],
      },
      {
        id: "m07",
        name: "Bun Hue",
        description: "Spicy vermicelli soup",
        priceFrom: 13,
        priceTo: 15,
        tags: ["GF", "Mild", "Signature"],
        options: [
          { name: "Chicken", price: 13 },
          { name: "Beef", price: 13.5 },
          { name: "King prawn", price: 15 },
        ],
      },
    ],
  },
  {
    id: "wok",
    name: "Wok & Grill",
    items: [
      {
        id: "w01",
        name: "Pho Xao",
        description: "Wok stir-fried flat rice noodles with Asian vegetables",
        priceFrom: 12.5,
        priceTo: 14,
        tags: ["GF"],
        options: [
          { name: "Chicken", price: 12.5 },
          { name: "Beef", price: 13 },
          { name: "King prawn", price: 14 },
          { name: "Tofu & vegetables", price: 12.5 },
        ],
      },
      {
        id: "w02",
        name: "Bun Cha",
        description: "Vermicelli with grilled pork belly & spring roll",
        price: 14,
        tags: ["GF", "Signature"],
      },
      {
        id: "w03",
        name: "Bun Ga Nuong",
        description: "Grilled chicken thighs vermicelli with nuoc cham",
        price: 13.5,
        tags: ["GF"],
      },
      {
        id: "w04",
        name: "Bun Thit Nuong",
        description: "Grilled pork vermicelli with vegetables & nuoc cham",
        price: 13,
        tags: ["GF"],
      },
      {
        id: "w05",
        name: "Bun Nem",
        description: "Vermicelli with spring rolls, herbs & nuoc cham",
        price: 12.5,
        tags: ["GF"],
      },
    ],
  },
  {
    id: "rice",
    name: "Rice Dishes",
    items: [
      {
        id: "r01",
        name: "Com Ga Nuong",
        description: "Broken rice with grilled chicken thighs & nuoc cham",
        price: 13.5,
        tags: ["GF", "Signature"],
      },
      {
        id: "r02",
        name: "Com Ca Ri",
        description: "Broken rice with Vietnamese curry & vegetables",
        priceFrom: 12.5,
        priceTo: 14.5,
        tags: ["GF"],
        options: [
          { name: "Chicken", price: 12.5 },
          { name: "King prawn", price: 14.5 },
          { name: "Tofu & vegetables", price: 12.5 },
        ],
      },
      {
        id: "r03",
        name: "Com Chien",
        description: "Vietnamese wok fried rice with vegetables",
        priceFrom: 12,
        priceTo: 14.5,
        tags: ["GF"],
        options: [
          { name: "Chicken", price: 12 },
          { name: "Beef", price: 12.5 },
          { name: "King prawn", price: 14 },
          { name: "Special (chicken & prawn)", price: 14.5 },
        ],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: "d01",
        name: "Vietnamese Iced Coffee",
        description: "Strong coffee with condensed milk over ice",
        price: 4.5,
      },
      {
        id: "d02",
        name: "Fresh Juice",
        description: "Ask for today's pressed juices",
        price: 4.5,
      },
      {
        id: "d03",
        name: "Bia Saigon / Asian beers",
        description: "Vietnamese and Southeast Asian beers",
        priceFrom: 4.5,
      },
      {
        id: "d04",
        name: "Soft drinks",
        description: "Coca-Cola, Sprite, and still or sparkling water",
        priceFrom: 2.5,
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
    name: "Bun Nem",
    description: "Vermicelli with crispy spring rolls, herbs and nuoc cham.",
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
