import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve Your VIP Bridal Suite Date | Noraz Signature",
  description:
    "Secure your wedding date or luxury editorial session with Ekeh Chinenye Victory. Instant consultation scheduling and WhatsApp direct booking concierges.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Reserve Your VIP Bridal Suite Date | Noraz Signature",
    description:
      "Reserve your date with Noraz Signature. Secure VIP bridal suites, destination wedding concierges, and private editorial sessions.",
    url: "https://norazsignature.com/book",
    siteName: "Noraz Signature",
    images: [
      {
        url: "/og-book.jpg",
        width: 1200,
        height: 630,
        alt: "Noraz Signature VIP Bridal Suite Booking & Date Reservation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserve Your VIP Bridal Suite Date | Noraz Signature",
    description:
      "Secure your wedding date or luxury editorial session with Ekeh Chinenye Victory.",
    creator: "@noraz_signature",
    images: ["/og-book.jpg"],
  },
};

const bookingSchema = {
  "@context": "https://schema.org",
  "@type": "ReservationPackage",
  name: "Noraz Signature VIP Bridal Date Reservation",
  description: "Bespoke bridal makeup consultation and date reservation concierge.",
  provider: {
    "@type": "BeautySalon",
    name: "Noraz Signature",
    image: "https://norazsignature.com/og-book.jpg",
    telephone: "+2347086833653",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />
      {children}
    </>
  );
}
