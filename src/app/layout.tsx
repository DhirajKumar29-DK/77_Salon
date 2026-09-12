import type { Metadata } from "next";
import { Roboto, Playfair_Display, EB_Garamond, Antic_Didone } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-antic",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const garamond = EB_Garamond({
  variable: "--font-antic",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const antic = Antic_Didone({
  variable: "--font-antic",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "77 SALON | Style • Beauty • Care | Unisex Salon",
    template: "%s | 77 SALON",
  },
  icons: {
    icon: [
      { url: '/fav_logo.png?v=77', type: 'image/png' },
    ],
    shortcut: '/fav_logo.png?v=77',
    apple: '/fav_logo.png?v=77',
  },
  description:
    "77 SALON is a luxury unisex salon offering bespoke hair spa, Hydra Facials, precision haircutting, bridal treatments, gel extensions, and advanced body care rituals.",
  keywords: [
    "77 SALON",
    "Luxury Unisex Salon",
    "Hydra Facial",
    "Bridal Glow Facial",
    "Ice Cream Pedicure",
    "Gel Extensions",
    "Moroccan Hair Spa",
    "Men Grooming",
    "Waxing",
  ],
  authors: [{ name: "77 SALON" }],
  openGraph: {
    title: "77 SALON | Style • Beauty • Care",
    description:
      "Experience bespoke luxury hair, skin, nail, and grooming treatments at 77 SALON.",
    type: "website",
    locale: "en_IN",
    siteName: "77 SALON",
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
      className={`${roboto.variable} ${playfair.variable} ${garamond.variable} ${antic.variable} h-full antialiased scroll-smooth overflow-x-hidden`}
    >
      <head>
        <link rel="icon" href="/fav_logo.png?v=77" type="image/png" />
        <link rel="shortcut icon" href="/fav_logo.png?v=77" type="image/png" />
        <link rel="apple-touch-icon" href="/fav_logo.png?v=77" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a1a3f] text-[#f8fafc] font-sans selection:bg-[#d4af37] selection:text-[#faf7f2]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
