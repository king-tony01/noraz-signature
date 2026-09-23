export interface PortfolioItem {
  id: string;
  title: string;
  category: "Bridal" | "Traditional" | "Editorial" | "Soft Glam";
  tag: string;
  image: string;
  description: string;
  details: string[];
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  skinTone: string;
  keyTechniques: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "emerald-silk-glam",
    title: "Emerald Elegance & Soft Warm Glam",
    category: "Soft Glam",
    tag: "Emerald Silk Glam",
    image: "/portfolio/emerald-silk-glam.jpg",
    description: "A polished, soft-glam makeup look featuring subtle smoky eyes, glowing skin, and warm nude-glossed lips, perfectly complemented by a rich emerald green satin robe.",
    details: ["Subtle Smoky Eyes", "Glossy Nude Lips", "Warm Toned Complexion", "Emerald Satin Robe Styling"]
  },
  {
    id: "majestic-gold-gele-purple",
    title: "Majestic Gold Gele & Royal Purple Glam",
    category: "Traditional",
    tag: "Gold Gele & Royal Purple",
    image: "/portfolio/majestic-gold-gele-purple.jpg",
    description: "A vibrant traditional celebration look showcasing a rose-style structured gold Gele, warm defined eyeshadow, and a subtle berry lip that matches rich purple embroidered attire.",
    details: ["Rose-Style Gold Gele Architecture", "Warm Defined Eyeshadow", "Subtle Berry Lip Palette", "Royal Purple Attire Harmony"]
  },
  {
    id: "soft-pink-sculpted-brows",
    title: "Soft Pink & Sculpted Brows",
    category: "Editorial",
    tag: "Soft Matte Pastel Eyes",
    image: "/portfolio/soft-pink-sculpted-brows.jpg",
    description: "A refined close-up highlight featuring delicate pastel pink eye shadow, precisely shaped eyebrows, and a natural pink lip with a radiant finish.",
    details: ["Delicate Pastel Pink Eyeshadow", "Micro-Sculpted Eyebrows", "Natural Pink Satin Lip", "Dewy Skin Complexion"]
  },
  {
    id: "golden-shimmer-radiant-smile",
    title: "Golden Shimmer Eyes & Radiant Smile",
    category: "Soft Glam",
    tag: "Radiant Golden Glam",
    image: "/portfolio/golden-shimmer-radiant-smile.jpg",
    description: "A bright, cheerful look featuring gold glitter eye shadow, dramatic fluttery lashes, rosy cheeks, and a high-shine nude gloss.",
    details: ["Gold Shimmer Eyelid Foil", "Dramatic Fluttery Lashes", "Warm Rosy Cheek Flush", "High-Shine Nude Gloss"]
  },
  {
    id: "magenta-high-curly-bun",
    title: "Pop of Magenta & High Curly Bun",
    category: "Editorial",
    tag: "Edgy Magenta Editorial",
    image: "/portfolio/magenta-high-curly-bun.jpg",
    description: "A chic, high-contrast look highlighting vibrant magenta eyeshadow, winged liner, and polished brows paired with an elegant textured updo bun.",
    details: ["Vibrant Magenta Cut-Crease", "Precision Winged Liner", "Polished Architectural Brows", "High-Contrast Melanin Glow"]
  },
  {
    id: "soft-bridal-tiara-elegance",
    title: "Soft Bridal Glam & Tiara Elegance",
    category: "Bridal",
    tag: "Classic White Bridal",
    image: "/portfolio/soft-bridal-tiara-elegance.jpg",
    description: "A timeless bridal look featuring soft neutral eyeshadow, gentle blush and a natural glow, paired with a classic lace gown, floral bouquet and sparkling tiara.",
    details: ["Soft Neutral Eyeshadow", "Gentle Radiant Blush", "Skin-First Bridal Complexion", "Tiara & Lace Gown Pairing"]
  },
  {
    id: "warm-sunset-ombre-lip",
    title: "Warm Sunset Lid & Ombré Lip",
    category: "Soft Glam",
    tag: "Sunset Shimmer Glam",
    image: "/portfolio/warm-sunset-ombre-lip.jpg",
    description: "A soft-focused, symmetrical portrait displaying warm orange-gold shimmer eyeshadow, seamless face sculpting and a defined nude-pink ombré lip.",
    details: ["Warm Orange-Gold Shimmer Lid", "Defined Nude-Pink Ombré Lip", "Seamless Cheekbone Sculpting", "Symmetrical Brow Architecture"]
  },
  {
    id: "soft-winged-dusky-rose",
    title: "Soft Winged Eye & Dusky Rose Blush",
    category: "Soft Glam",
    tag: "Modest Elegance Glam",
    image: "/portfolio/soft-winged-dusky-rose.jpg",
    description: "A warm and radiant portrait showcasing classic winged eyeliner, soft dusty-rose blush and glossy lips framed nicely by a dark headscarf.",
    details: ["Classic Soft Winged Eyeliner", "Dusky Rose Cheek Dimension", "High-Gloss Radiant Lip", "Luminous Velvet Base"]
  },
  {
    id: "luminous-gold-high-shine-gloss",
    title: "Luminous Gold Lid & High-Shine Gloss",
    category: "Editorial",
    tag: "Luminous Gold Editorial",
    image: "/portfolio/luminous-gold-high-shine-gloss.jpg",
    description: "A warm, glowing portrait featuring subtle gold shimmer lids, clean winged eyeliner, flawless skin finish and a rich nude lip gloss with sleek straight hair.",
    details: ["Subtle Gold Shimmer Lids", "Clean Winged Eyeliner", "Flawless Skin Finish", "High-Shine Nude Gloss"]
  }
];

export const beforeAfterShowcase: BeforeAfterPair = {
  id: "ba-bridal",
  title: "The Signature Bridal Glow Transformation",
  category: "Bridal Artistry",
  description: "Witness the art of skin-first complexion architecture: from bare hydrated canvas to luminous, sculpted bridal radiance with zero heavy caking.",
  beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  skinTone: "Deep Warm Caramel with Golden Olive Undertones",
  keyTechniques: [
    "Targeted Color Correction (Hyperpigmentation neutralization without gray cast)",
    "Dimensional Micro-Contour that honors natural facial bone structure",
    "Multi-Zone Setting (Hydrating center with shine-resistant perimeter)"
  ]
};
