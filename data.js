/**
 * Mesfin Furniture — Data File
 * Update product images, descriptions, and portfolio entries here.
 * Replace Unsplash URLs with actual product photos when available.
 */

const BUSINESS_CONFIG = {
  phone: "+251912901268",          // ← Replace with real phone number
  whatsapp: "251912905268",        // ← Replace with real WhatsApp number (no +)
  telegram: "https://t.me/mesfinfurnitur",
  location: {
    en: "Burayu Ketta, Shaggar City, Ethiopia",
    am: "ቡራዩ ቀታ፣ ሸገር ከተማ፣ ኢትዮጵያ"
  },
  serviceAreas: {
    en: "Addis Ababa & Shaggar City",
    am: "አዲስ አበባ እና ሸገር ከተማ"
  }
};

const COLLECTIONS = [
  {
    id: "bed",
    category: "bedroom",
    titleEn: "Beds",
    titleAm: "አልጋዎች",
    descEn: "Solid wood bed frames crafted for comfort and durability. Single, double, and king sizes available.",
    descAm: "ለምቾትና ዘለቄ የተሠሩ የእንጨት አልጋ ፍሬሞች። ሲንግል፣ ደብል እና ኪንግ ሲዝ ይገኛሉ።",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80&auto=format&fit=crop",
    alt: "Solid wood bed frame with elegant headboard"
  },
  {
    id: "wardrobe",
    category: "bedroom",
    titleEn: "Wardrobes",
    titleAm: "ቁምሳጥኖች",
    descEn: "Spacious, well-organized wardrobes tailored to your storage needs and room dimensions.",
    descAm: "ሰፊ እና ደህና ሆነ ቁምሳጥኖች — ለቦታዎ እና ማስቀመጫ ፍላጎትዎ የሚዛምዱ።",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    alt: "Modern wooden wardrobe with clean minimalist design"
  },
  {
    id: "sofa",
    category: "living",
    titleEn: "Sofas",
    titleAm: "ሶፋዎች",
    descEn: "Comfortable, well-upholstered sofas with solid wooden frames. Perfect for living and reception rooms.",
    descAm: "ምቹ፣ ደህና ሆነ ሶፋዎች። ለሳሎን እና ቤት ወላጅ ክፍሎች ያስማሙ።",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&auto=format&fit=crop",
    alt: "Comfortable tailored sofa with solid wooden frame in modern living room"
  },
  {
    id: "dining-table",
    category: "dining",
    titleEn: "Dining Tables",
    titleAm: "የምሳ ጠረጴዛዎች",
    descEn: "Solid wood dining tables and chair sets. From intimate 4-seaters to large family gatherings.",
    descAm: "የእንጨት የምሳ ጠረጴዛዎች እና ወንበር ሴቶች። ከ4 ሰው ጀምሮ ትልቅ ቤተሰብ ቁጥርም ይሠራ።",
    image: "https://images.unsplash.com/photo-1617098474202-0d0d7a6f3161?w=800&q=80&auto=format&fit=crop",
    alt: "Handcrafted wooden dining table and chairs"
  },
  {
    id: "kitchen-cabinet",
    category: "dining",
    titleEn: "Kitchen Cabinets",
    titleAm: "ወጥ ቤት ቁምሳጥኖች",
    descEn: "Custom kitchen cabinetry designed for Ethiopian kitchens — durable, practical, and elegantly finished.",
    descAm: "ለኢትዮጵያ ወጥ ቤቶች የተዘጋጁ ካስቶም ቁምሳጥኖች — ጠንካራ፣ ተግባራዊ እና ቆንጆ።",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop",
    alt: "Modern bespoke wooden kitchen cabinetry"
  },
  {
    id: "office",
    category: "office",
    titleEn: "Office Furniture",
    titleAm: "የቢሮ ቤት ዕቃ",
    descEn: "Professional desks, shelves, and storage solutions for offices and home workspaces.",
    descAm: "ፕሮፌሽናል ጠረጴዛዎች፣ መደርደሪያዎች እና ማስቀመጫዎች ለቢሮ እና ቤት ሥራ ቦታ።",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80&auto=format&fit=crop",
    alt: "Modern wooden executive office desk and storage"
  },
  {
    id: "tv-stand",
    category: "living",
    titleEn: "TV Stands",
    titleAm: "የቲቪ ቆሚዎች",
    descEn: "Stylish TV stands and entertainment units that complement your living room decor.",
    descAm: "ቆንጆ የቲቪ ቆሚዎች እና የሳሎን ማስጌጫ — ለሳሎን ዲኮርዎ የሚስማሙ።",
    image: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=800&q=80&auto=format&fit=crop",
    alt: "Low-profile solid wood TV stand media console"
  },
  {
    id: "door",
    category: "other",
    titleEn: "Doors",
    titleAm: "በሮች",
    descEn: "Solid wood interior and exterior doors. Classic panel designs and modern flat styles available.",
    descAm: "ጠጣር የእንጨት ውስጥ እና ውጪ በሮች። ክላሲክ ዲዛይን እና ዘመናዊ ቅርጾች ይገኛሉ።",
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&q=80&auto=format&fit=crop",
    alt: "Crafted solid wood interior panel door"
  },
  {
    id: "custom",
    category: "other",
    titleEn: "Custom Furniture",
    titleAm: "ካስቶም ቤት ዕቃ",
    descEn: "Have a unique idea? We craft any furniture piece designed specifically for your space and style.",
    descAm: "ልዩ ሐሳብ አለዎ? ለቦታዎ እና ዘይቤዎ ብቻ ማናቸውንም ቤት ዕቃ እንሠራለን።",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80&auto=format&fit=crop",
    alt: "Artisan woodworker hand-finishing bespoke furniture"
  }
];

