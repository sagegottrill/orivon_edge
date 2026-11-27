# Privacy policy — claims that need your sign-off

Every factual statement in `privacy.html`, what happened to it, and whether it is safe to publish.
Written 27 Nov 2026.

## 1. The four you flagged

| # | Claim as first drafted | What it says now | Status |
|---|---|---|---|
| 1 | Retention: enquiries deleted after **12 months**, service records and invoices **7 years**, logs **90 days** | Principles only: kept while the purpose lasts, then deleted; accounting records kept **for the period Nigerian company and tax law requires**; logs described as short-lived. Plus: "write to us and we will answer for your own data" | **Invented numbers removed.** No figures left to be wrong. You can add exact periods later, once you decide them |
| 2 | Rights requests answered **within 30 days** | Confirmed on receipt, answered "within 30 days unless unusually complex, in which case we tell you why and when" | **Softened, not removed.** Only keep this if you can actually answer in 30 days |
| 3 | Documents **not used for training third-party models** | Sentence deleted. Now: "We do not sell your personal data. What you send or upload is used to answer you and to deliver the service you asked for — not for advertising" | **Removed.** Your site uses Gemini APIs for deck analysis, so this could not be promised honestly without knowing what is sent |
| 4 | Users delete their account **from inside the VisaPaper app** | Replaced with the real route: email `visa@visapaper.com` (subject *Delete my account*), or call +234 916 700 2222; confirmed in 2 working days, completed in 30; link to `visapaper.com/delete-data` | **Verified.** Read `src/pages/DeleteAccount.tsx` and fetched `/delete-data` (200). There is no in-app delete button — do not re-add the claim |

## 2. Corrected after checking the live site

| Claim | Evidence | Status |
|---|---|---|
| Cookies: only what is needed to work | The bundle imports `@vercel/analytics`; the head loads Google Fonts | **Corrected.** Policy now discloses Vercel Analytics (cookieless) and Google Fonts. No ad or social trackers found (0 hits for gtag, FB, Hotjar, Clarity, PostHog, Mixpanel, Segment) |

## 3. Still needs a yes or no from you

| Claim in the policy | Why it needs you |
|---|---|
| Sub-processors: Vercel, Cloudflare, Resend, **BulkSMS Nigeria**, payment provider, Google Workspace | BulkSMS is a VisaPaper account. If Orivon Edge never sends texts, delete that line |
| Payment provider described in the abstract ("our payment provider") | Name it — Squad — or leave as is. Naming it is better for Apple |
| Transfers outside Nigeria to the EU/US | True in practice (Vercel, Cloudflare, Resend). Confirm you are content to rely on provider terms rather than a separate NDPC filing |
| Children: services for adults, 18+ | A policy stance, not a fact. Keep unless you want 16+ |
| "We confirm receipt" of a privacy request | A promise you have to keep. It means one person watches `support@orivonedge.com` daily |
| In-app data described: account, passport page, photograph, supporting documents, transaction records | True of VisaPaper. If another app joins the account, this list grows with it |
| Registered office, RC 9135897, incorporation 29 Dec 2025 | Verified against the CAC certificate you sent. Nothing to check |

## 4. Conflict to resolve before Play submission (outside this policy)

`visapaper.com/delete-data` says: *"VisaPaper is a trading name of Visa Paper Travels, Lagos, Nigeria — the developer named on the Play listing."*

If the app is published under **ORIVON EDGE LTD**, that sentence is wrong and a reviewer comparing the listing to the app's own page will notice. Either the app stays with Visa Paper Travels, or that page is updated to name Orivon Edge Ltd as the developer. Decide which before the transfer or the upload.

## 5. What to do with this file

Read section 1 and 3, answer the six lines in section 3, and say "approved" — then the policy can go live as it stands. Nothing in it now asserts a number or a capability that the company has not demonstrated.
