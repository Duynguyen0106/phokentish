import { siteImages } from "./images";

/** Homepage featured dishes — full menu is loaded from menu-store */
export const featuredDishes = [
  {
    name: "Special Pho Kentish Mixed Beef",
    description:
      "Meat balls, rare steak and well cooked beef noodle soup — our signature pho.",
    image: siteImages.dishes.specialPho,
    featured: true,
  },
  {
    name: "Bun Cha",
    description:
      "Vermicelli with grilled mixed pork belly and vegetables spring rolls — a Hanoi classic.",
    image: siteImages.dishes.bunCha,
    featured: true,
  },
  {
    name: "Pho Chay",
    description:
      "Flat rice noodles soup with tofu and vegetables — fragrant and vegetarian.",
    image: siteImages.dishes.vegetablePho,
    featured: true,
  },
];
