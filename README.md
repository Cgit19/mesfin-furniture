# Mesfin Furniture Website

**Premium bilingual (English + Amharic) business website for Mesfin Furniture (መስፍን የእንጨት ስራዎች).**

---

## 📁 Project Structure

```
mesfin-furniture/
├── index.html      # Main HTML — all sections
├── style.css       # Complete stylesheet (mobile-first)
├── main.js         # Language switching, filters, lightbox, form, animations
├── data.js         # ⭐ All content data — edit this to update products/portfolio
├── vercel.json     # Vercel deployment config
├── package.json    # Dev server script
└── README.md
```

---

## 🚀 Running Locally

```bash
cd mesfin-furniture
npx serve . -l 3000
```
Then open: http://localhost:3000

No build step, no dependencies to install. Pure HTML/CSS/JS.

---

## ⚙️ Configuration — Required Before Launch

Open **`data.js`** and update:

```js
const BUSINESS_CONFIG = {
  phone: "+251XXXXXXXXX",     // ← Real phone number
  whatsapp: "251XXXXXXXXX",   // ← Real WhatsApp number (no +)
  telegram: "https://t.me/mesfinfurnitur",  // ← Already correct
  ...
};
```

---

## 🖼️ Image Architecture

- **Hero Header (`#home`)**: Uses `images/hero-cover.jpg` — a bespoke high-resolution interior visual featuring handcrafted dark walnut woodwork, traditional Ethiopian relief-carved door motifs, organic joinery coffee table with traditional jebena, oatmeal linen upholstery, and warm ambient sunlight.
- **Collections Catalog (`#collections`)**: Crisp, studio-lit curated product imagery for each of the 9 furniture categories (Beds, Wardrobes, Sofas, Dining Tables, Kitchen Cabinets, Office Furniture, TV Stands, Doors, Custom Furniture).
- **Our Work / Past Projects (`#our-work`)**: Exclusively features **authentic, real photographs of completed projects built by Mesfin Furniture** (carved beds, multi-door wardrobes with mirrors, custom round dining sets with upholstered chairs, solid wood kitchen cabinetry, TV consoles, and carved stools) delivered across Addis Ababa, Burayu, and Shaggar City. Links directly to the official [Telegram portfolio](https://t.me/mesfinfurnitur).

---

## 🌐 Bilingual System

- Language is preserved via `localStorage`
- All content is defined in both `data-en` and `data-am` HTML attributes
- Amharic uses **Noto Sans Ethiopic** font (loaded from Google Fonts)
- To add more Amharic translations, add `data-en="..."` and `data-am="..."` to any element

---

## 🚢 Deploying to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or drag the folder into [vercel.com/new](https://vercel.com/new).

---

## ✅ Pre-Launch Checklist

- [ ] Replace phone number in `data.js`
- [ ] Replace WhatsApp number in `data.js`
- [ ] Replace all placeholder images with real Mesfin Furniture photos
- [ ] Test language switching (EN ↔ አማርኛ)
- [ ] Test WhatsApp form submission
- [ ] Test click-to-call link
- [ ] Verify Telegram link opens correctly
- [ ] Check on mobile device
- [ ] Deploy to Vercel or preferred host

---

## 📐 Color Palette

| Name         | Hex       |
|--------------|-----------|
| Walnut Brown | `#30251E` |
| Natural Oak  | `#D2B48C` |
| Warm Ivory   | `#F5F0E8` |
| Olive Green  | `#59604B` |

---

*Built for Mesfin Furniture — Burayu Ketta, Shaggar City, Ethiopia*
