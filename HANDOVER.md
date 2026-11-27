# Handover — Orivon Edge site, and the VisaPaper / Apple thread

Last updated: 27 November 2026.
Written for whoever picks this up next — human or agent — so nothing has to be
reconstructed from memory or from a chat log.

Two threads live in this repository:

1. **The website** (`orivonedge.com`) — a Vite + React single-page site on Vercel.
   It has just been rebuilt onto a new visual system. Work is *finished and live*
   for the pages listed below, with the open items in §6.
2. **The VisaPaper / Apple enrolment thread** — recorded in `docs/apple-enrolment/`.
   This is about getting a privacy URL and a support URL in front of Apple's
   reviewer, and about a developer-name conflict that has to be settled before a
   Play submission. It is **not finished**. See §7.

---

## 1. What this project is

Orivon Edge is a venture studio and innovation hub in Maiduguri, Nigeria. The
site is the company's public face: who it is, the two training programmes, how to
apply, and the legal/contact pages a reviewer or customer needs.

The site is **not** a product app. The AI tools that used to be in this repo
(North, Deckly, Deep Reveal) were removed in `90812d0`; their pages, routes and
copy are gone by the owner's decision. Do not reintroduce them.

## 2. Current state of the site

Live at **https://www.orivonedge.com** (apex redirects to `www`).

| Route | File | State |
|---|---|---|
| `/` | `src/pages/Home.tsx` | Rebuilt. Hero, About, stats band, partner strip, mission quote, programmes, contact block, footer. |
| `/core-skills-track` | `src/pages/CoreSkillsTrack.tsx` | Rebuilt. Editorial hero, curriculum rows, benefits, apply form, footer. |
| `/corporate-track` | `src/pages/CorporateTrack.tsx` | Rebuilt, same structure as above. |
| `/join-hub` | `src/pages/JoinHub.tsx` | Rebuilt. Split hero + hairline form, ten fields. |
| `/company` | `src/pages/Company.tsx` | Company register block. Restyled type/palette only. |
| `/privacy` | `src/pages/Privacy.tsx` | Long-form policy. Restyled only; copy is owner-reviewed (see §7). |
| `/contact` | `src/pages/Contact.tsx` | Support routing cards. Restyled only. |
| `*` | `src/pages/NotFound.tsx` | 404. |

Stack: React 18 + Vite, TypeScript, Tailwind (with the shadcn theme variables in
`tailwind.config.ts`), react-router. Forms post to Appwrite via `src/lib/appwrite.ts`.

Build: `npm run build` → `dist/`. `npx tsc -p tsconfig.app.json --noEmit` is the
typecheck that matters (the root `tsconfig.json` is references-only).

## 3. How to ship

From this folder:

```bash
npx tsc -p tsconfig.app.json --noEmit    # there is no npm typecheck script
npm run build
npx vercel deploy --prod --yes --token "$(cat "$LOCALAPPDATA/Temp/orivon-vercel.token")"
git push origin HEAD
```

Then verify, because the HTML is CDN-cached for ~20–30 seconds:

```bash
curl -s "https://www.orivonedge.com/?cb=$(date +%s)" | grep -o 'index-[A-Za-z0-9_-]*\.js' | head -1
ls dist/assets | grep '^index-.*\.js'
```

Those two filenames must match, and every route touched should return 200.

Project facts:

- Vercel project `orivon-edge`, team `team_ZqZQAQQkBbRiELxelUznCo6Y`.
- GitHub `sagegottrill/orivon_edge`, branch `master`.
- The deploy token is a **user-supplied secret** in a temp folder. It should be
  rotated by the owner; it is not in the repo and must never be committed.

Local preview (useful for screenshots):

```bash
npx vite preview --port 4173 --host 127.0.0.1
```

Then open with a cache-buster (`?cb=1`) because `index.html` is cached.

## 4. The design system — do not re-invent it

The house style was derived from a craft reference and then applied to every
page. It is intentionally plain: **no shadows, no gradients, no glow, no
blurred orbs, no scale-on-hover, no gradient-filled text.**

