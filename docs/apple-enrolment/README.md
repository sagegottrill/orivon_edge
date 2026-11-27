# Orivon Edge — pages for Apple's reviewer

Two self-contained pages for **orivonedge.com**, written 27 Nov 2026.
No build step, no framework, no dependencies — plain HTML with inline CSS.

| File | Becomes | Use it for |
|---|---|---|
| `privacy.html` | `https://www.orivonedge.com/privacy.html` | The **Privacy Policy URL** in App Store Connect and the enrolment form |
| `contact.html` | `https://www.orivonedge.com/contact.html` | The **Support URL** in App Store Connect |

## Install (2 minutes)

The site is a Vite app deployed on Vercel; anything in its `public/` folder is served
as-is, before the single-page-app rewrite. So:

1. Copy both files into the Orivon Edge site's `public/` folder.
2. Commit and let Vercel deploy (or run `vercel --prod`).
3. Open both URLs and confirm they load as pages, not the 404 screen.

Do **not** name them `privacy` and `contact` without `.html`: those paths are handled
by the app's router, which currently renders its 404 page for them.

## Keep in sync with the app

`privacy.html` names Orivon Edge Ltd as controller and links VisaPaper's own notice at
`visapaper.com/privacy-policy` for app-specific detail. If the VisaPaper policy changes
materially, update both.
