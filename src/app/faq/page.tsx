import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { FAQ } from "@/components/FAQ";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Sparkles, MessageCircle, HelpCircle, ShieldCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Policies | Noraz Signature",
  description:
    "Get clear answers on retainers, bridal trial scheduling, worldwide travel logistics, sanitation standards, and wedding morning timelines at Noraz Signature.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions & Policies | Noraz Signature",
    description:
      "Clear, transparent answers regarding retainer deposits, bridal trials, worldwide travel logistics, and sanitation standards.",
    url: "https://norazsignature.com/faq",
    siteName: "Noraz Signature",
    images: [
      {
        url: "/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "Noraz Signature Frequently Asked Questions & Studio Policies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions & Policies | Noraz Signature",
    description:
      "Clear answers on bridal reservations, retainers, destination travel, and sanitation standards.",
    creator: "@norazsignature",
    images: ["/og-faq.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far in advance should I secure my wedding date?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend reserving 6 to 12 months in advance, especially for peak wedding seasons (October through January). Dates are secured strictly upon receipt of a signed contract and non-refundable retainer deposit.",
      },
    },
    {
      "@type": "Question",
      name: "Do you travel internationally for destination weddings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Noraz Signature regularly travels across Nigeria, Africa, the United Kingdom, Europe, North America, and the Caribbean for destination ceremonies. Custom destination quotes include return flights, secure transfers, and hotel accommodations.",
      },
    },
    {
      "@type": "Question",
      name: "Is a bridal preview or trial session mandatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While not legally mandatory, a bridal preview is strongly encouraged. It allows us to analyze your undertone, skin type, dress neckline, and veil placement, ensuring a relaxed, seamless wedding morning.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <PageHeader
        badge="Studio Policies & Clarity"
        title="Frequently Asked Questions & Policies"
        description="Clear, transparent answers regarding retainer deposits, bridal trials, worldwide travel logistics, and sanitation standards."
        breadcrumb="FAQ"
      />

      {/* Main FAQ Accordion Component */}
      <FAQ />

      <CtaBanner
        title="Have an Unanswered Question?"
        subtitle="Our studio concierge is readily available on WhatsApp to discuss your unique date, entourage size, or travel requirements."
      />

      <Footer />

      {/* Floating VIP WhatsApp Widget */}
      <div
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 40,
        }}
      >
        <a
          href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20have%20a%20specific%20question%20regarding%20booking"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--color-brand-espresso)",
            color: "var(--color-brand-champagne)",
            border: "1px solid var(--color-brand-champagne)",
            padding: "0.75rem 1.15rem",
            borderRadius: "0px",
            boxShadow: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
            }}
          >
            <MessageCircle size={14} />
          </div>
          <span>VIP Artistry Concierge</span>
        </a>
      </div>
    </main>
  );
}