- **Ground:** near-black `#0a0a0a` for dark bands, pure white otherwise. Sections
  alternate. Footers are `#0a0a0a` with `border-t border-white/10`.
- **One accent:** blue. `blue-600` on light grounds, `blue-400/500` on dark.
  Nothing else is coloured — logos and photographs are the only other colour.
- **Type:** Inter-ish sans at weight 500 for display. Headings are two lines,
  second line grey (`text-gray-400` / `text-white/45`), sized with clamps:
  `clamp(2rem,4.2vw,3.4rem)` for section heads, `clamp(2.2rem,5vw,3.6rem)` for
  page heroes. Tracking `-0.03em`, leading `1.04`.
- **Body:** 16px lede, 15px paragraphs, `text-gray-600` on white / `text-white/55`
  on black, `max-w-[32rem]`-ish measure.
- **Labels:** `font-mono text-[10px] uppercase tracking-[0.18em]` in
  `gray-400`/`white-35`, written as `// Label` where it introduces a section.
- **Lists:** hairline rows (`border-t`/`border-b` on `gray-200` or `white/10`),
  mono `01` indices, never cards with shadows.
- **Buttons:** pill, `rounded-full`. Primary is black-on-white or white-on-black;
  secondary is a hairline border. The CTA disc is a circle with an arrow that
  rotates −45° on hover.
- **Forms:** underline inputs (no box, no rounded field), mono labels, one pill
  submit. On dark grounds: white pill; on light: black pill.

Shared components: `SiteNav` (variants `light`, `dark`, `hero`; mobile sheet with
inert, Escape, focus return and a Tab trap), `CompanyFooter` (the legal block,
fed by `src/lib/company.ts`), `Hero` (home hero only), `RouteMeta`, `ScrollToTop`.

**Known weakness:** there is no token layer. The scale is repeated as string
literals — 34 `clamp()` calls, 19 `#0a0a0a`, 12 copies of the container padding
`px-5 sm:px-8 lg:px-10`. A change to the heading size is 34 edits. If the design
is going to keep evolving, extracting a handful of primitives (`Section`,
`SectionHead`, `HairlineRow`, `Field`, `PillLink`) is the highest-value refactor
in this repo. It was proposed and not done.

## 5. What happened in this engagement, in order

Oldest first. Every one of these is a commit; `git log` has the detail.

| Commit | What it did |
|---|---|
| `4a4095e` | SEO/UI pass: real og image, per-route metadata, sitemap, fonts. |
| `a93441d` | A real navigation bar with a mobile sheet. |
| `b1eb6d9` | Mobile sheet: inert when closed, Escape to close, animation. |
| `4c884e7` | Hero and About rebuilt on craft rules; hero media cut ~99% (WebP set). |
| `780aa3b` | Per-breakpoint hero preloads; deleted 7.8 MB of source JPEGs. |
| `42d8a21` | Owner's own hero words restored; invented claims removed (Jos, Plateau, "Cohort 2026" clock all deleted). |
| `1437c10` | Scrollspy in the nav. |
| `92196da` | Tab trap in the open sheet. |
| `f0dfd0b` | Partner strip, programmes and contact block onto the system. |
| `4756527` | Real image sizes for the About photo and the logo. |
| `8e11881` | **All six inner pages** onto the system: shared `SiteNav`, one type scale, purple/navy removed, two genuinely broken images fixed (`/imges/12.jpg`, `13.jpg` never existed). |
| `acbebaa` | Track pages: curriculum and benefits rebuilt as hairline rows; apply blocks as split form; footers unified. |
| `56703f9` | JoinHub hero and form rebuilt (blue badge and bordered card gone). |
| `3e2e53d` | Footer rebuilt everywhere: mono labels, hairlines, blue links gone. |
| `b0a4685` | Colour restored: the partner logos were being greyed by a CSS filter; programmes section moved to white with the blue accent. |

## 6. Open items on the site

Not done, in rough priority order:

