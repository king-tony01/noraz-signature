import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Bridal Suite Investment & Estimator | Noraz Signature",
  description:
    "Estimate your custom wedding day beauty investment with our interactive luxury bridal package calculator. Transparent pricing for bridal suites, touch-ups, and entourage.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Bespoke Bridal Suite Investment & Estimator | Noraz Signature",
    description:
      "Calculate your luxury wedding day beauty investment with real-time estimates for bridal suites, entourage glam, and VIP touch-ups.",
    url: "https://norazsignature.com/pricing",
    siteName: "Noraz Signature",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Noraz Signature Luxury Bridal Investment & Suite Estimator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Bridal Suite Investment & Estimator | Noraz Signature",
    description:
      "Interactive bridal makeup calculator and transparent pricing for luxury Nigerian and destination weddings.",
    creator: "@norazsignature",
    images: ["/og-pricing.jpg"],
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bespoke Bridal Suite Investment & Estimator",
  description: "Interactive luxury bridal makeup pricing calculator and bespoke suite package estimator.",
  url: "https://norazsignature.com/pricing",
  publisher: {
    "@type": "BeautySalon",
    name: "Noraz Signature",
    image: "https://norazsignature.com/og-pricing.jpg",
    telephone: "+2347086833653",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      {children}
    </>
  );
}
