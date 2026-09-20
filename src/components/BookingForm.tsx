"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Calendar, CheckCircle2, MessageCircle, Send, HeartHandshake, ArrowRight } from "lucide-react";

interface BookingFormProps {
  initialService?: string;
  initialNotes?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = "The Royal Bridal Suite",
  initialNotes = "",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    serviceType: initialService,
    location: "",
    partyCount: "1",
    notes: initialNotes,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Luxury Gold & Rose Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D8BE8A", "#C9A18D", "#241A18", "#E6C9C5"],
        });
      } catch (err) {
        console.error("Confetti error", err);
      }
    }, 900);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi Noraz Signature! I just submitted an inquiry on your website:
*Name:* ${formData.fullName}
*Event Date:* ${formData.eventDate || "TBD"}
*Service:* ${formData.serviceType}
*Location:* ${formData.location || "Not specified"}
*Party Size:* ${formData.partyCount}
*Notes:* ${formData.notes || "None"}

Looking forward to hearing from you!`;

    return encodeURIComponent(text);
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--color-brand-ivory)",
        padding: "6.5rem 1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge-gold">
            <Sparkles size={12} color="var(--color-brand-espresso)" />
            VIP Date Reservation
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              marginTop: "1rem",
              marginBottom: "1rem",
              color: "var(--color-brand-espresso)",
            }}
          >
            Inquire for Your Date & Bridal Consultation
          </h2>
          <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          <p style={{ color: "var(--color-taupe)", fontSize: "0.95rem" }}>
            Please fill out your event details below. We respond to all inquiries within 24 business hours with availability, custom timeline proposals, and retainer instructions.
          </p>
        </div>

        {/* Form or Confirmation Card */}
        <div
          style={{
            background: "var(--color-white)",
            border: "1px solid var(--color-border)",
            borderRadius: "0px",
            padding: "3rem 2.5rem",
            boxShadow: "none",
          }}
        >
          {isSubmitted ? (
            <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "rgba(216, 190, 138, 0.2)",
                  border: "2px solid var(--color-brand-champagne)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem auto",
                }}
              >
                <CheckCircle2 size={36} color="var(--color-brand-espresso)" />
              </div>

              <h3 className="font-serif" style={{ fontSize: "2rem", color: "var(--color-brand-espresso)", marginBottom: "0.5rem" }}>
                Inquiry Received With Pleasure
              </h3>
              <p style={{ color: "var(--color-taupe)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto 2rem auto", lineHeight: "1.6" }}>
                Thank you, <strong style={{ color: "var(--color-brand-espresso)" }}>{formData.fullName}</strong>. We have logged your request for{" "}
                <strong style={{ color: "var(--color-brand-espresso)" }}>{formData.serviceType}</strong> on{" "}
                <strong style={{ color: "var(--color-brand-espresso)" }}>{formData.eventDate || "your upcoming date"}</strong>.
              </p>

              <div
                style={{
                  background: "var(--color-surface)",
                  borderRadius: "0px",
                  padding: "1.5rem",
                  marginBottom: "2rem",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  border: "1px solid var(--color-border)",
                }}
              >
                <p style={{ fontWeight: 600, color: "var(--color-brand-espresso)", marginBottom: "0.5rem" }}>
                  Next Steps:
                </p>
                <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", color: "var(--color-taupe)", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <li>Our studio coordinator will check the master calendar for date exclusivity.</li>
                  <li>You will receive a formal booking proposal and invoice link via email.</li>
                  <li>Want immediate confirmation? Connect directly on WhatsApp with your inquiry code.</li>
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <a
                  href={`https://wa.me/2347086833653?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-champagne"
                >
                  <MessageCircle size={16} />
                  <span>Connect Directly on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      eventDate: "",
                      serviceType: "The Royal Bridal Suite",
                      location: "",
                      partyCount: "1",
                      notes: "",
                    });
                  }}
                  className="btn-secondary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.5rem",
                }}
                className="form-grid-2"
              >
                {/* Full Name */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-brand-espresso)", marginBottom: "0.4rem" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amara Davies"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "0px",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-surface)",
                      color: "var(--color-brand-espresso)",
                      fontSize: "0.9375rem",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-brand-espresso)", marginBottom: "0.4rem" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="amara@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "0px",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-surface)",
                      color: "var(--color-brand-espresso)",
                      fontSize: "0.9375rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.5rem",
                }}
                className="form-grid-2"
              >
                {/* Phone / WhatsApp */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-brand-espresso)", marginBottom: "0.4rem" }}>
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 708 683 3653"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "0px",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-surface)",
                      color: "var(--color-brand-espresso)",
                      fontSize: "0.9375rem",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-brand-espresso)", marginBottom: "0.4rem" }}>
                    Event / Wedding Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "0px",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-surface)",
                      color: "var(--color-brand-espresso)",
                      fontSize: "0.9375rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.5rem",
                }}
                className="form-grid-2"
              >
                {/* Service Selection */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-brand-espresso)", marginBottom: "0.4rem" }}>
                    Primary Service Package *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "0px",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-surface)",
                      color: "var(--color-brand-espresso)",
                      fontSize: "0.9375rem",
                      outline: "none",
                    }}
                  >
                    <option value="The Royal Bridal Suite">The Royal Bridal Suite ($650)</option>
                    <option value="Traditional & Cultural Elegance">Traditional & Cultural Elegance ($550)</option>
                    <option value="Signature Red Carpet & Gala">Signature Red Carpet & Gala ($220)</option>
                    <option value="Editorial & High-Fashion Campaign">Editorial & High-Fashion Campaign ($850)</option>
                    <option value="1-on-1 VIP Artistry Masterclass">1-on-1 VIP Artistry Masterclass ($450)</option>
                  </select>
                </div>

                {/* Bridal Party Count */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-brand-espresso)", marginBottom: "0.4rem" }}>
                    Total Glam Attendees (Bride + Party)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.partyCount}
                    onChange={(e) => setFormData({ ...formData, partyCount: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "0px",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-surface)",
                      color: "var(--color-brand-espresso)",
                      fontSize: "0.9375rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-brand-espresso)", marginBottom: "0.4rem" }}>
                  Event Location / Venue City
                </label>
                <input
                  type="text"
                  placeholder="e.g. The Dorchester, London / Eko Hotel, Lagos / In-Studio"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0px",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-brand-espresso)",
                    fontSize: "0.9375rem",
                    outline: "none",
                  }}
                />
              </div>

              {/* Notes / Special Requests */}
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-brand-espresso)", marginBottom: "0.4rem" }}>
                  Notes, Undertone Preferences or Special Requests
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your wedding dress, inspiration look, skin sensitivities, or morning timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0px",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-brand-espresso)",
                    fontSize: "0.9375rem",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: "0.5rem" }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: "100%", padding: "1.1rem", fontSize: "0.9375rem", justifyContent: "center" }}
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Calendar size={16} color="var(--color-brand-champagne)" />
                      <span>Submit Official Booking Inquiry</span>
                      <ArrowRight size={16} color="var(--color-brand-champagne)" />
                    </>
                  )}
                </button>
              </div>

              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--color-taupe)" }}>
                🔒 Your privacy is honored. We never share your phone or event information.
              </p>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 680px) {
          .form-grid-2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