1. **Submit-success screens** on `/join-hub`, `/core-skills-track`,
   `/corporate-track` still use the old language: their own nav bar, a green tick
   in a circle, and a blue button. This is the last legacy surface on the site.
2. **Two dead anchors in the home footer.** Quick Links has `Services → #services`
   and `Ventures → #ventures`. Neither section exists any more, so both links do
   nothing. Needs a decision from the owner, not a guess.
3. **The hero photograph is black and white in the source file.** Verified against
   the original `1.jpg` in git history (saturation ≈ 0). Not a styling bug. A
   colour hero means a different photograph.
4. **`public/rok.mp4` is 35.8 MB** and plays in the home contact section. It is by
   far the heaviest asset left; transcoding to a smaller H.264 or WebM would cut
   several seconds off a phone load.
5. **Mobile widths were never reviewed** after the restyle. Desktop 1280 was
   checked page by page; small screens were not.
6. **Partner logo alt text**: several are literally `"Partner logo"` because the
   organisation names were never supplied.
7. **Do not test the forms by submitting them.** `submitProgramApplication` and
   `submitCoreSkillsApplication` write real records to Appwrite, which then appear
   in the owner's console. If a test submission is ever made, delete the record
   afterwards, by reference.
8. **No tests.** There is no test suite; verification has been typecheck, build,
   live bundle hash, and screenshots.
9. **Orphaned AI proxy.** `api/ai.ts` (a Vercel function) and `src/lib/ai.ts`
   (its client) are still in the repo from the removed AI products. Nothing
   imports the client. The function needs `INCEPTION_API_KEY` in Vercel's
   environment and returns 500 without it. Either delete both files or keep them
   deliberately — but do not leave them half-forgotten, they are an API surface
   with a paid key behind them.

## 7. The VisaPaper / Apple thread — what is actually recorded

Everything known about this is in `docs/apple-enrolment/`. Reading those two files
is faster than reading this section; the summary:

### 7.1 Why it exists

To satisfy an Apple enrolment / App Store Connect listing, two URLs were needed:
a **Privacy Policy URL** and a **Support URL**. The plan in
`docs/apple-enrolment/README.md` was to ship two dependency-free HTML files into
`public/` so they are served before the SPA rewrite:

| File | Would become | Use |
|---|---|---|
| `privacy.html` | `/privacy.html` | Privacy Policy URL |
| `contact.html` | `/contact.html` | Support URL |

**Status: those two HTML files do not exist in this repo.** They were written in
a previous session and were never committed, and `public/` has no `.html` files.

**But the plan may be obsolete, and that is worth checking before rebuilding
them.** Since then the site gained real routes at `/privacy` and `/contact`
(`90812d0`), which are proper pages with the company's register details, the
contact routes, and the deletion instructions. `https://www.orivonedge.com/privacy`
and `/contact` both return 200. If App Store Connect accepts those URLs, the
`.html` duplicates are unnecessary; if it insists on `.html`, they still need
writing. Decide this first — it changes the work.

### 7.2 The privacy policy itself — signed off except for six answers

`docs/apple-enrolment/CLAIMS-TO-CONFIRM.md` is the audit trail. Four invented
claims were removed or softened, one (cookies/analytics) corrected after checking
the live bundle. Six lines still need the owner's yes/no:

1. **BulkSMS Nigeria** as a sub-processor — that is a *VisaPaper* account. If
   Orivon Edge never sends texts, the line goes.
2. **Payment provider** — says "our payment provider"; the actual one is **Squad**.
   Naming it is better for Apple.
3. **Transfers outside Nigeria** (Vercel, Cloudflare, Resend) — confirm reliance on
   provider terms rather than a separate NDPC filing.
4. **Children: 18+** — a policy stance; keep unless it should be 16+.
5. **"We confirm receipt"** of a privacy request — a promise that means someone
   watches `support@orivonedge.com` daily.
6. **In-app data list** (account, passport page, photograph, supporting documents,
   transaction records) — true of VisaPaper; grows if another app joins.

