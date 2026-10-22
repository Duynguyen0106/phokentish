import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Josefin_Sans,
  Playfair_Display,
} from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Vietnamese Street Food in Kentish Town`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Pho Kentish",
    "Vietnamese restaurant",
    "Kentish Town",
    "pho",
    "street food",
    "London",
    "Willes Road",
  ],
  openGraph: {
    title: `${site.name} | Vietnamese Street Food`,
    description: site.description,
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: "/images/exterior.png",
    apple: "/images/exterior.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefin.variable} ${cormorant.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="luxury-grain flex min-h-full flex-col bg-background font-sans text-lg font-light text-foreground">
        {children}
      </body>
    </html>
  );
}
