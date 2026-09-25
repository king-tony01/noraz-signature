import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Sparkles, Check, Calendar, MessageCircle, ArrowRight, Clock, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Bespoke Services & Bridal Packages | Noraz Signature",
  description:
    "Explore luxury makeup artistry packages: The Royal Bridal Suite, Traditional African Weddings, Red Carpet Glam, Editorial Campaigns, and VIP Masterclasses.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Bespoke Services & Bridal Packages | Noraz Signature",
    description:
      "Explore luxury makeup artistry packages: The Royal Bridal Suite, Traditional African Weddings, Red Carpet Glam, Editorial Campaigns, and VIP Masterclasses.",
    url: "/services",
    siteName: "Noraz Signature",
    images: [
      {
        url: "/og-services.jpg",
        secureUrl: "/og-services.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Noraz Signature Bespoke Artistry Suites & Bridal Packages",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Services & Bridal Packages | Noraz Signature",
    description:
      "Luxury bridal artistry, traditional ceremonies, and editorial glam by Noraz Signature.",
    creator: "@noraz_signature",
    images: ["/og-services.jpg"],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Noraz Signature Refined Beauty & Bridal Services",
  provider: {
    "@type": "BeautySalon",
    name: "Noraz Signature",
    image: "https://norazsignature.com/og-services.jpg",
    telephone: "+2347086833653",
    url: "https://norazsignature.com",
  },
  areaServed: ["Lagos", "Nigeria", "United Kingdom", "Worldwide"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Noraz Signature Artistry Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Signature Glam",
          description: "Elegant, polished glam designed for special occasions, celebrations and unforgettable moments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bridal Makeup",
          description: "Flawless, long-lasting bridal glam carefully tailored to your features and wedding aesthetic.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Traditional Bridal Makeup",
          description: "Timeless bridal beauty designed to complement your traditional attire, accessories and gele.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gele Styling",
          description: "Beautifully structured gele styling created to complete your overall look.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bridal Party Makeup",
          description: "Coordinated and elegant glam for bridesmaids, mothers and members of the bridal party.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Photoshoot & Editorial Makeup",
          description: "Camera-ready beauty tailored to your creative concept, photoshoot or editorial project.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Service",
          description: "A personalised beauty experience delivered at your preferred location.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Makeup Lessons",
          description: "Personalised one-on-one sessions designed to help you master your makeup routine and techniques.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Group & Event Bookings",
          description: "Customised beauty services for weddings, celebrations, events and group occasions.",
        },
      },
    ],
  },
};

export default function ServicesPage() {
  const bridalPartyRates = [
    {
      role: "Maid of Honor Glam",
      price: "Inquire",
      description: "Full complexion tailoring, signature soft glam eyes, premium lashes, and setting spray lock.",
      duration: "50 mins",
    },
    {
      role: "Bridesmaids Artistry (Per Person)",
      price: "Inquire",
      description: "Cohesive bridal aesthetic matching the wedding palette, waterproof finish, and lip touch-up vial.",
      duration: "45 mins",
    },
    {
      role: "Mother of the Bride / Groom",
      price: "Inquire",
      description: "Age-defying hydration stacking, fine-line smoothing, soft satin finish, and lifting eye contour.",
      duration: "50 mins",
    },
    {
      role: "Groom Complexion Polish & Grooming",
      price: "Inquire",
      description: "Anti-shine matte finish, undetectable skin tone balance, brow groom, and beard conditioning.",
      duration: "30 mins",
    },
  ];

  const luxuryAddons = [
    {
      title: "Deluxe Hydra-Facial Pre-Glam Primer",
      price: "Add-on",
      detail: "Micro-exfoliation & Hyaluronic Acid moisture infuse for glass-skin application.",
    },
    {
      title: "Full Day VIP Touch-Up Concierge",
      price: "Add-on",
      detail: "Artist remains on-site through reception, second look change, and evening dance party.",
    },
    {
      title: "Pre-Wedding Engagement / Court Shoot",
      price: "Add-on",
      detail: "Camera-ready soft glow for pre-wedding portrait sessions and courthouse ceremonies.",
    },
    {
      title: "Bespoke Mink Lash Architecture",
      price: "Add-on",
      detail: "Hand-mapped individual lash clusters customized to your eye shape.",
    },
  ];

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Navbar />

      <PageHeader
        badge="Our Services"
        title="Refined Beauty & Bespoke Styling"
        description="At Noraz Signature, we create refined beauty experiences tailored to your style, occasion and individuality. From signature glam to bridal beauty, every detail is thoughtfully curated for a flawless finish."
        breadcrumb="Services"
      />

      {/* Main Services Interactive Component */}
      <Services />

      {/* Bridal Party & Retinue Rates */}
      <section
        style={{
          background: "var(--color-surface)",
          padding: "6rem 1.5rem",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-gold">
              <HeartHandshake size={12} color="var(--color-brand-espresso)" />
              Bridal Party & Entourage
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
              Bridal Party & Retinue Rates
            </h2>
            <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
            <p style={{ color: "var(--color-taupe)", fontSize: "0.95rem" }}>
              Ensuring your bridal party looks stunningly unified, harmonious with your color palette, and camera-ready.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {bridalPartyRates.map((item, idx) => (
              <div
                key={idx}
                className="card-luxury"
                style={{
                  padding: "2rem",
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <h3 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--color-brand-espresso)" }}>
                      {item.role}
                    </h3>
                  </div>

                  <p
                    className="font-serif"
                    style={{
                      fontSize: "1.75rem",
                      color: "var(--color-brand-champagne)",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.price}
                  </p>

                  <p style={{ color: "var(--color-taupe)", fontSize: "0.85rem", lineHeight: "1.6", marginBottom: "1.25rem" }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--color-brand-nude)", fontSize: "0.75rem", fontWeight: 600 }}>
                  <Clock size={14} />
                  <span>Estimated Duration: {item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Add-Ons Grid */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--color-brand-ivory)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-gold">
              <Sparkles size={12} color="var(--color-brand-espresso)" />
              Enhance Your Commission
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
              Luxury Add-Ons & Touch-Up Concierge
            </h2>
            <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {luxuryAddons.map((addon, i) => (
              <div
                key={i}
                className="card-luxury"
                style={{
                  padding: "1.75rem",
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <h4 className="font-serif" style={{ fontSize: "1.05rem", color: "var(--color-brand-espresso)" }}>
                    {addon.title}
                  </h4>
                </div>
                <span style={{ fontSize: "1.25rem", color: "var(--color-brand-champagne)", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
                  +{addon.price}
                </span>
                <p style={{ fontSize: "0.8125rem", color: "var(--color-taupe)", lineHeight: "1.6" }}>
                  {addon.detail}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link
              href="/pricing"
              className="btn-primary"
              style={{ textDecoration: "none", display: "inline-flex" }}
            >
              <span>Calculate Custom Estimate with Live Tool</span>
              <ArrowRight size={16} color="var(--color-brand-champagne)" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Reserve Your Bridal Suite or Custom Commission"
        subtitle="Dates are reserved with a signed contract and retainer deposit. Contact our concierge team today."
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
          href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20would%20like%20to%20inquire%20about%20your%20services"
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
