# SENSay Marketing Website

The sensay.uk marketing site. Built with React + Vite. Zero dependencies beyond React itself.

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy to Vercel + sensay.uk

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial SENSay site"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/sensay-site.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to vercel.com → New Project → Import from GitHub
2. Select `sensay-site`
3. Framework preset: **Vite** (auto-detected)
4. Build command: `npm run build`  
5. Output directory: `dist`
6. Click Deploy

### Step 3 — Connect sensay.uk (in Vercel)
1. Project → Settings → Domains
2. Add `sensay.uk` and `www.sensay.uk`
3. Vercel shows you DNS records to add

### Step 4 — Add DNS records (in 123-reg)
1. Log into 123-reg → My Domains → sensay.uk → Manage → Advanced DNS
2. Delete any existing A record pointing to `@`
3. Add: Type=`A`, Name=`@`, Value=`76.76.21.21`
4. Add: Type=`CNAME`, Name=`www`, Value=`cname.vercel-dns.com`
5. Save — live within 15–60 minutes

## Email

Every contact link on the site uses `hello@sensay.uk`. There is no form backend: the contact form opens the visitor's email app with the message pre-filled.

## App subdomain

The marketing site does not link into `app.sensay.uk` before launch. Family plan and founding school calls to action are mailto links to `hello@sensay.uk`.

## Structure

```
sensay-site/
├── index.html          # Entry point + SEO meta tags
├── vite.config.js
├── vercel.json         # Routing + security headers
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css         # Shared styles, btn, stripe, section utilities
    ├── index.css       # Reset + CSS variables
    └── components/
        ├── Nav.jsx/.css        # Sticky nav, mobile hamburger
        ├── Hero.jsx/.css       # Interactive symbol board demo
        ├── Stats.jsx/.css      # Dark stats strip
        ├── HowItWorks.jsx/.css # 4-tab perspective section
        ├── AISection.jsx/.css  # Dark AI intelligence section
        ├── Pricing.jsx/.css    # 3-tier pricing cards
        ├── Testimonials.jsx/.css
        └── Footer.jsx/.css
```
