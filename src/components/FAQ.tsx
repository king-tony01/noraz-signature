"use client";

import React, { useState } from "react";
import { faqData } from "@/data/testimonialsData";
import { Sparkles, ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleFAQ = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section
      id="faq"
      style={{
        background: "var(--color-brand-ivory)",
        padding: "6.5rem 1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="badge-gold">
            <HelpCircle size={12} color="var(--color-brand-espresso)" />
            Frequently Asked Questions
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
            Everything You Need to Know Before Booking
          </h2>
          <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          <p style={{ color: "var(--color-taupe)", fontSize: "0.95rem" }}>
            Clear, transparent policies regarding retainer deposits, bridal trials, sanitation standards, and travel logistics.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqData.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                style={{
                  background: "var(--color-white)",
                  border: isOpen ? "1px solid var(--color-brand-champagne)" : "1px solid var(--color-border)",
                  borderRadius: "0px",
                  overflow: "hidden",
                  boxShadow: "none",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: "100%",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "var(--color-brand-espresso)",
                  }}
                  aria-expanded={isOpen}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", paddingRight: "1rem" }}>
                    <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-brand-nude)", fontWeight: 700 }}>
                      {item.category}
                    </span>
                    <span className="font-serif" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      {item.question}
                    </span>
                  </div>

                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1px solid var(--color-border)",
                      background: isOpen ? "var(--color-brand-espresso)" : "var(--color-surface)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "all 0.25s ease",
                      color: isOpen ? "var(--color-brand-champagne)" : "var(--color-brand-espresso)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.5rem 1.5rem",
                      color: "var(--color-taupe)",
                      fontSize: "0.9375rem",
                      lineHeight: "1.7",
                      borderTop: "1px solid var(--color-surface)",
                      paddingTop: "1rem",
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div
          style={{
            marginTop: "3.5rem",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "0px",
            padding: "2rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h4 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--color-brand-espresso)" }}>
            Have a Specific Question About Your Wedding Date?
          </h4>
          <p style={{ color: "var(--color-taupe)", fontSize: "0.875rem", maxWidth: "500px" }}>
            Our bridal concierge team is available on WhatsApp to answer any custom inquiries or discuss travel logistics.
          </p>
          <a
            href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20have%20a%20question%20regarding%20booking"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: "0.75rem 1.75rem",
              fontSize: "0.8125rem",
            }}
          >
            <MessageCircle size={15} color="var(--color-brand-champagne)" />
            <span>Chat Directly with Studio Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
};
