"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandEssence } from "@/components/BrandEssence";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { BookingCalculator } from "@/components/BookingCalculator";
import { Testimonials } from "@/components/Testimonials";
import { Journal } from "@/components/Journal";
import { FAQ } from "@/components/FAQ";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function Home() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>("The Royal Bridal Suite");
  const [bookingNotes, setBookingNotes] = useState<string>("");

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
    scrollToSection("contact");
  };

  const handleApplyToBooking = (serviceName: string, notes: string) => {
    setSelectedServiceForBooking(serviceName);
    setBookingNotes(notes);
    scrollToSection("contact");
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Navigation */}
      <Navbar onBookClick={() => scrollToSection("contact")} />

      {/* Hero Section */}
      <Hero
        onBookClick={() => scrollToSection("contact")}
        onExploreClick={() => scrollToSection("services")}
      />

      {/* Brand Essence & Philosophy */}
      <BrandEssence />

      {/* Services & Package Catalog */}
      <Services onSelectService={handleSelectService} />

      {/* High Artistry Portfolio (Dark Theme Section) */}
      <Portfolio />

      {/* Interactive Price Estimator */}
      <BookingCalculator onApplyToBooking={handleApplyToBooking} />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Beauty Journal & Bridal Prep Guides */}
      <Journal />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* VIP Booking / Consultation Form */}
      <BookingForm
        initialService={selectedServiceForBooking}
        initialNotes={bookingNotes}
      />

      {/* Dark Luxury Footer */}
      <Footer />

      {/* Floating Instant VIP WhatsApp Contact Widget */}
      <div
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          alignItems: "flex-end",
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
            transition: "all 0.3s ease",
          }}
          className="whatsapp-float"
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
