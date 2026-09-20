"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/data/testimonialsData";
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      style={{
        background: "var(--color-brand-ivory)",
        padding: "6.5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Background Accent */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(230, 201, 197, 0.25) 0%, rgba(248, 244, 238, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
          <span className="badge-rose">
            <Sparkles size={12} color="#7d443e" />
            Client Love & Testimonials
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
            Cherished Words from Our Real Brides & VIPs
          </h2>
          <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          <p style={{ color: "var(--color-taupe)", fontSize: "1rem" }}>
            The true mark of our artistry lives in how confident, joyful, and radiant our clients feel through life’s biggest celebrations.
          </p>
        </div>

        {/* Featured Testimonial Card Carousel */}
        <div
          style={{
            background: "var(--color-white)",
            border: "1px solid var(--color-border)",
            borderRadius: "0px",
            padding: "3rem 2.5rem",
            boxShadow: "none",
            position: "relative",
          }}
        >
          {/* Quote Icon Watermark */}
          <div
            style={{
              position: "absolute",
              top: "2rem",
              right: "2.5rem",
              color: "rgba(216, 190, 138, 0.25)",
            }}
          >
            <Quote size={56} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="testimonial-grid"
          >
            {/* Left: Avatar & Bio */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--color-brand-champagne)",
                  marginBottom: "1rem",
                  boxShadow: "none",
                }}
              >
                <img
                  src={current.image}
                  alt={current.clientName}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <h4 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--color-brand-espresso)" }}>
                {current.clientName}
              </h4>

              <p style={{ fontSize: "0.8rem", color: "var(--color-brand-nude)", fontWeight: 600, marginTop: "2px" }}>
                {current.roleOrEvent}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--color-taupe)", fontSize: "0.75rem", marginTop: "4px" }}>
                <span>{current.location}</span>
                <span>•</span>
                <span>{current.date}</span>
              </div>

              {/* 5-Star Rating */}
              <div style={{ display: "flex", gap: "0.25rem", marginTop: "0.75rem" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-brand-champagne)" color="var(--color-brand-champagne)" />
                ))}
              </div>

              {/* Verified Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.7rem",
                  color: "#2e6930",
                  background: "#eef8ef",
                  border: "1px solid #c8e6c9",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "9999px",
                  marginTop: "0.85rem",
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={12} />
                <span>Verified Client</span>
              </div>
            </div>

            {/* Right: Quote Content */}
            <div style={{ paddingLeft: "1rem" }}>
              {current.highlightTag && (
                <span
                  style={{
                    background: "rgba(201, 161, 141, 0.15)",
                    border: "1px solid rgba(201, 161, 141, 0.35)",
                    color: "var(--color-brand-espresso)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "0px",
                    display: "inline-block",
                    marginBottom: "1rem",
                  }}
                >
                  ★ {current.highlightTag}
                </span>
              )}

              <p
                className="font-serif"
                style={{
                  fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                  color: "var(--color-brand-espresso)",
                  lineHeight: "1.7",
                  fontStyle: "italic",
                }}
              >
                “{current.quote}”
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {/* Pagination Dots */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    width: i === currentIndex ? "28px" : "10px",
                    height: "4px",
                    borderRadius: "0px",
                    background: i === currentIndex ? "var(--color-brand-espresso)" : "var(--color-border)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={prevSlide}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-white)",
                  color: "var(--color-brand-espresso)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "1px solid var(--color-brand-espresso)",
                  background: "var(--color-brand-espresso)",
                  color: "var(--color-white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 860px) {
          .testimonial-grid {
            grid-template-columns: 0.75fr 1.25fr !important;
          }
        }
      `}</style>
    </section>
  );
};
