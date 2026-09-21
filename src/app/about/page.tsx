import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { BrandEssence } from "@/components/BrandEssence";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Sparkles, ShieldCheck, Heart, Award, MapPin, CheckCircle2, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Studio & Founder | Noraz Signature",
  description:
    "Meet Ekeh Chinenye Victory, Founder & CEO of Noraz Signature. Discover our melanin skin philosophy, hospital-grade sanitation, and bespoke bridal concierges.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About the Studio & Founder | Noraz Signature",
    description:
      "Meet Ekeh Chinenye Victory, Founder & CEO of Noraz Signature. Discover our melanin skin philosophy, hospital-grade sanitation, and bespoke bridal concierges.",
    url: "https://norazsignature.com/about",
    siteName: "Noraz Signature",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Noraz Signature Studio & Founder Ekeh Chinenye Victory",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About the Studio & Founder | Noraz Signature",
    description:
      "Meet Ekeh Chinenye Victory, Founder & CEO of Noraz Signature. Bespoke bridal transformations and melanin skin mastery.",
    creator: "@norazsignature",
    images: ["/og-about.jpg"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Noraz Signature & Founder Ekeh Chinenye Victory",
  url: "https://norazsignature.com/about",
  mainEntity: {
    "@type": "Person",
    name: "Ekeh Chinenye Victory",
    jobTitle: "Founder & Creative Director",
    worksFor: {
      "@type": "BeautySalon",
      name: "Noraz Signature",
    },
    description:
      "Master bridal makeup artist and educator specializing in melanin complexion harmonization, traditional wedding heritage, and modern red carpet beauty.",
  },
};

export default function AboutPage() {
  const pillars = [
    {
      number: "01",
      title: "Complexion Architecture",
      description:
        "We treat skin as a canvas of living light. Through micro-layering serum primers and skin-identical undertone pigments, we build a radiant barrier that resists 16+ hours of tears, humidity, and 8K flash photography.",
    },
    {
      number: "02",
      title: "Melanin Color Harmony",
      description:
        "Mastery over rich olive, warm golden, deep espresso, and red undertones. We do not mask your skin; we accentuate bone structure and natural radiance without ashiness or heavy oxidation.",
    },
    {
      number: "03",
      title: "The Calm Studio Experience",
      description:
        "Wedding mornings should be tranquil, luxurious, and celebratory. Our VIP bridal concierges manage timecards meticulously, creating an atmosphere of quiet luxury and peaceful pampering.",
    },
    {
      number: "04",
      title: "Haute Couture Aesthetic",
      description:
        "Steering away from fleeting social media micro-trends, our signature look is rooted in timeless elegance, sculpted velvet skin, soft romantic eyes, and sculpted pout profiles.",
    },
  ];

  const sanitationSteps = [
    "Hospital-grade 70% isopropyl alcohol sanitation between every brush use",
    "Strict single-use palettes and stainless steel spatulas for zero product double-dipping",
    "Individual disposable mascara wands and sanitized lip applicators",
    "Hypoallergenic, dermatologically tested luxury skincare (La Mer, Charlotte Tilbury, Danessa Myricks)",
    "Air-purified, private studio environment with sterile brush UV storage",
  ];

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Navbar />

      <PageHeader
        badge="Ethos & Creative Leadership"
        title="The Artistry, Philosophy & Founder"
        description="Discover the visionary technique behind Noraz Signature — where haute couture editorial precision elevates your most sacred celebration."
        breadcrumb="About"
      />

      {/* Founder & Essence Section */}
      <BrandEssence />

      {/* 4 Pillars of Artistry */}
      <section
        style={{
          background: "var(--color-surface)",
          padding: "6rem 1.5rem",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 4rem auto" }}>
            <span className="badge-gold">
              <Sparkles size={12} color="var(--color-brand-espresso)" />
              Our Standard of Excellence
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
              The Four Pillars of Noraz Artistry
            </h2>
            <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
            <p style={{ color: "var(--color-taupe)", fontSize: "0.95rem" }}>
              Every stroke of our brush is governed by architectural discipline, skin science, and editorial finesse.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="card-luxury"
                style={{
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span
                  className="font-serif"
                  style={{
                    fontSize: "2.2rem",
                    color: "var(--color-brand-champagne)",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {pillar.number}
                </span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--color-brand-espresso)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{ color: "var(--color-taupe)", fontSize: "0.875rem", lineHeight: "1.7" }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital-Grade Hygiene & Studio Tour */}
      <section style={{ padding: "6.5rem 1.5rem", background: "var(--color-brand-ivory)" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="about-split-grid"
        >
          <div>
            <span className="badge-gold">
              <ShieldCheck size={12} color="var(--color-brand-espresso)" />
              Clinical Hygiene Standards
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                marginTop: "1rem",
                marginBottom: "1rem",
                color: "var(--color-brand-espresso)",
              }}
            >
              Uncompromising Sanitation For Your Most Sensitive Moments
            </h2>
            <div className="gold-accent-line" style={{ marginBottom: "1.5rem" }} />
            <p style={{ color: "var(--color-taupe)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              Our clients trust us with their skin health on high-stakes wedding dates and editorial shoots. We enforce hospital-grade disinfection protocols, ensuring zero risk of cross-contamination or skin irritation.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {sanitationSteps.map((step, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle2 size={18} color="var(--color-brand-champagne)" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem", color: "var(--color-brand-espresso)" }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Studio Suite Details */}
          <div
            className="card-luxury"
            style={{
              padding: "2.75rem 2.25rem",
              background: "var(--color-white)",
              border: "1px solid var(--color-border)",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-brand-nude)",
                fontWeight: 700,
              }}
            >
              The Sanctuary
            </span>
            <h3
              className="font-serif"
              style={{
                fontSize: "1.65rem",
                color: "var(--color-brand-espresso)",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              The Private VIP Suite & Worldwide Travel
            </h3>
            <p style={{ color: "var(--color-taupe)", fontSize: "0.875rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              Located in the heart of Lekki / Victoria Island, Lagos, our private studio is designed for intimate bridal trials, pre-wedding skin testing, and VIP masterclasses. For weddings across Nigeria, the UK, Europe, and destination retreats worldwide, our artist team travels fully equipped with professional studio lighting and humidity kits.
            </p>

            <div
              style={{
                background: "var(--color-surface)",
                padding: "1.25rem",
                border: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <MapPin size={22} color="var(--color-brand-champagne)" flex-shrink={0} />
              <div>
                <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-brand-espresso)" }}>
                  Lagos Studio Suite • Available Worldwide
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--color-taupe)" }}>
                  By appointment only for confirmed bridal commissions & consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Experience The Noraz Touch For Your Wedding"
        subtitle="Reserve a bridal consultation or trial session with Founder & CEO Ekeh Chinenye Victory."
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
          href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20would%20like%20to%20inquire%20about%20booking%20my%20event%20date"
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
