# Orivon Edge — website

The public site for **ORIVON EDGE LTD** (RC 9135897), a venture studio and
innovation hub in Maiduguri, Nigeria. Two training programmes, an application
form, and the company, privacy and contact pages.

Live: **https://www.orivonedge.com**

> **Starting work here?** Read [`HANDOVER.md`](./HANDOVER.md) first. It records
> everything done to the site, the design system, the open items, and the
> separate VisaPaper / Apple enrolment thread with the decisions still pending.

## Pages

| Route | What it is |
|---|---|
| `/` | Hero, about, stats, partners, mission, programmes, contact |
| `/core-skills-track` | Programme detail + application form |
| `/corporate-track` | Programme detail + enrolment form |
| `/join-hub` | Innovation-hub application |
| `/company` | Company register details |
| `/privacy` | Privacy policy |
| `/contact` | Support and contact routes |

## Stack

React 18 + Vite, TypeScript, Tailwind CSS with the shadcn theme variables,
react-router. Forms post to Appwrite (`src/lib/appwrite.ts`).

## Run it

```bash
npm install
npm run dev            # local dev server
npx tsc -p tsconfig.app.json --noEmit   # typecheck
npm run build          # → dist/
npx vite preview --port 4173 --host 127.0.0.1
```

## Deploy

The site is a Vercel project (`orivon-edge`). Build, then:

```bash
npx vercel deploy --prod --yes --token "$(cat "$LOCALAPPDATA/Temp/orivon-vercel.token")"
```

Verify the live bundle matches `dist/` afterwards (the HTML is CDN-cached for
~20–30 s):

```bash
curl -s "https://www.orivonedge.com/?cb=$(date +%s)" | grep -o 'index-[A-Za-z0-9_-]*\.js' | head -1
ls dist/assets | grep '^index-.*\.js'
```

## Layout

```
src/
├── components/     SiteNav, Hero, CompanyFooter, RouteMeta, ScrollToTop, ui/
├── lib/            company.ts (the legal details), appwrite.ts
├── pages/          one file per route
└── index.css       globals, marquee keyframes, motion guards
public/             images, partner logos, og image, sitemap, robots
api/                one Vercel function (api/ai.ts) — currently unused, see HANDOVER §6
docs/
├── apple-enrolment/  the Apple privacy/support page thread and its audit trail
└── ...
HANDOVER.md         project state and open items — read this
```

## Conventions

- The design system is hairlines, mono labels, one blue accent, near-black
  `#0a0a0a`, no shadows or gradients. It is described in `HANDOVER.md` §4 —
  follow it rather than inventing a new one.
- **Copy is the owner's.** Do not invent locations, dates, claims or numbers. If a
  sentence needs a fact, ask.
- Legal details come from `src/lib/company.ts` only. Never hard-code them in a page.

## Contact

support@orivonedge.com · +234 814 308 4473
