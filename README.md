# Invisible Character Generator

A production-ready, SEO-optimized Next.js website for generating and copying invisible Unicode characters.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Rendering**: Static Site Generation (SSG) — 44 pages pre-built
- **Deployment**: Vercel-ready

## 🌐 Multi-Language Support

| Language | Route |
|----------|-------|
| English  | `/en/` |
| Spanish  | `/es/` |
| Portuguese (BR) | `/pt/` |
| Arabic (RTL) | `/ar/` |

## 📄 Pages Generated (44 total)

### Homepage (4 languages)
- `/en/`, `/es/`, `/pt/`, `/ar/`

### SEO Pages (5 × 4 languages = 20 pages)
- `/[lang]/invisible-character-for-discord`
- `/[lang]/blank-text-instagram`
- `/[lang]/empty-name-pubg`
- `/[lang]/invisible-text-whatsapp`
- `/[lang]/copy-blank-space`

### Blog (4 langs × 4 pages = 16 pages)
- `/[lang]/blog/` — Blog index
- `/[lang]/blog/how-to-post-blank-status-whatsapp`
- `/[lang]/blog/creative-ways-to-use-invisible-characters-social-media`
- `/[lang]/blog/how-to-hide-username-gaming-platforms`

## 🛠️ Project Structure

```
/app
  /[lang]/page.jsx          → Homepage
  /[lang]/blog/page.jsx     → Blog index
  /[lang]/blog/[slug]/      → Blog posts
  /[lang]/invisible-character-for-discord/
  /[lang]/blank-text-instagram/
  /[lang]/empty-name-pubg/
  /[lang]/invisible-text-whatsapp/
  /[lang]/copy-blank-space/

/components
  Header.jsx                → Sticky header + language switcher + mobile menu
  Footer.jsx                → Footer with links
  ToolBox.jsx               → Main generator (Method 1, Method 2, Test area, Unicode table)
  FAQ.jsx                   → Accordion FAQ with smooth animation
  BlogCards.jsx             → Blog preview cards
  SEOToolPage.jsx           → Reusable SEO landing page layout

/lib
  invisibleChars.js         → Unicode character definitions + generator
  blogPosts.js              → Blog content
  i18n.js                   → Translation loader + RTL detection

/locales
  en.json                   → English
  es.json                   → Spanish
  pt.json                   → Portuguese
  ar.json                   → Arabic
```

## 🏃 Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Static export to /out
```

## 🌍 Deploy to Vercel

```bash
npx vercel --prod
```

Or connect your GitHub repo to Vercel — it auto-detects Next.js.

## ✅ Features

- ✅ 44 pre-built static pages (SSG)
- ✅ 4 languages with RTL (Arabic) support
- ✅ SEO meta tags + Open Graph + Twitter Cards
- ✅ JSON-LD structured data (WebApplication + FAQPage)
- ✅ Invisible character generator (Method 1 + Method 2)
- ✅ Copy to clipboard with success state
- ✅ Live test area with paste support
- ✅ Unicode character table with per-row copy
- ✅ FAQ accordion with smooth animation
- ✅ Blog system with 3 posts
- ✅ 5 programmatic SEO landing pages × 4 languages
- ✅ Mobile-first responsive design
- ✅ Language switcher in header
- ✅ Hover animations + micro-interactions
