import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Per-route title, description and canonical URL.
 *
 * The site is a single-page app, so without this every page shares the one
 * <title> in index.html — a tab, a bookmark and a search result all read the
 * same thing. This sets them from the route map below.
 *
 * Rendered once, inside BrowserRouter, in App.tsx.
 */
const ROUTES: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Orivon Edge — Technology training, incubation and software in Nigeria",
    description:
      "Orivon Edge Ltd builds AI-driven startups and delivers software, training and consulting from Maiduguri, Nigeria.",
  },
  "/core-skills-track": {
    title: "Core Skills Track — AI, cloud, data and cybersecurity training | Orivon Edge",
    description:
      "Hands-on training with real project experience in AI, cloud computing, data science and cybersecurity, for people starting a tech career.",
  },
  "/corporate-track": {
    title: "Corporate Track — professional development and remote work | Orivon Edge",
    description:
      "Professional development for corporate roles and international remote work opportunities, run by Orivon Edge Ltd.",
  },
  "/join-hub": {
    title: "Join the Hub — incubation, mentorship and partnerships | Orivon Edge",
    description:
      "Apply to the Orivon Edge innovation hub for incubation, mentorship, partnerships and venture support.",
  },
  "/company": {
    title: "Company information — ORIVON EDGE LTD, RC 9135897",
    description:
      "Orivon Edge Ltd is a private company limited by shares registered in Nigeria (RC 9135897), with its registered office in Maiduguri, Borno State.",
  },
  "/privacy": {
    title: "Privacy policy — Orivon Edge Ltd",
    description:
      "What personal data Orivon Edge Ltd collects, why, who it is shared with, how long it is kept, and how to ask for a copy or deletion.",
  },
  "/contact": {
    title: "Contact and support — Orivon Edge Ltd",
    description:
      "Support for the apps we publish, privacy and data requests, training and partnership enquiries, and our registered office in Maiduguri.",
  },
};

const SITE = "https://www.orivonedge.com";

function setMeta(selector: string, attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTES[pathname] ?? ROUTES["/"];
    const url = SITE + (pathname === "/" ? "/" : pathname);

    document.title = meta.title;
    setMeta('meta[name="description"]', "name", "description", meta.description);
    setMeta('meta[property="og:title"]', "property", "og:title", meta.title);
    setMeta('meta[property="og:description"]', "property", "og:description", meta.description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [pathname]);

  return null;
};

export default RouteMeta;
