import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Portfolio } from "@/components/Portfolio";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Haute Artistry Lookbook & Portfolio | Noraz Signature",
  description:
    "View our bespoke bridal lookbook featuring Traditional Nigerian weddings, luxury white bridal suites, red carpet beauty, and interactive before & after transformations.",
  alternates: {
    canonical: "/lookbook",
  },
  openGraph: {
    title: "Haute Artistry Lookbook & Portfolio | Noraz Signature",
    description:
      "Explore real brides, royal traditional ceremonies, and high-fashion editorial masterstrokes crafted across Lagos and worldwide destinations.",
    url: "https://norazsignature.com/lookbook",
    siteName: "Noraz Signature",
    images: [
      {
        url: "/og-lookbook.jpg",
        width: 1200,
        height: 630,
        alt: "Noraz Signature Haute Bridal Lookbook & Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haute Artistry Lookbook & Portfolio | Noraz Signature",
    description:
      "Curated bridal transformations and royal traditional wedding beauty portfolio by Noraz Signature.",
    creator: "@noraz_signature",
    images: ["/og-lookbook.jpg"],
  },
};

const lookbookSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Noraz Signature Bridal & Editorial Lookbook",
  description:
    "A curated gallery of luxury bridal transformations, Nigerian traditional ceremonies, and high-fashion editorial artistry.",
  url: "https://norazsignature.com/lookbook",
  author: {
    "@type": "Person",
    name: "Ekeh Chinenye Victory",
  },
};

export default function LookbookPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lookbookSchema) }}
      />
      <Navbar />

      <PageHeader
        badge="Haute Artistry Portfolio"
        title="The Curated Bridal & Editorial Lookbook"
        description="Explore real brides, royal traditional ceremonies, and high-fashion editorial masterstrokes crafted across Lagos, London, and international destinations."
        breadcrumb="Lookbook"
      />

      {/* Main Portfolio Interactive Lookbook Component */}
      <Portfolio />

      <CtaBanner
        title="Envision Your Own Transformation"
        subtitle="Bring your dream reference moodboard to your VIP consultation. Let us sculpt your signature bridal radiance."
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
          href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20am%20admiring%20your%20lookbook%20and%20would%20like%20to%20inquire%20for%20my%20wedding"
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
