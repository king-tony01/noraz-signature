"use client";

import React, { useState } from "react";
import { journalData, JournalArticle } from "@/data/testimonialsData";
import { Sparkles, BookOpen, Clock, ArrowRight, X } from "lucide-react";

export const Journal: React.FC = () => {
  const [readingArticle, setReadingArticle] = useState<JournalArticle | null>(null);

  return (
    <section
      id="journal"
      style={{
        background: "var(--color-surface)",
        padding: "6.5rem 1.5rem",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
          <span className="badge-gold">
            <BookOpen size={12} color="var(--color-brand-espresso)" />
            The Editorial Beauty Journal
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
            Bridal Preparation Guides & Masterclass Insights
          </h2>
          <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          <p style={{ color: "var(--color-taupe)", fontSize: "0.95rem" }}>
            Curated expert advice to ensure your skin barrier is primed, your bridal timeline runs effortlessly, and your makeup looks extraordinary in person and in 8K camera lenses.
          </p>
        </div>

        {/* Articles Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {journalData.map((article) => (
            <div
              key={article.id}
              className="card-luxury"
              style={{
                borderRadius: "0px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                background: "var(--color-white)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Article Image */}
              <div style={{ aspectRatio: "16/10", overflow: "hidden", position: "relative" }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                  <span
                    style={{
                      background: "rgba(36,26,24,0.85)",
                      color: "var(--color-brand-champagne)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "0px",
                    }}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-taupe)", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
                    <span>{article.date}</span>
                    <span>•</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--color-brand-espresso)",
                      lineHeight: "1.35",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {article.title}
                  </h3>

                  <p style={{ fontSize: "0.85rem", color: "var(--color-taupe)", lineHeight: "1.6" }}>
                    {article.excerpt}
                  </p>
                </div>

                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
                  <button
                    onClick={() => setReadingArticle(article)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      color: "var(--color-brand-espresso)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={14} color="var(--color-brand-champagne)" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Modal */}
      {readingArticle && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(36,26,24,0.85)",
            backdropFilter: "blur(10px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setReadingArticle(null)}
        >
          <div
            style={{
              maxWidth: "700px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              background: "var(--color-brand-ivory)",
              borderRadius: "0px",
              padding: "2.5rem",
              position: "relative",
              border: "1px solid var(--color-brand-champagne)",
              boxShadow: "none",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setReadingArticle(null)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "var(--color-white)",
                border: "1px solid var(--color-border)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>

            <span className="badge-gold">{readingArticle.category}</span>
            <h2 className="font-serif" style={{ fontSize: "1.8rem", color: "var(--color-brand-espresso)", marginTop: "0.75rem", marginBottom: "0.5rem" }}>
              {readingArticle.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-taupe)", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              <span>Published {readingArticle.date}</span>
              <span>•</span>
              <span>{readingArticle.readTime}</span>
            </div>

            <div style={{ fontSize: "0.9375rem", color: "var(--color-brand-espresso)", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                Flawless makeup is 70% skincare architecture and 30% cosmetic artistry. When preparing for your wedding day, the barrier of your skin dictates how cosmetics bind, reflect flash, and resist humidity.
              </p>
              <h4 className="font-serif" style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
                1. Hydration Stacking Over Heavy Oils
              </h4>
              <p>
                In the months leading up to your date, prioritize hydrating essences containing hyaluronic acid and panthenol rather than dense surface oils that can cause foundations to separate.
              </p>
              <h4 className="font-serif" style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
                2. Bespoke Micro-Powdering Technique
              </h4>
              <p>
                Never bake the entire face. Our signature Noraz technique places translucent setting powders exclusively across high-movement zones (smile lines, T-zone) while leaving high points with natural, dew-reflecting radiance.
              </p>
              <h4 className="font-serif" style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
                3. The Wedding Day Touch-Up Protocol
              </h4>
              <p>
                Always blot first with tissue or oil-absorbing linen before applying powder. Applying powder directly over sebum creates cakey buildup, whereas blotting restores the fresh, velvet finish.
              </p>
            </div>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-border)", textAlign: "center" }}>
              <button onClick={() => setReadingArticle(null)} className="btn-primary">
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
