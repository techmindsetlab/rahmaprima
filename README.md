# Rahma & Prima — Wedding Website

Undangan pernikahan digital untuk **Rahma Madania & Primawira Aulia Rahman** — 26 September 2026, Aminta Hall Jakarta Selatan.

## Tech Stack

- **Astro 5** + **React 19 islands**
- **Tailwind 3** + custom CSS tokens (Burgundy `#6B1E2A` + Black `#0A0A0A` + Cream `#F5EFE6`)
- **Lenis** smooth scroll + **GSAP ScrollTrigger** untuk reveal
- **i18n**: Indonesia (default) + English (`/en`)
- **RSVP** → Google Sheets via Apps Script
- Mobile-first, dioptimalkan untuk **iPad Pro** portrait & landscape

## Getting Started

```bash
npm install
cp .env.example .env   # isi PUBLIC_RSVP_ENDPOINT setelah deploy Apps Script
npm run dev            # http://localhost:4321
npm run build          # → dist/
```

## Struktur

```
src/
  layouts/Base.astro          Lenis + GSAP registry, meta, fonts
  components/
    astro/                    Nav, Hero, Quote, Couple, DateSection, Venue, Gallery, Marquee, Footer
    react/                    Gift (copy-to-clipboard), RSVP (form + Sheets POST)
  i18n/                       id.json, en.json, index.ts
  lib/                        gallery.ts, gift.ts (bank accounts)
  pages/
    index.astro               ID (default)
    en/index.astro            EN
  styles/tokens.css           tokens + Tailwind layers
public/
  photos/photo-01..12.webp    12 foto prewedding
  logo/monogram-white.png     Wedding logo
scripts/apps-script/Code.gs   RSVP endpoint (Google Apps Script)
```

## Design Direction

- **Palette:** Burgundy deep + Black + Cream + Gold accent
- **Type:** Cormorant Garamond italic (display) + Inter (body). Reckless fallback jika tersedia.
- **Motion:** CSS/GSAP-only — mask reveal, subtle parallax, animated silk gradient background (no WebGL).
- **Layout:** Editorial, asymmetric gallery grid, high-contrast blocking.
- **Immersive touches:** Grain overlay, animated satin gradient di hero, marquee ticker, sticker cursor (bisa ditambahkan nanti).

## RSVP → Google Sheets

Lihat `scripts/apps-script/Code.gs` untuk setup lengkap. Ringkasnya:

1. Buat Sheet baru, tab `RSVP`, header: `timestamp | name | attending | guests | message | userAgent`.
2. Extensions → Apps Script → paste `Code.gs`, ganti `SHEET_ID`.
3. Deploy → Web app → execute as **Me**, access **Anyone**.
4. Salin URL `/exec` ke `PUBLIC_RSVP_ENDPOINT` di `.env`.

## Next Steps (opsional)

- [ ] Tambahkan halaman `/rsvp/[guest]` untuk personalisasi undangan
- [ ] Photo submission wall (Cloudinary upload)
- [ ] Sticker cursor React island
- [ ] Countdown timer di hero
- [ ] Add-to-calendar (.ics) button
- [ ] Music toggle (howler.js)
