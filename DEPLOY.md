# Deploy ke Vercel

## Opsi A — Deploy via Git (recommended)

1. **Push ke GitHub:**
   ```bash
   cd D:\rahmaprima
   git init
   git add .
   git commit -m "Initial commit: Rahma & Prima wedding site"
   git branch -M main
   git remote add origin https://github.com/USERNAME/rahmaprima.git
   git push -u origin main
   ```

2. **Import di Vercel:**
   - Buka https://vercel.com/new
   - Pilih repo `rahmaprima`
   - Framework auto-detect: **Astro** ✅
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Klik **Deploy**

3. **Set Environment Variable** (Settings → Environment Variables):
   - Key: `PUBLIC_RSVP_ENDPOINT`
   - Value: URL Google Apps Script deployment (dari `scripts/apps-script/Code.gs` setup)
   - Environments: **Production, Preview, Development**
   - Redeploy setelah ditambahkan.

## Opsi B — Deploy via Vercel CLI

```bash
npm i -g vercel
cd D:\rahmaprima
vercel                 # first-time setup, jawab prompt
vercel env add PUBLIC_RSVP_ENDPOINT   # tambahkan value
vercel --prod          # production deploy
```

## Custom Domain

- Vercel Dashboard → Project → **Settings → Domains** → Add `rahmaprima.com` (atau apapun).
- Vercel kasih 2 record (A + CNAME) — paste ke DNS registrar (Namecheap/Cloudflare/dll).
- Update `site` di `astro.config.mjs` ke domain final, redeploy.

## Yang sudah dikonfigurasi

- `astro.config.mjs` → adapter `@astrojs/vercel`, output static, Web Analytics on
- `vercel.json` → cache immutable untuk `/photos/*` & `/logo/*`, security headers
- `.vercelignore` → skip file source (WebP asli di root sudah di-copy ke `public/`)
- Sitemap otomatis di `/sitemap-index.xml`

## Sanity check sebelum deploy

- Aset foto ada di `public/photos/photo-01..12.webp` ✅
- Logo ada di `public/logo/monogram-white*.png` ✅
- `.env.example` di-commit; `.env` (yang berisi endpoint asli) di-ignore ✅
- Google Apps Script sudah deploy & URL disalin ke Vercel env var

Setelah deploy pertama, URL biasanya: `https://rahmaprima.vercel.app`
