import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Journal } from "@/components/Journal";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Sparkles, BookOpen, Clock, Calendar, CheckCircle2, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "The Editorial Beauty Journal & Bridal Prep Guide | Noraz Signature",
  description:
    "Expert bridal beauty advice, skincare prep roadmaps, humidity lock techniques, and wedding day morning timelines curated by Noraz Signature.",
  alternates: {
    canonical: "/journal",
  },
  openGraph: {
    title: "The Editorial Beauty Journal & Bridal Prep Guide | Noraz Signature",
    description:
      "Masterclass insights, bridal skincare architectures, humidity-defying techniques, and day-of timelines by Ekeh Chinenye Victory.",
    url: "https://norazsignature.com/journal",
    siteName: "Noraz Signature",
    images: [
      {
        url: "/og-journal.jpg",
        width: 1200,
        height: 630,
        alt: "Noraz Signature Editorial Beauty Journal & Bridal Prep Guide",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Editorial Beauty Journal & Bridal Prep Guide | Noraz Signature",
    description:
      "Expert bridal beauty advice, skincare prep roadmaps, and wedding day timelines.",
    creator: "@norazsignature",
    images: ["/og-journal.jpg"],
  },
};

const journalSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Noraz Signature Editorial Beauty Journal",
  description:
    "Masterclass beauty advice, bridal skincare prep roadmaps, and humidity longevity techniques.",
  url: "https://norazsignature.com/journal",
  publisher: {
    "@type": "BeautySalon",
    name: "Noraz Signature",
    image: "https://norazsignature.com/og-journal.jpg",
  },
};

export default function JournalPage() {
  const roadmapSteps = [
    {
      timeframe: "6 Months Out",
      title: "Barrier Restoration & Hydration",
      focus: "Consult a licensed aesthetician to address texture and hyperpigmentation. Cease abrasive chemical peels.",
    },
    {
      timeframe: "3 Months Out",
      title: "The VIP Bridal Trial Session",
      focus: "Test your undertone foundation formulas with flash photography and wear test for a full 12-hour day.",
    },
    {
      timeframe: "1 Month Out",
      title: "Skincare Freezing Protocol",
      focus: "Do not introduce new active serums or experimental cosmetics. Prioritize gentle hyaluronic acid stackers.",
    },
    {
      timeframe: "1 Week Out",
      title: "Dermaplaning & Lip Conditioning",
      focus: "Gentle peach-fuzz dermaplaning for seamless foundation glide. Daily nourishing lip sleeping masks.",
    },
    {
      timeframe: "Wedding Morning",
      title: "The Calm Studio Prep",
      focus: "Cleanse with cold water, sheet mask for 15 minutes, wear a button-up robe, and let our team handle the rest.",
    },
  ];

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(journalSchema) }}
      />
      <Navbar />

      <PageHeader
        badge="Editorial Beauty Insights"
        title="Bridal Preparation & Artistry Journal"
        description="Expert masterclass insights, bridal skincare architectures, humidity-defying techniques, and day-of timelines curated by Founder & CEO Ekeh Chinenye Victory."
        breadcrumb="Bridal Journal"
      />

      {/* Main Journal Component */}
      <Journal />

      {/* 2026 / 2027 Bridal Skincare Roadmap */}
      <section style={{ padding: "6.5rem 1.5rem", background: "var(--color-brand-ivory)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-gold">
              <Calendar size={12} color="var(--color-brand-espresso)" />
              Timeline Protocol
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                marginTop: "1rem",
                marginBottom: "1rem",
                color: "var(--color-brand-espresso)",
              }}
            >
              The 6-Month Bridal Skincare Roadmap
            </h2>
            <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
            <p style={{ color: "var(--color-taupe)", fontSize: "0.95rem" }}>
              Flawless bridal makeup requires a healthy, supple skin barrier. Follow our studio roadmap to achieve mirror-finish radiance.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {roadmapSteps.map((step, i) => (
              <div
                key={i}
                className="card-luxury"
                style={{
                  padding: "2rem",
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span
                    style={{
                      background: "var(--color-brand-espresso)",
                      color: "var(--color-brand-champagne)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      padding: "0.4rem 0.85rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {step.timeframe}
                  </span>
                  <h3 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--color-brand-espresso)", margin: 0 }}>
                    {step.title}
                  </h3>
                </div>

                <p style={{ color: "var(--color-taupe)", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>
                  {step.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Start Your Bridal Journey?"
        subtitle="Book your date with Noraz Signature and receive our bespoke skincare consultation as part of your suite."
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
          href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20am%20reading%20your%20journal%20and%20would%20like%20to%20inquire%20for%20a%20consultation"
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