Verified and not in question: registered office, **RC 9135897**, incorporation
**29 December 2025** — checked against the CAC certificate.

### 7.3 The conflict that must be settled before a Play submission

`visapaper.com/delete-data` states: *"VisaPaper is a trading name of Visa Paper
Travels, Lagos, Nigeria — the developer named on the Play listing."*

If the app is published under **ORIVON EDGE LTD**, that sentence is wrong, and a
reviewer comparing the listing to the app's own page will notice. Either the app
stays with Visa Paper Travels, or that page is updated to name Orivon Edge Ltd as
the developer. **This is a decision only the owner can make.**

### 7.4 Account deletion — the real route, do not re-add an in-app button

Users delete their account by emailing **visa@visapaper.com** with the subject
*Delete my account*, or calling **+234 916 700 2222**. Receipt is confirmed in 2
working days, deletion completed in 30. The policy also links
`visapaper.com/delete-data`. There is **no in-app delete button**, and the policy
was corrected to stop claiming one.

### 7.5 What is NOT recorded anywhere in this repo

I could not verify, and nothing here records:

- whether the Apple Developer Program enrolment was submitted, approved or paid;
- the D-U-N-S number or organisation identifier;
- the emails exchanged with Apple, the CAC, BulkSMS, Squad or Google Workspace;
- the state of App Store Connect or Play Console;
- the VisaPaper app source, its build, or its release status — that lives in its
  own repository, not this one.

If those steps happened over email, they are not in this folder. Treat §7.5 as a
list of things to re-confirm rather than as "nothing was done".

## 8. Company facts — one source of truth

`src/lib/company.ts` feeds the footer, the `/company` page and the privacy
contact block. Change it there, once.

| Field | Value |
|---|---|
| Legal name | ORIVON EDGE LTD |
| RC number | 9135897 |
| Incorporated | 29 December 2025 |
| Type | Private company limited by shares |
| Jurisdiction / law | Nigeria / Companies and Allied Matters Act 2020 |
| Regulator | Corporate Affairs Commission (CAC) |
| Registered office | No. 3 Crescent, Shehu Sanda Kyarimi, Old GRA, Maiduguri, Borno State, Nigeria |
| Phone | +234 814 308 4473 |
| Email | support@orivonedge.com |
| CEO | Daniel — daniel@orivonedge.com |

## 9. Accounts, secrets, and what not to commit

- `.env`, `.env.local` exist locally and are ignored. They were not read during
  this work and their contents are unknown to this document.
- `.vercel/` holds the project link; `.vercelignore` controls what is uploaded.
- The Vercel deploy token is in `%LOCALAPPDATA%\Temp\orivon-vercel.token`, outside
  the repo. **Rotate it** — it has been pasted into a chat.
- No API keys, passwords or tokens belong in `src/`, `public/`, `docs/` or git.

## 10. If this site is being copied into its own repository

Bring: `src/`, `public/`, `docs/`, `api/`, `index.html`, `package.json`,
`package-lock.json`, `tsconfig*.json`, `vite.config.ts`, `tailwind.config.ts`,
`postcss.config.js`, `eslint.config.js`, `components.json`, `vercel.json`,
`.env.example`, `.gitignore`, `README.md`, this file.

Leave behind: `dist/`, `node_modules/`, `.vercel/`, `.env`, `.env.local`.
Then re-link the new repo to the Vercel project, or create a new one, and confirm
the domain before the first deploy.

## 11. If you are picking this up, do these first

1. Read `docs/apple-enrolment/CLAIMS-TO-CONFIRM.md` §3 and answer the six lines.
   That is the shortest path to a publishable policy.
2. Decide the developer name for Play (Visa Paper Travels vs ORIVON EDGE LTD) and
   make `visapaper.com/delete-data` agree with the listing.
3. Confirm whether `/privacy` and `/contact` satisfy Apple, or whether the
   `.html` copies still have to be written.
4. Then the site items: success screens, the two dead footer anchors, `rok.mp4`.
