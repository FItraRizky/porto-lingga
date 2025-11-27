# 🚀 Quick Start Guide - Lingga Fani Portfolio

## ⚡ Cara Menjalankan Website

### Development Mode

```bash
npm run dev
```

Buka: http://localhost:9999

### Production Build

```bash
npm run build
npm start
```

---

## 📋 Checklist Sebelum Deploy

### 1. Update Domain (WAJIB!)

Ganti `https://linggafani.com` dengan domain Anda di:

- [ ] `src/app/layout.tsx` (line 42, 47, 50)
- [ ] `src/app/sitemap.ts` (line 4)
- [ ] `public/robots.txt` (line 7)

### 2. Tambahkan Open Graph Image

- [ ] Buat gambar 1200x630 pixels
- [ ] Simpan sebagai `public/og-image.jpg`
- [ ] Konten: Foto + "Radio Announcer at RRI PRO 2"

### 3. Social Media Links

Update di `src/app/layout.tsx` (line 116-119):

```typescript
"sameAs": [
  "https://instagram.com/linggafani",
  "https://linkedin.com/in/linggafani",
]
```

### 4. Google Search Console

1. [ ] Daftar di https://search.google.com/search-console
2. [ ] Verify ownership
3. [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
4. [ ] Copy verification code
5. [ ] Tambahkan di `src/app/layout.tsx` (line 81-84)

---

## 🎯 Yang Sudah Dioptimasi

### Performance ✅

- [x] LightRays optimized (30fps, fixed DPR)
- [x] Smooth scroll optimized (1.2s duration)
- [x] Lazy loading (Achievements, Testimonials, Gallery)
- [x] Image optimization (AVIF/WebP)
- [x] Code splitting dengan dynamic imports
- [x] Mouse tracking disabled by default

### SEO ✅

- [x] Complete metadata (title, description, keywords)
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml (dynamic)
- [x] Robots.txt
- [x] Web manifest (PWA)
- [x] Viewport configuration
- [x] Lang attribute (id)

---

## 🔧 Customization Tips

### Ganti Warna Theme

Edit `src/app/globals.css`:

```css
:root {
  --background: oklch(1 0 0); /* White */
  --foreground: oklch(0.145 0 0); /* Black */
  /* ... */
}
```

### Disable LightRays (Jika Terlalu Berat)

Edit `src/app/layout.tsx` (line 127):

```typescript
{
  /* <LightRaysOptimized className="absolute inset-0" followMouse={false} /> */
}
```

### Ubah Port Development

Edit `package.json`:

```json
"dev": "next dev -p 8080"  // Ganti 9999 ke port lain
```

### Tambah/Edit Konten

- **Hero**: `src/components/Hero.tsx`
- **About**: `src/components/About.tsx`
- **Services**: `src/components/Services.tsx`
- **Translations**: `src/lib/translations.ts`

---

## 🧪 Testing

### Performance Test

1. Build production: `npm run build`
2. Test di: https://pagespeed.web.dev/
3. Target: 90+ score

### SEO Test

1. Deploy website
2. Test di: https://search.google.com/test/rich-results
3. Test Open Graph: https://developers.facebook.com/tools/debug/

### Mobile Test

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test di berbagai ukuran screen

---

## 🐛 Common Issues & Solutions

### Build Error: "Cannot find module"

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Website Lag di Mobile

1. Disable LightRays (lihat di atas)
2. Atau reduce FPS di `LightRaysOptimized.tsx` (line 117):

```typescript
const targetFPS = 20; // Turunkan dari 30
```

### Smooth Scroll Terlalu Lambat/Cepat

Edit `src/components/SmoothScroll.tsx` (line 9):

```typescript
duration: 1.0,  // Lebih cepat
// atau
duration: 1.5,  // Lebih lambat
```

### Images Tidak Muncul

1. Pastikan gambar ada di folder `public/`
2. Reference tanpa `/public/`: `/image.jpg` bukan `/public/image.jpg`

---

## 📱 Deployment Platforms

### Vercel (Recommended) ⭐

1. Push ke GitHub
2. Import di vercel.com
3. Auto deploy
4. **FREE** untuk personal projects

### Netlify

1. Push ke GitHub
2. Import di netlify.com
3. Build command: `npm run build`
4. Publish directory: `.next`

### VPS/Shared Hosting

1. Build: `npm run build`
2. Upload semua files
3. Install Node.js di server
4. Run: `npm start`

---

## 📊 Expected Performance

### Desktop

- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Lighthouse Score: 90+

### Mobile

- First Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 85+

---

## 🆘 Need Help?

### Documentation

- [OPTIMASI-SEO-PERFORMA.md](./OPTIMASI-SEO-PERFORMA.md) - Full documentation
- [README.md](./README.md) - Project overview

### Resources

- Next.js: https://nextjs.org/docs
- TailwindCSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

## ✅ Final Checklist

Sebelum go live:

- [ ] Update semua domain URLs
- [ ] Add Open Graph image
- [ ] Add social media links
- [ ] Test build: `npm run build`
- [ ] Test production: `npm start`
- [ ] Test di mobile devices
- [ ] Test performance (PageSpeed)
- [ ] Test SEO (Rich Results)
- [ ] Setup Google Search Console
- [ ] Submit sitemap
- [ ] Monitor analytics

---

**Good luck! 🚀**

Jika ada pertanyaan, check dokumentasi lengkap di `OPTIMASI-SEO-PERFORMA.md`
