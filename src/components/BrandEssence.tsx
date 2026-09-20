"use client";

import React from "react";
import { Sparkles, Palette, ShieldCheck, Heart, Clock, Award } from "lucide-react";

export const BrandEssence: React.FC = () => {
  const pillars = [
    {
      icon: Palette,
      title: "Complexion Tone Alchemy",
      subtitle: "Zero Ashy Cast. Zero Guesswork.",
      description:
        "Every client’s undertone is unique. We mix custom color-correcting pigments on sterile stainless palettes to flawlessly honor golden, olive, peach, and deep red undertones in high-definition lighting.",
    },
    {
      icon: ShieldCheck,
      title: "Sanitation as Sacred Duty",
      subtitle: "Hospital-Grade Hygiene Protocol",
      description:
        "We never double-dip. Utilizing medical-grade sterilization, single-use disposables, and freshly deep-sanitized premium goat and synthetic brushes for absolute safety and skin health.",
    },
    {
      icon: Clock,
      title: "16-Hour Performance Wear",
      subtitle: "Cry-Proof & Heat-Defying",
      description:
        "From emotional morning vows through humid outdoor receptions and energetic dancefloors, our multi-zone micro-setting technique guarantees long-lasting velvet skin that will not smudge or transfer onto fabrics.",
    },
    {
      icon: Heart,
      title: "The Calm Bridal Sanctuary",
      subtitle: "Stress-Free Morning Concierge",
      description:
        "We do more than makeup; we create an oasis of tranquility on your wedding morning. We manage the glamour timeline with punctuality, mindfulness, and soothing care so you can savor every second.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        background: "var(--color-surface)",
        padding: "6rem 1.5rem",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 4rem auto" }}>
          <span className="badge-gold">
            <Sparkles size={12} color="var(--color-brand-espresso)" />
            The Noraz Philosophy
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
              marginTop: "1rem",
              marginBottom: "1rem",
              color: "var(--color-brand-espresso)",
            }}
          >
            Haute Artistry Rooted in Precision, Care & Inclusivity
          </h2>
          <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          <p style={{ color: "var(--color-taupe)", fontSize: "1rem", lineHeight: "1.7" }}>
            Noraz Signature was founded on a simple belief: your makeup should not be a mask that conceals you, but a bespoke couture veil that illuminates your highest, most confident self.
          </p>
        </div>

        {/* 4 Brand Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="card-luxury"
                style={{
                  padding: "2.25rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative",
                  background: "var(--color-white)",
                }}
              >
                {/* Number Watermark */}
                <span
                  className="font-serif"
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.5rem",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "rgba(216, 190, 138, 0.25)",
                    lineHeight: 1,
                  }}
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(201, 161, 141, 0.15)",
                    border: "1px solid rgba(201, 161, 141, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <IconComponent size={22} color="var(--color-brand-espresso)" />
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.35rem",
                    color: "var(--color-brand-espresso)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-brand-nude)",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  {pillar.subtitle}
                </p>

                <p style={{ fontSize: "0.875rem", color: "var(--color-taupe)", lineHeight: "1.65" }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Founder Quote Card */}
        <div
          style={{
            marginTop: "4rem",
            background: "var(--color-white)",
            border: "1px solid var(--color-border)",
            borderRadius: "0px",
            padding: "2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "center",
            boxShadow: "none",
          }}
          className="quote-grid"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid var(--color-brand-champagne)",
                flexShrink: 0,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                alt="Founder & CEO Ekeh Chinenye Victory"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <h4 className="font-serif" style={{ fontSize: "1.35rem", color: "var(--color-brand-espresso)", fontWeight: 600 }}>
                Ekeh Chinenye Victory
              </h4>
              <p style={{ fontSize: "0.8rem", color: "var(--color-brand-champagne)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Founder & CEO
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--color-taupe)", marginTop: "2px" }}>
                Master Makeup Artist & Creative Director
              </p>
            </div>
          </div>

          <div style={{ borderLeft: "2px solid var(--color-brand-champagne)", paddingLeft: "1.5rem" }}>
            <p
              className="font-serif"
              style={{
                fontSize: "1.125rem",
                fontStyle: "italic",
                color: "var(--color-brand-espresso)",
                lineHeight: "1.6",
              }}
            >
              “When a woman looks into the mirror after we finish her glam and tears of pure confidence well up in her eyes—that is why I created Noraz Signature. It is never just makeup. It is the coronation of your confidence.”
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 860px) {
          .quote-grid {
            grid-template-columns: 0.8fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
};
