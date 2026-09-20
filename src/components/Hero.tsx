"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Award, HeartHandshake, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--color-brand-ivory)",
        paddingTop: "9.5rem",
        paddingBottom: "5.5rem",
        overflow: "hidden",
      }}
    >
      {/* Background Soft Glow Accents */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201, 161, 141, 0.18) 0%, rgba(248, 244, 238, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "2%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(230, 201, 197, 0.2) 0%, rgba(248, 244, 238, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Editorial Headline & Value Prop */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Main Editorial Headline */}
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2.5rem, 5.2vw, 4.2rem)",
                lineHeight: "1.1",
                color: "var(--color-brand-espresso)",
                letterSpacing: "-0.02em",
                fontWeight: 600,
              }}
            >
              Quiet Luxury. <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--color-brand-nude)",
                }}
              >
                Melanin Mastery.
              </span>{" "}
              <br />
              Timeless Radiance.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-taupe)",
                maxWidth: "540px",
                lineHeight: "1.7",
                fontWeight: 400,
              }}
            >
              Where haute couture precision meets flawless complexion architecture. Specialized in high-definition bridal transformations, regal cultural ceremonies, and editorial beauty calibrated for rich, diverse undertones.
            </p>

            {/* Key Assurance Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
                fontSize: "0.8125rem",
                color: "var(--color-brand-espresso)",
                fontWeight: 500,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={16} color="var(--color-brand-champagne)" />
                <span>Zero Ashy Flashback Guarantee</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={16} color="var(--color-brand-champagne)" />
                <span>16-Hour Sweat & Cry-Proof</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={16} color="var(--color-brand-champagne)" />
                <span>Global On-Location Travel</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
                marginTop: "0.5rem",
              }}
              className="hero-cta-group"
            >
              <button
                onClick={onBookClick}
                className="btn-primary hero-cta-btn"
                style={{
                  padding: "0.95rem 2.2rem",
                  fontSize: "0.875rem",
                  borderRadius: "0px",
                  boxShadow: "none",
                }}
              >
                <span>Reserve Your Date</span>
                <ArrowRight size={15} color="var(--color-brand-champagne)" />
              </button>

              <button
                onClick={onExploreClick}
                className="btn-secondary hero-cta-btn"
                style={{
                  padding: "0.95rem 2rem",
                  fontSize: "0.875rem",
                  borderRadius: "0px",
                  boxShadow: "none",
                }}
              >
                <span>Explore Packages</span>
              </button>
            </div>
          </div>

          {/* Right Column: High Fashion Editorial Collage */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Main Featured Editorial Frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                borderRadius: "0px",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                boxShadow: "none",
                background: "var(--color-white)",
                padding: "10px",
              }}
            >
              <div
                style={{
                  borderRadius: "0px",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "4/5",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
                  alt="Noraz Signature Bridal Makeup"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.7s ease",
                  }}
                  className="hover-zoom"
                />

                {/* Subtle Luxury Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(36,26,24,0.75) 100%)",
                  }}
                />

                {/* Bottom Overlay Label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1.2rem",
                    right: "1.2rem",
                    color: "var(--color-white)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--color-brand-champagne)",
                      marginBottom: "2px",
                      fontWeight: 600,
                    }}
                  >
                    Signature Bridal Look
                  </p>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--color-white)",
                      fontWeight: 500,
                    }}
                  >
                    The Luminous Golden Hour Bride
                  </h3>
                </div>
              </div>
            </div>

            {/* Floating Top Accent Card */}
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: "-15px",
                background: "rgba(255, 255, 255, 0.98)",
                border: "1px solid var(--color-brand-champagne)",
                borderRadius: "0px",
                padding: "0.85rem 1.15rem",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                maxWidth: "230px",
                zIndex: 3,
              }}
              className="floating-card-top"
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(216, 190, 138, 0.4)",
                  background: "rgba(216, 190, 138, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Award size={18} color="var(--color-brand-espresso)" />
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-brand-espresso)" }}>
                  Voted Top Bridal MUA
                </p>
                <p style={{ fontSize: "0.6875rem", color: "var(--color-taupe)" }}>
                  2025 Luxury Wedding Awards
                </p>
              </div>
            </div>

            {/* Floating Bottom Review Card */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-10px",
                background: "#241A18",
                border: "1px solid var(--color-brand-champagne)",
                borderRadius: "0px",
                padding: "0.85rem 1.15rem",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#F8F4EE",
                zIndex: 3,
                maxWidth: "240px",
              }}
              className="floating-card-bottom"
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(216, 190, 138, 0.4)",
                  background: "rgba(216, 190, 138, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <HeartHandshake size={18} color="var(--color-brand-champagne)" />
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-brand-champagne)" }}>
                  850+ Happy Brides
                </p>
                <p style={{ fontSize: "0.6875rem", color: "#C9A18D" }}>
                  100% 5-Star Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust & Statistics Ribbon */}
        <div
          style={{
            marginTop: "5rem",
            padding: "2rem 2.5rem",
            background: "var(--color-white)",
            border: "1px solid var(--color-border)",
            borderRadius: "0px",
            boxShadow: "none",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center", borderRight: "1px solid var(--color-border)" }} className="stat-item">
            <h4
              className="font-serif"
              style={{
                fontSize: "2.2rem",
                color: "var(--color-brand-espresso)",
                fontWeight: 600,
                lineHeight: "1",
              }}
            >
              850+
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--color-taupe)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.35rem" }}>
              Brides & Clients Glammed
            </p>
          </div>

          <div style={{ textAlign: "center", borderRight: "1px solid var(--color-border)" }} className="stat-item">
            <h4
              className="font-serif"
              style={{
                fontSize: "2.2rem",
                color: "var(--color-brand-espresso)",
                fontWeight: 600,
                lineHeight: "1",
              }}
            >
              8+
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--color-taupe)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.35rem" }}>
              Years Luxury Experience
            </p>
          </div>

          <div style={{ textAlign: "center", borderRight: "1px solid var(--color-border)" }} className="stat-item">
            <h4
              className="font-serif"
              style={{
                fontSize: "2.2rem",
                color: "var(--color-brand-espresso)",
                fontWeight: 600,
                lineHeight: "1",
              }}
            >
              100%
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--color-taupe)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.35rem" }}>
              Bespoke Tone Formulations
            </p>
          </div>

          <div style={{ textAlign: "center" }} className="stat-item">
            <h4
              className="font-serif"
              style={{
                fontSize: "2.2rem",
                color: "var(--color-brand-espresso)",
                fontWeight: 600,
                lineHeight: "1",
              }}
            >
              16h+
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--color-taupe)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.35rem" }}>
              Cry-Proof Transfer Lock
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 768px) {
          .stat-item {
            border-right: none !important;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 1rem;
          }
          .stat-item:last-child {
            border-bottom: none !important;
            padding-bottom: 0;
          }
          .floating-card-top, .floating-card-bottom {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        .hover-zoom:hover {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};
