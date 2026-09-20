"use client";

import React, { useState } from "react";
import { portfolioItems, beforeAfterShowcase, PortfolioItem } from "@/data/portfolioData";
import { Sparkles, Eye, X, Sliders, ArrowUpRight, Check, ChevronRight } from "lucide-react";

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const categories = ["All", "Bridal", "Traditional", "Editorial", "Soft Glam"];

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section
      id="lookbook"
      data-theme="dark"
      className="theme-dark"
      style={{
        background: "var(--gradient-dark)",
        color: "#F8F4EE",
        padding: "7rem 1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3.5rem auto" }}>
          <span className="badge-dark">
            <Sparkles size={12} color="var(--color-brand-champagne)" />
            The High-Artistry Lookbook
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              marginTop: "1rem",
              marginBottom: "1rem",
              color: "#F8F4EE",
            }}
          >
            Masterpieces in Radiance & Undertone Harmony
          </h2>
          <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          <p style={{ color: "#C9A18D", fontSize: "1rem", lineHeight: "1.7" }}>
            Explore a curated gallery of brides, red carpet icons, and editorial campaigns brought to life through signature technique and light calibration.
          </p>

          {/* Gallery Category Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.55rem 1.45rem",
                  borderRadius: "9999px",
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  border: activeCategory === cat
                    ? "1px solid var(--color-brand-champagne)"
                    : "1px solid #4A3832",
                  background: activeCategory === cat
                    ? "var(--color-brand-champagne)"
                    : "#30221E",
                  color: activeCategory === cat
                    ? "#241A18"
                    : "#F8F4EE",
                  boxShadow: "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-dark"
              style={{
                borderRadius: "0px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #4A3832",
                boxShadow: "none",
              }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Frame */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  overflow: "hidden",
                  borderRadius: "0px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  className="gallery-img"
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(15,12,11,0.9) 100%)",
                  }}
                />

                {/* Top Category Badge */}
                <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                  <span
                    style={{
                      background: "rgba(15, 12, 11, 0.85)",
                      color: "var(--color-brand-champagne)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "0px",
                      border: "1px solid rgba(216, 190, 138, 0.4)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Hover Reveal Button */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    right: "1.25rem",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--color-brand-champagne)",
                    border: "1px solid #241A18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "none",
                  }}
                >
                  <Eye size={18} color="#241A18" />
                </div>

                {/* Bottom Title on Image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1.25rem",
                    right: "4.5rem",
                  }}
                >
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.25rem",
                      color: "#F8F4EE",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8125rem", color: "#C9A18D", lineHeight: "1.5", marginBottom: "0.75rem" }}>
                  {item.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {item.details.map((d, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.7rem",
                        color: "#E5DCD3",
                        background: "#3A2925",
                        border: "1px solid #4A3832",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "0px",
                      }}
                    >
                      • {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before & After Transformation Slider */}
        <div
          style={{
            marginTop: "6rem",
            background: "#30221E",
            border: "1px solid #4A3832",
            borderRadius: "0px",
            padding: "2.5rem 2rem",
            boxShadow: "none",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="ba-grid"
          >
            {/* Left: Narrative & Technique Breakdown */}
            <div>
              <span className="badge-dark">
                <Sliders size={12} color="var(--color-brand-champagne)" />
                Complexion Engineering
              </span>
              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.3rem)",
                  color: "#F8F4EE",
                  marginTop: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                {beforeAfterShowcase.title}
              </h3>
              <p style={{ color: "#C9A18D", fontSize: "0.9375rem", lineHeight: "1.7", marginBottom: "1.25rem" }}>
                {beforeAfterShowcase.description}
              </p>

              {/* Skin tone callout */}
              <div
                style={{
                  background: "#241A18",
                  borderLeft: "3px solid var(--color-brand-champagne)",
                  borderTop: "1px solid #4A3832",
                  borderRight: "1px solid #4A3832",
                  borderBottom: "1px solid #4A3832",
                  padding: "0.75rem 1rem",
                  borderRadius: "0px",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "var(--color-brand-champagne)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Client Profile:
                </span>
                <p style={{ fontSize: "0.85rem", color: "#F8F4EE", marginTop: "2px" }}>
                  {beforeAfterShowcase.skinTone}
                </p>
              </div>

              {/* Key techniques checklist */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {beforeAfterShowcase.keyTechniques.map((tech, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.8125rem", color: "#E5DCD3" }}>
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "0px",
                        background: "rgba(216, 190, 138, 0.2)",
                        border: "1px solid rgba(216, 190, 138, 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={10} color="var(--color-brand-champagne)" />
                    </div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Split Image Slider */}
            <div>
              <p style={{ fontSize: "0.75rem", color: "var(--color-brand-champagne)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.5rem", textAlign: "center" }}>
                ↔ Drag to Reveal Complexion Transformation
              </p>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1/1",
                  maxWidth: "480px",
                  margin: "0 auto",
                  borderRadius: "0px",
                  overflow: "hidden",
                  border: "1px solid var(--color-brand-champagne)",
                  userSelect: "none",
                  cursor: "ew-resize",
                }}
                onMouseMove={handleSliderMove}
                onTouchMove={handleSliderMove}
              >
                {/* After Image (Full background) */}
                <img
                  src={beforeAfterShowcase.afterImage}
                  alt="Finished Bridal Glam"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Before Image (Clipped overlay) */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: `${sliderPosition}%`,
                    overflow: "hidden",
                    borderRight: "2px solid var(--color-brand-champagne)",
                  }}
                >
                  <img
                    src={beforeAfterShowcase.beforeImage}
                    alt="Bare Skin Prepped Canvas"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "480px",
                      height: "100%",
                      maxWidth: "none",
                      objectFit: "cover",
                    }}
                  />
                  {/* Left Label */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1rem",
                      background: "rgba(15,12,11,0.85)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#FFFFFF",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "0px",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Hydrated Canvas
                  </span>
                </div>

                {/* Right Label */}
                <span
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    right: "1rem",
                    background: "rgba(15,12,11,0.85)",
                    border: "1px solid rgba(216,190,138,0.4)",
                    color: "var(--color-brand-champagne)",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "0px",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Finished Bridal Radiance
                </span>

                {/* Slider Handle Divider Icon */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: `${sliderPosition}%`,
                    transform: "translate(-50%, -50%)",
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: "var(--color-brand-champagne)",
                    border: "2px solid #241A18",
                    boxShadow: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                  }}
                >
                  <Sliders size={16} color="#241A18" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Social Ribbon */}
        <div
          style={{
            marginTop: "4rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#C9A18D", fontSize: "0.9375rem" }}>
            Want to see daily backstage reels, live trials, and bridal reveals?
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-champagne"
            style={{
              padding: "0.75rem 1.75rem",
              borderRadius: "0px",
              boxShadow: "none",
            }}
          >
            <InstagramIcon size={16} />
            <span>Follow @norazsignature on Instagram</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedItem && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 12, 11, 0.95)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              maxWidth: "850px",
              width: "100%",
              background: "#241A18",
              border: "1px solid var(--color-brand-champagne)",
              borderRadius: "0px",
              overflow: "hidden",
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr",
              boxShadow: "none",
            }}
            className="modal-grid"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(216,190,138,0.5)",
                color: "#F8F4EE",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div style={{ aspectRatio: "4/5", maxHeight: "500px", overflow: "hidden" }}>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Modal Content */}
            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span className="badge-dark">{selectedItem.tag}</span>
                <h3 className="font-serif" style={{ fontSize: "1.8rem", color: "#F8F4EE", marginTop: "0.75rem", marginBottom: "0.5rem" }}>
                  {selectedItem.title}
                </h3>
                <p style={{ color: "#C9A18D", fontSize: "0.9375rem", lineHeight: "1.6", marginBottom: "1.25rem" }}>
                  {selectedItem.description}
                </p>

                <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-brand-champagne)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Key Artistry Features:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {selectedItem.details.map((d, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "#E5DCD3" }}>
                      <Check size={12} color="var(--color-brand-champagne)" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="btn-champagne"
                  style={{ width: "100%", justifyContent: "center", borderRadius: "0px", boxShadow: "none" }}
                >
                  Inquire For This Look
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          .ba-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .modal-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
        .gallery-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
