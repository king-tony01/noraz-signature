export interface Testimonial {
  id: string;
  clientName: string;
  roleOrEvent: string;
  quote: string;
  rating: number;
  location: string;
  date: string;
  image?: string;
  highlightTag?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Amara Okafor-Davies",
    roleOrEvent: "White & Traditional Wedding Bride",
    quote:
      "Noraz is an absolute magician with skin tones. As a woman with deep bronze skin, I’ve had MUAs in the past leave me looking ashy or too red. Noraz made my skin look like pure velvet! My makeup stayed completely untouched from 7:00 AM until our 2:00 AM afterparty tears and dancing.",
    rating: 5,
    location: "Lagos & London",
    date: "December 2025",
    highlightTag: "Flawless All-Day Wear",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "test-2",
    clientName: "Dr. Zainab Al-Hassan",
    roleOrEvent: "Luxury Gala Honoree",
    quote:
      "Her studio setup is top tier and her hygiene standards are second to none. The champagne and espresso accents throughout her work reflect her refined taste. She gave me the most elegant, sultry red carpet glam that commanded the entire ballroom.",
    rating: 5,
    location: "Atlanta, GA",
    date: "January 2026",
    highlightTag: "Red Carpet Perfection",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "test-3",
    clientName: "Khadija & Marcus",
    roleOrEvent: "Destination Wedding in Santorini",
    quote:
      "Booking the Noraz Signature Bridal Concierge was the best investment of our wedding. She was calm, punctual, and made my entire bridal party of 8 look like runway models. I felt like the most confident version of myself walking down the aisle.",
    rating: 5,
    location: "Santorini, Greece",
    date: "October 2025",
    highlightTag: "Destination Bridal Concierge",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "test-4",
    clientName: "Victoria Sterling",
    roleOrEvent: "Fashion Director, Mode Magazine",
    quote:
      "Noraz understands lighting for high-end photography like few artists do. Her understanding of high-definition textures, studio flash, and seamless blend speeds up our entire post-production process. A true visionary.",
    rating: 5,
    location: "New York, NY",
    date: "February 2026",
    highlightTag: "Editorial Campaign Partner",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80"
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: "Booking & Retainer" | "Bridal Trials" | "On-Location & Travel" | "Skin Prep & Hygiene";
}

export const faqData: FAQItem[] = [
  {
    category: "Booking & Retainer",
    question: "How far in advance should I book my wedding or special occasion date?",
    answer:
      "We recommend securing your date 6 to 12 months in advance for peak wedding seasons (Spring/Fall) and international destination weddings. Due to our boutique approach, we only accept a limited number of bridal commissions each month to ensure individualized care."
  },
  {
    category: "Booking & Retainer",
    question: "What is required to lock in and confirm my date?",
    answer:
      "A 40% non-refundable retainer and a signed beauty service agreement are required to officially reserve your date on the Noraz Signature calendar. The remaining balance is due 14 days prior to your wedding day or upon arrival for single events."
  },
  {
    category: "Bridal Trials",
    question: "When should we schedule my bridal trial session?",
    answer:
      "Bridal trials are typically scheduled 6 to 8 weeks before your wedding date. We recommend aligning your trial with your bridal shower, dress fitting, or engagement photoshoot to see how the look wears and photographs in various lighting conditions."
  },
  {
    category: "On-Location & Travel",
    question: "Do you travel for destination weddings and on-location bookings?",
    answer:
      "Yes, Noraz Signature offers worldwide travel services. Domestic and international travel fees include round-trip flight/mileage, hotel accommodation, and ground transportation. A custom travel quote is provided during initial inquiry."
  },
  {
    category: "Skin Prep & Hygiene",
    question: "What hygiene and sanitation protocols are observed?",
    answer:
      "Sanitation is our sacred standard. We strictly utilize hospital-grade 70% isopropyl alcohol sanitization, disposable mascara and lip wands, stainless steel palettes, and freshly deep-cleansed, sanitized brush sets for every single client."
  },
  {
    category: "Skin Prep & Hygiene",
    question: "How should I prepare my skin on the morning of my appointment?",
    answer:
      "Arrive with a cleanly washed, gently exfoliated face free of any existing makeup. We provide a full 24k luxury hydrating skin prep cocktail before applying any complexion cosmetics."
  }
];

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  date: string;
  image: string;
}

export const journalData: JournalArticle[] = [
  {
    id: "journal-1",
    title: "The 6-Month Bridal Skincare Countdown: How to Achieve Velvet Radiance",
    category: "Bridal Prep",
    readTime: "4 min read",
    excerpt: "The exact timeline of dermatological hydration, gentle acids, and barrier health to guarantee zero texture and creasing on your wedding day.",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "journal-2",
    title: "Demystifying Undertones: Why Olive, Golden & Neutral Melanin Need Bespoke Mixing",
    category: "Artistry Science",
    readTime: "5 min read",
    excerpt: "Why one bottle of foundation is never enough. Exploring how custom pigment drops create that second-skin finish without ashy flashback.",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "journal-3",
    title: "The Ultimate Wedding Day Emergency Kit: What Every Bride Must Have in Her Clutch",
    category: "Editorial Tips",
    readTime: "3 min read",
    excerpt: "From blotting linen to lip glaze sealers: our curated guide to keeping your makeup camera-ready through 14 hours of happy tears and celebrations.",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
  }
];
