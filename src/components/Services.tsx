"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { servicesData, futureServicesData, ServiceTier } from "@/data/servicesData";
import { Sparkles, Check, Calendar, MessageCircle, Clock, Heart, Crown, ArrowRight } from "lucide-react";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"all" | "bridal" | "glam" | "specialized">("all");

  const handleSelect = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      router.push(`/book?service=${encodeURIComponent(serviceName)}`);
    }
  };

  const filteredServices = servicesData.filter((service) => {
    if (activeTab === "all") return true;
    if (activeTab === "bridal") return service.category === "bridal" || service.category === "styling";
    if (activeTab === "glam") return service.category === "glam" || service.category === "editorial";
    if (activeTab === "specialized") return service.category === "concierge" || service.category === "masterclass" || service.category === "events";
    return true;
  });

  return (
    <section
      id="services"
      style={{
        background: "var(--color-brand-ivory)",
        padding: "6.5rem 1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem auto" }}>
          <span className="badge-gold">
            <Sparkles size={12} color="var(--color-brand-espresso)" />
            Our Services
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.9rem)",
              marginTop: "1rem",
              marginBottom: "1rem",
              color: "var(--color-brand-espresso)",
            }}
          >
            Refined Beauty Experiences Tailored to Your Individuality
          </h2>
          <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          <p style={{ color: "var(--color-taupe)", fontSize: "1.05rem", lineHeight: "1.75" }}>
            At Noraz Signature, we create refined beauty experiences tailored to your style, occasion and individuality. From signature glam to bridal beauty, every detail is thoughtfully curated for a flawless finish.
          </p>

          {/* Interactive Filter Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
              marginTop: "2.25rem",
            }}
          >
            {[
              { key: "all", label: "All 9 Services" },
              { key: "bridal", label: "Bridal & Traditional" },
              { key: "glam", label: "Signature Glam & Editorial" },
              { key: "specialized", label: "Home Service, Lessons & Events" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                style={{
                  padding: "0.6rem 1.35rem",
                  borderRadius: "9999px",
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  border: activeTab === tab.key
                    ? "1px solid var(--color-brand-espresso)"
                    : "1px solid var(--color-border)",
                  background: activeTab === tab.key
                    ? "var(--color-brand-espresso)"
                    : "var(--color-white)",
                  color: activeTab === tab.key
                    ? "var(--color-white)"
                    : "var(--color-brand-espresso)",
                  boxShadow: "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Core Services Cards Grid (9 Services) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="card-luxury"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2.25rem 2rem",
                position: "relative",
                borderRadius: "0px",
                border: service.isPopular
                  ? "1.5px solid var(--color-brand-champagne)"
                  : "1px solid var(--color-border)",
                background: "var(--color-white)",
                boxShadow: "none",
              }}
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    right: "24px",
                    background: "var(--color-brand-champagne)",
                    color: "var(--color-brand-espresso)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    padding: "0.3rem 0.85rem",
                    borderRadius: "0px",
                    border: "1px solid var(--color-brand-espresso)",
                    boxShadow: "none",
                  }}
                >
                  ★ Signature Bridal Look
                </div>
              )}

              {/* Top Service Number & Category Indicator */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--color-brand-champagne)",
                  }}
                >
                  0{index + 1}
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 600,
                    color: "var(--color-taupe)",
                    background: "var(--color-surface)",
                    padding: "0.2rem 0.55rem",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {service.category}
                </span>
              </div>

              {/* Service Title & Tagline */}
              <div style={{ marginBottom: "1.25rem" }}>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.6rem",
                    color: "var(--color-brand-espresso)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {service.name}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-brand-espresso)", lineHeight: "1.6" }}>
                  {service.tagline}
                </p>
              </div>

              {/* Ideal for callout */}
              <div
                style={{
                  background: "var(--color-surface)",
                  borderRadius: "0px",
                  border: "1px solid var(--color-border)",
                  padding: "0.75rem 1rem",
                  marginBottom: "1.5rem",
                  fontSize: "0.8125rem",
                  color: "var(--color-brand-espresso)",
                }}
              >
                <span style={{ fontWeight: 600, color: "var(--color-brand-espresso)" }}>Ideal For: </span>
                <span style={{ color: "var(--color-taupe)" }}>{service.idealFor}</span>
              </div>

              {/* Features List */}
              <div style={{ flex: 1, marginBottom: "2rem" }}>
                <p
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 700,
                    color: "var(--color-brand-espresso)",
                    marginBottom: "0.85rem",
                  }}
                >
                  Key Artistry Focus:
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {service.features.map((feat, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        fontSize: "0.8125rem",
                        color: "var(--color-brand-espresso)",
                        lineHeight: "1.45",
                      }}
                    >
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: "rgba(216, 190, 138, 0.25)",
                          border: "1px solid rgba(216, 190, 138, 0.5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <Check size={10} color="var(--color-brand-espresso)" strokeWidth={3} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                <button
                  onClick={() => handleSelect(service.name)}
                  className={service.isPopular ? "btn-primary" : "btn-secondary"}
                  style={{ width: "100%", justifyContent: "center", borderRadius: "0px" }}
                >
                  <Calendar size={14} color="var(--color-brand-champagne)" />
                  <span>Reserve {service.name}</span>
                </button>

                <a
                  href={`https://wa.me/2347086833653?text=${encodeURIComponent(`Hi Noraz Signature, I am interested in inquiring about booking your "${service.name}" service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.45rem",
                    fontSize: "0.78125rem",
                    color: "var(--color-brand-espresso)",
                    textDecoration: "none",
                    fontWeight: 600,
                    padding: "0.4rem 0",
                  }}
                >
                  <MessageCircle size={14} color="#25D366" />
                  <span>Quick Inquiry on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Future Services — Coming Soon Section */}
        <div
          style={{
            marginTop: "6rem",
            background: "#241A18",
            border: "1px solid var(--color-brand-champagne)",
            borderRadius: "0px",
            padding: "3.5rem 2.25rem",
            position: "relative",
            color: "#F8F4EE",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 3rem auto" }}>
            <span className="badge-dark" style={{ border: "1px solid var(--color-brand-champagne)" }}>
              <Crown size={12} color="var(--color-brand-champagne)" />
              Expansion & Haute Hair Suite
            </span>
            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
                marginTop: "0.85rem",
                marginBottom: "0.85rem",
                color: "#F8F4EE",
              }}
            >
              Future Services — Coming Soon
            </h3>
            <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
            <p style={{ color: "#C9A18D", fontSize: "1rem", lineHeight: "1.7" }}>
              Expanding the Noraz Signature experience with premium hair and bridal styling services.
            </p>
          </div>

          {/* Future Services Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {futureServicesData.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  background: "#1C1412",
                  border: "1px solid rgba(216, 190, 138, 0.3)",
                  padding: "1.75rem",
                  borderRadius: "0px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem" }}>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "var(--color-brand-champagne)",
                        background: "rgba(216, 190, 138, 0.12)",
                        padding: "0.25rem 0.6rem",
                        border: "1px solid rgba(216, 190, 138, 0.3)",
                      }}
                    >
                      {item.badge}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "#A88373" }}>0{idx + 1}</span>
                  </div>

                  <h4
                    className="font-serif"
                    style={{
                      fontSize: "1.3rem",
                      color: "#F8F4EE",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.name}
                  </h4>

                  <p style={{ fontSize: "0.85rem", color: "#C9A18D", lineHeight: "1.55", marginBottom: "1.25rem" }}>
                    {item.tagline}
                  </p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {item.features.map((f, fi) => (
                      <li
                        key={fi}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          fontSize: "0.78125rem",
                          color: "#E5DCD3",
                          lineHeight: "1.4",
                        }}
                      >
                        <span style={{ color: "var(--color-brand-champagne)" }}>✦</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(216, 190, 138, 0.2)" }}>
                  <a
                    href={`https://wa.me/2347086833653?text=${encodeURIComponent(`Hi Noraz Signature, I noticed your upcoming "${item.name}" hair service and would love to join the waitlist / inquire about early availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.45rem",
                      fontSize: "0.78125rem",
                      color: "var(--color-brand-champagne)",
                      textDecoration: "none",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <span>Join Waitlist on WhatsApp</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
