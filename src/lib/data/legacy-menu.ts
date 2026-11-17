import { siteImages } from "./images";

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  tags?: string[];
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
}

export const dailyMenuCategories: MenuCategory[] = [
  {
    id: "daily-starters",
    name: "STARTERS",
    items: [
      {
        name: "S01 Nem Thit (3 Rolls)",
        description: "Crispy pork spring rolls served with nuoc cham sauce",
        price: "£7.50",
      },
      {
        name: "S02 Nem Hai San (2 Rolls)",
        description:
          "Crispy crab, prawn and pork spring rolls served with nuoc cham sauce",
        price: "£8.00",
      },
      {
        name: "S03 Nem Rau (3 Rolls)",
        description: "Crispy vegetable spring rolls served with soya sauce",
        price: "£7.00",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "S04 Goi Cuon Ga (2 Rolls)",
        description: "Chicken summer rolls served with peanut sauce",
        price: "£7.50",
      },
      {
        name: "S05 Goi Cuon Tom (2 Rolls)",
        description: "King prawn summer rolls served with peanut sauce",
        price: "£8.00",
      },
      {
        name: "S06 Goi Cuon Rau (2 Rolls)",
        description: "Veggie summer rolls served with peanut sauce",
        price: "£7.00",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "S07 Canh Ga Chien",
        description: "Vietnamese golden chicken wings served with chilli sauce",
        price: "£8.00",
        tags: ["Mild"],
      },
      {
        name: "S08 Banh Xeo",
        description:
          "Vietnamese crispy prawn and chicken crepe served with nuoc cham sauce",
        price: "£13.00",
      },
      {
        name: "S08A Banh Xeo Chay",
        description:
          "Vietnamese crispy vegetarian crepe served with soya sauce",
        price: "£12.50",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "S09 Muc Muoi",
        description: "Salt and pepper squid served with sweet chilli sauce",
        price: "£10.00",
        tags: ["Mild"],
      },
      {
        name: "S10 Tom Chien Xu",
        description: "Crispy butterfly prawns served with sweet chilli sauce",
        price: "£8.00",
        tags: ["Mild"],
      },
      {
        name: "S11 Stir-Fried Mixed Vegetables",
        description: "Stir-fried seasonal vegetables",
        price: "£7.50",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "S12 Banh Phong Tom",
        description: "Prawn cracker",
        price: "£3.50",
      },
    ],
  },
  {
    id: "daily-vietnamese-salad",
    name: "VIETNAMESE SALAD",
    items: [
      {
        name: "N01 Nom Ga (Chicken Salad)",
        description: "Chicken salad served with homemade dressing",
        price: "£10.50",
      },
      {
        name: "N02 Nom Rau (Vegetables Salad)",
        description: "Vegetables mixed with herbs served with homemade dressing",
        price: "£9.50",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "N03 Nom Tom (King Prawn Salad)",
        description:
          "Vegetables mixed with herbs and king prawns served with homemade dressing",
        price: "£11.50",
      },
      {
        name: "N04 Nom Bo Du Du (Papaya Dried Beef Salad)",
        description:
          "Papaya mixed with herbs and dried beef served with homemade dressing",
        price: "£12.00",
      },
      {
        name: "N05 Nom Tom Du Du (Papaya King Prawns Salad)",
        description:
          "Papaya mixed with herbs and king prawns served with homemade dressing",
        price: "£12.00",
      },
    ],
  },
  {
    id: "daily-main-course-soup",
    name: "MAIN COURSE SOUP",
    items: [
      {
        name: "★ M01 Pho Bo Tai",
        description: "Rare steak beef noodle soup",
        price: "£14.00",
        featured: true,
      },
      {
        name: "M02 Pho Bo Chin",
        description: "Well cooked beef noodle soup",
        price: "£13.00",
      },
      {
        name: "M03 Pho Bo Vien",
        description: "Beef ball noodle soup",
        price: "£13.50",
      },
      {
        name: "M04 Pho Tai Lan",
        description: "Stir-fried beef noodle soup",
        price: "£14.50",
      },
      {
        name: "M05 Pho Bo Sot Vang",
        description: "Stewed beef in red wine noodle soup",
        price: "£14.50",
      },
      {
        name: "★ M06 Pho Dac Biet",
        description: "Prawn, chicken and stir-fried beef noodle soup",
        price: "£15.00",
        featured: true,
      },
      {
        name: "M07 Pho Ga",
        description: "Chicken noodle soup",
        price: "£13.00",
      },
      {
        name: "M08 Pho Tom",
        description: "King prawns noodle soup",
        price: "£14.50",
      },
      {
        name: "★ M09 Special Pho Kentish Mixed Beef",
        description:
          "Meat balls, rare steak and well cooked beef noodle soup",
        price: "£15.00",
        featured: true,
      },
      {
        name: "★ M10 Bun Hue",
        description:
          "Spicy vermicelli noodle soup (Chicken £13.50 · Beef £14.50 · King Prawn £15.50)",
        price: "£13.50 – £15.50",
        tags: ["Mild"],
        featured: true,
      },
    ],
  },
  {
    id: "daily-wok-and-grill",
    name: "WOK AND GRILL",
    items: [
      {
        name: "M11 Pho Xao",
        description:
          "Wok stir-fried flat rice noodle with Asian vegetables (Chicken £12.50 · Beef £13.00 · King Prawns £14.50)",
        price: "£12.50 – £14.50",
      },
      {
        name: "M12 Bun",
        description:
          "Vermicelli mix with wok stir-fried vegetables served with nuoc cham sauce (Chicken £12.50 · Pork Spring Rolls £12.50 · Beef £13.00 · King Prawns £14.50)",
        price: "£12.50 – £14.50",
      },
      {
        name: "★ M13 Bun Ga Nuong",
        description: "Vermicelli with grilled chicken thighs",
        price: "£13.50",
        featured: true,
      },
      {
        name: "★ M14 Bun Cha",
        description:
          "Vermicelli with grilled mixed pork belly and vegetables spring rolls",
        price: "£14.00",
        featured: true,
      },
    ],
  },
  {
    id: "daily-jasmine-rice",
    name: "JASMINE RICE",
    items: [
      {
        name: "M15 Com Ga Nuong",
        description:
          "Jasmine rice with grilled chicken thighs served with vegetables and nuoc cham sauce",
        price: "£13.50",
      },
      {
        name: "M16 Com Sot Vang",
        description: "Jasmine rice with Vietnamese red wine beef stew",
        price: "£14.00",
      },
      {
        name: "M17 Com Chien",
        description:
          "Vietnamese wok fried rice served with vegetable and soya sauce (Chicken £12.50 · Beef £13.00 · King Prawns £14.00)",
        price: "£12.50 – £14.00",
      },
      {
        name: "M18 Com Ca Ri",
        description:
          "Jasmine rice with Vietnamese curry and vegetables (Chicken £12.50 · Beef £13.00 · King Prawns £14.00)",
        price: "£12.50 – £14.00",
      },
      {
        name: "M19 Com Suon Nuong",
        description:
          "Vietnamese grilled pork chop and fried egg served with nuoc cham sauce",
        price: "£13.50",
      },
      {
        name: "★ M20 Pork Belly Stew with Rice",
        description: "Slow-cooked pork belly stew served with jasmine rice",
        price: "£13.00",
        featured: true,
      },
      {
        name: "★ M21 Com Sot Xoai",
        description:
          "Jasmine rice served with mango sauce (Chicken £11.50 · Prawn £13.00)",
        price: "£11.50 – £13.00",
        featured: true,
      },
    ],
  },
  {
    id: "daily-kids-corner",
    name: "KID’S CORNER",
    note: "For children under 15 years old",
    items: [
      {
        name: "K01 Kids Curry with Rice or Vermicelli",
        description: "Vegetables £7.50 · Chicken £7.50 · King Prawns £8.00",
        price: "£7.50 – £8.00",
      },
      {
        name: "K02 Kids Egg Fried Rice",
        description: "Vegetables £7.50 · Chicken £7.50 · King Prawns £8.00",
        price: "£7.50 – £8.00",
      },
      {
        name: "K03 Pho Chicken Noodle Soup",
        description: "Chicken noodle soup for children",
        price: "£8.00",
      },
      {
        name: "K04 Wok Stir-Fried Flat Rice Noodles",
        description:
          "Vegetables & Tofu £7.50 · Chicken £7.50 · King Prawns £8.20",
        price: "£7.50 – £8.20",
      },
      {
        name: "K05 Vermicelli with Stir-Fried Mix Beansprouts",
        description:
          "Vegetables & Tofu £7.00 · Chicken £7.00 · King Prawns £7.50",
        price: "£7.00 – £7.50",
      },
    ],
  },
  {
    id: "daily-vegetarian-menu",
    name: "VEGETARIAN MENU",
    items: [
      {
        name: "★ V01 Pho Chay",
        description: "Flat rice noodles soup with tofu and vegetables",
        price: "£12.00",
        tags: ["Vegetarian", "Vegan"],
        featured: true,
      },
      {
        name: "V02 Pho Xao Chay",
        description: "Wok stir-fried flat rice noodle with tofu and vegetables",
        price: "£12.00",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "V03 Bun Nem Rau",
        description:
          "Vermicelli with crispy vegetable spring rolls served with nuoc cham sauce",
        price: "£12.00",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "V04 Bun Dau Phu",
        description:
          "Vermicelli with tofu and vegetables served with nuoc cham sauce",
        price: "£12.00",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "V05 Com Ca Ri Dau Hu",
        description: "Jasmine rice with Vietnamese curry and tofu",
        price: "£12.00",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "V06 Bun Ca Ri Tofu",
        description: "Vermicelli with Vietnamese curry and tofu",
        price: "£12.00",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "V07 Com Chien Chay",
        description: "Vegetarian fried rice",
        price: "£12.00",
        tags: ["Vegetarian", "Vegan"],
      },
      {
        name: "V08 Com Sot Xoai Tofu",
        description: "Jasmine rice served with mango sauce and tofu",
        price: "£12.00",
        tags: ["Vegetarian", "Vegan"],
      },
    ],
  },
  {
    id: "daily-desserts",
    name: "DESSERTS",
    items: [
      {
        name: "Banh Chuoi Chien",
        description: "Without ice cream",
        price: "£6.00",
        tags: ["Vegetarian"],
      },
      {
        name: "Banh Chuoi Chien with Vanilla Ice Cream",
        description: "With vanilla ice cream",
        price: "£7.50",
        tags: ["Vegetarian"],
      },
      {
        name: "Ice Cream Vanilla",
        description: "Vanilla ice cream",
        price: "£4.00",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "daily-soft-drinks",
    name: "SOFT DRINKS",
    items: [
      {
        name: "Fresh Juice",
        description: "Apple / Orange / Pineapple / Carrot",
        price: "£5.00",
        tags: ["Vegan"],
      },
      {
        name: "Tropical Mixed Juice",
        description: "Mixed tropical fruit juice",
        price: "£5.50",
        tags: ["Vegan"],
      },
      {
        name: "Soft Drinks",
        description: "Coke / Diet Coke / 7Up / Fanta",
        price: "£2.50",
        tags: ["Vegan"],
      },
      {
        name: "Jasmine Tea",
        description: "Hot jasmine tea",
        price: "£2.00",
        tags: ["Vegan"],
      },
      {
        name: "Sparkling or Still Water",
        description: "Sparkling water or still water",
        price: "£2.50",
        tags: ["Vegan"],
      },
      {
        name: "Homemade Lemonade",
        description: "Fresh homemade lemonade",
        price: "£5.00",
        tags: ["Vegan"],
      },
      {
        name: "Honey Ice Lemon Tea",
        description: "Iced lemon tea with honey",
        price: "£5.00",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "daily-coffee",
    name: "COFFEE",
    items: [
      {
        name: "Ca Phe Den",
        description: "Vietnamese black coffee",
        price: "£5.00",
        tags: ["Vegan"],
      },
      {
        name: "Ca Phe Sua",
        description: "Vietnamese condensed milk coffee",
        price: "£5.00",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "daily-alcohol",
    name: "ALCOHOL",
    items: [
      {
        name: "Beer",
        description: "Hanoi Beer / Saigon Beer / Singha Beer",
        price: "£5.50",
      },
      {
        name: "House Wine (Glass)",
        description: "Red wine or white wine",
        price: "£6.00",
      },
      {
        name: "House Wine (Bottle)",
        description: "Red wine or white wine",
        price: "£22.50",
      },
      {
        name: "Prosecco Glass",
        description: "Prosecco by the glass",
        price: "£7.00",
      },
    ],
  },
  {
    id: "daily-extra",
    name: "EXTRA",
    items: [
      { name: "Vegetables", description: "Extra vegetables", price: "£2.00" },
      { name: "Meat", description: "Extra meat", price: "£3.50" },
      {
        name: "Grilled Chicken",
        description: "Extra grilled chicken",
        price: "£4.50",
      },
      {
        name: "King Prawns",
        description: "Extra king prawns",
        price: "£4.00",
      },
      { name: "Fried Rice", description: "Side of fried rice", price: "£4.00" },
      {
        name: "Steamed Rice",
        description: "Side of steamed rice",
        price: "£3.50",
      },
    ],
  },
];

/** Lunch menu removed — kept empty for schema compatibility. */
export const lunchMenuNote = "";
export const lunchMenuCategories: MenuCategory[] = [];

/** @deprecated use dailyMenuCategories */
export const menuCategories = dailyMenuCategories;

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