const PORTFOLIO = [
  {
    image: "images/portfolio-1.jpg",
    captionEn: "Ornate carved bed — Mesfin Furniture",
    captionAm: "ጌጣጌጥ ቅርጽ ያለው አልጋ",
    alt: "Ornately carved dark wood bed frame with decorative headboard — Mesfin Furniture"
  },
  {
    image: "images/portfolio-2.jpg",
    captionEn: "Panel bed with clean lines",
    captionAm: "ቀላል ዲዛይን ያለው አልጋ",
    alt: "Solid wood bed frame with square panel headboard — Mesfin Furniture"
  },
  {
    image: "images/portfolio-3.jpg",
    captionEn: "Four-door wardrobe with drawers",
    captionAm: "አራት ደጅ ቁምሳጥን",
    alt: "Large four-door wooden wardrobe with bottom drawers — Mesfin Furniture"
  },
  {
    image: "images/portfolio-4.jpg",
    captionEn: "Round dining set — 6 chairs",
    captionAm: "ክብ ምሳ ጠረጴዛ — 6 ወንበር",
    alt: "Round wooden dining table with six upholstered chairs — Mesfin Furniture"
  },
  {
    image: "images/portfolio-5.jpg",
    captionEn: "Full kitchen cabinet set",
    captionAm: "ሙሉ ወጥ ቤት ቁምሳጥን",
    alt: "Complete wooden kitchen cabinet set with plate rack — Mesfin Furniture"
  },
  {
    image: "images/portfolio-6.jpg",
    captionEn: "Wardrobe with mirror",
    captionAm: "መስተዋት ያለው ቁምሳጥን",
    alt: "Three-door wardrobe with integrated mirror and drawers — Mesfin Furniture"
  },
  {
    image: "images/portfolio-7.jpg",
    captionEn: "Handcrafted carved stools",
    captionAm: "የሚጌጡ ካርቭ ወንበሮች",
    alt: "Three handcrafted wooden stools with carved traditional patterns — Mesfin Furniture"
  },
  {
    image: "images/portfolio-8.jpg",
    captionEn: "Modern shelving & coffee table set",
    captionAm: "ዘመናዊ መደርደሪያ እና ቡና ጠረጴዛ",
    alt: "Modern white and dark grey ladder shelf with matching coffee table — Mesfin Furniture"
  }
];
