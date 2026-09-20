import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#241A18",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://norazsignature.com"),
  title: {
    default: "Noraz Signature | Luxury Bridal & Editorial Makeup Artistry",
    template: "%s | Noraz Signature",
  },
  description:
    "Bespoke professional makeup artistry specializing in luxury bridal transformations, traditional weddings, high-fashion editorial, and masterclasses for diverse skin tones.",
  keywords: [
    "Noraz Signature",
    "Luxury Bridal Makeup",
    "African Wedding Makeup Artist",
    "Editorial Makeup Artist",
    "Melanated Skin Specialist",
    "Bridal Glamour",
    "Celebrity Makeup Artist",
    "Masterclass Makeup Coaching",
  ],
  authors: [{ name: "Ekeh Chinenye Victory" }, { name: "Noraz Signature" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title: "Noraz Signature | Luxury Bridal & Editorial Makeup Artistry",
    description:
      "Timeless glamour, flawless complexion matching, and luxury bridal concierges crafted for your most memorable moments.",
    url: "https://norazsignature.com",
    siteName: "Noraz Signature",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Noraz Signature Monogram",
      },
    ],
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
