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
    "Noraz Signature by Ekeh Chinenye Victory delivers bespoke bridal transformations, royal traditional ceremonies, editorial campaigns, and masterclasses across Lagos and international destinations.",
  keywords: [
    "Noraz Signature",
    "Ekeh Chinenye Victory",
    "Luxury Bridal Makeup Lagos",
    "African Wedding Makeup Artist",
    "Traditional Nigerian Bridal Beauty",
    "Editorial Makeup Artist Lagos",
    "Melanin Complexion Specialist",
    "Destination Wedding Makeup Artist",
    "Bespoke Bridal Suite Lagos",
    "Lekki Victoria Island Makeup Artist",
  ],
  authors: [
    { name: "Ekeh Chinenye Victory", url: "https://norazsignature.com" },
    { name: "Noraz Signature" },
  ],
  creator: "Ekeh Chinenye Victory",
  publisher: "Noraz Signature",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
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
      "Bespoke bridal concierges, flawless skin matching, and high-fashion artistry by Ekeh Chinenye Victory.",
    url: "https://norazsignature.com",
    siteName: "Noraz Signature",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Noraz Signature - Bespoke Luxury Bridal & Editorial Artistry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noraz Signature | Luxury Bridal & Editorial Makeup Artistry",
    description:
      "Bespoke bridal concierges, flawless skin matching, and high-fashion artistry by Ekeh Chinenye Victory.",
    creator: "@norazsignature",
    images: ["/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Noraz Signature",
  image: "https://norazsignature.com/og-home.jpg",
  founder: {
    "@type": "Person",
    name: "Ekeh Chinenye Victory",
    jobTitle: "Founder & Lead Artistry Director",
    url: "https://norazsignature.com/about",
  },
  telephone: "+2347086833653",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Victoria Island & Lekki Phase 1",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.4281,
    longitude: 3.4219,
  },
  url: "https://norazsignature.com",
  sameAs: ["https://instagram.com/noraz_signature"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
