# SENSay Marketing Website

The sensay.uk marketing site. Built with React + Vite. No dependencies beyond React and React Router.

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Hosting and deploys

The site is hosted on Vercel, alongside the app and the back office, in the same Vercel team:

| Address | Vercel project | Repo |
|---|---|---|
| sensay.uk (www.sensay.uk redirects here) | `sensay-marketing` | `sensay-marketing` |
| app.sensay.uk | `sensay-app` | `sensay-app` |
| sensay-hq.vercel.app (custom domain to follow) | `sensay-hq` | `sensay-admin` |

- **Production:** every merge to `main` deploys to sensay.uk automatically.
- **Previews:** every pull request gets its own preview link from Vercel. Check it there before merging.
- Vercel settings: framework Vite, build command `npm run build`, output directory `dist`.

The old Jenkins deploy to a separate server was retired on 25 October 2026. Do not deploy any other way.

## DNS (123-reg)

sensay.uk is registered at 123-reg. Current web records:

- `A` `@` → `216.150.1.1` (Vercel)
- `CNAME` `www` → `sensay.uk.` (Vercel redirects it to sensay.uk)
- `CNAME` `app` → Vercel (the app)

Leave the email records (`send`, `resend._domainkey` and any MX or TXT records) alone when changing web records.

sensay.co.uk is also owned and will redirect to sensay.uk; not set up yet.

## Email

Every contact link on the site uses `hello@sensay.uk`. There is no form backend: the contact form opens the visitor's email app with the message pre-filled.

## App subdomain

The marketing site does not link into `app.sensay.uk` before launch. Family plan and founding school calls to action are mailto links to `hello@sensay.uk`.

## Brand

- Logo: `public/sensay-logo.svg` (the traced master logo). Never retype the wordmark in text.
- Font: Nunito throughout.
- Colours: blue `#00AEEF`, red `#ED1C24`, green `#00A651`, yellow `#FDB913`, navy `#0A1F3D`.

## Structure

```
sensay-marketing/
├── index.html          # Entry point + SEO meta tags
├── vite.config.js
├── vercel.json         # Routing + security headers
├── public/
│   ├── favicon.svg
│   └── sensay-logo.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css         # Shared styles, btn, stripe, section utilities
    ├── index.css       # Reset + CSS variables
    ├── components/     # Nav, Hero, Stats, HowItWorks, Pricing, Footer and others
    └── pages/          # About, Our story, For schools, Resources, Press, Contact, legal pages
```
