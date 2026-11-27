import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

/**
 * The site's navigation.
 *
 * Compact bar with the wordmark and four destinations. Below `md` those
 * destinations move into a sheet that opens from the top; the bar keeps the
 * logo and a menu button, so a phone never has to scroll the home page to reach
 * Contact.
 *
 * `variant="dark"` is for the black pages (/company, /privacy, /contact) so the
 * bar doesn't sit white on top of them.
 */

const ITEMS = [
  { label: "About", to: "/#about" },
  { label: "Programmes", to: "/#programmes" },
  { label: "Company", to: "/company" },
  { label: "Contact", to: "/contact" },
];

/** The home-page sections the bar tracks, in document order. */
const SECTION_IDS = ["about", "programmes"];

const SectionLink = ({
  to,
  onNavigate,
  className,
  active,
  children,
}: {
  to: string;
  onNavigate?: () => void;
  className?: string;
  active?: boolean;
  children: React.ReactNode;
}) => {
  const { pathname, hash } = useLocation();
  const [path, anchor] = to.split("#");

  // Already on the target page: scroll to the section rather than remounting it.
  if (path === pathname && anchor) {
    return (
      <a
        href={`#${anchor}`}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", `#${anchor}`);
          }
          onNavigate?.();
        }}
        aria-current={active ? "location" : hash === `#${anchor}` ? "true" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={className}
      onClick={onNavigate}
      aria-current={active ? "location" : undefined}
    >
      {children}
    </Link>
  );
};

const SiteNav = ({ variant = "light" }: { variant?: "light" | "dark" | "hero" }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash, key } = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const wasOpen = useRef(false);

  // Arriving at /#programmes from another page: the section doesn't exist until
  // Home has mounted, so wait a frame, then scroll.
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [hash, pathname, key]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // A closed sheet is still in the DOM (it animates), so without `inert` its
  // links stay in the tab order and a keyboard or screen reader user lands in a
  // menu they cannot see. React 18 has no typed support for the attribute, so it
  // is set on the element directly.
  useEffect(() => {
    const sheet = sheetRef.current;
    if (!sheet) return;
    if (open) sheet.removeAttribute("inert");
    else sheet.setAttribute("inert", "");
  }, [open]);

  // Which section the reader is in.
  //
  // Deliberately a position check on scroll rather than an IntersectionObserver:
  // on a phone two observers can both be "intersecting" while sections slide past
  // the bar, and the entry/exit callbacks then alternate. One measurement per
  // animation frame, against a single line a third of the way down the viewport,
  // can only produce one answer, and React bails out when that answer is unchanged.
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
      }
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // Escape closes it, as it does any dialog.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Closing returns focus to the control that opened it, so focus is never left
  // inside a hidden panel.
  useEffect(() => {
    if (wasOpen.current && !open) {
      menuButtonRef.current?.focus({ preventScroll: true });
    }
    wasOpen.current = open;
  }, [open]);

  // Over the hero the bar is invisible and its text is white; once the page
  // moves, it becomes the same frosted bar used everywhere else.
  useEffect(() => {
    if (variant !== "hero") return;
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const dark = variant === "dark";
  const overMedia = variant === "hero" && !scrolled;
  const bar = overMedia
    ? "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent"
    : dark
      ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md"
      : "fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md transition-colors duration-300";
  const wordmark = dark || overMedia ? "text-white" : "text-gray-900";
  const link = dark
    ? "text-sm font-medium text-gray-300 hover:text-white transition-colors"
    : overMedia
      ? "text-sm font-medium text-white/75 hover:text-white transition-colors"
      : "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors";
  const burger = dark || overMedia
    ? "text-white border-white/25 hover:bg-white/10"
    : "text-gray-900 border-gray-300 hover:bg-gray-100";
  const cta = overMedia
    ? "bg-white text-[#0a0a0a] hover:bg-white/90"
    : "bg-blue-600 text-white hover:bg-blue-700";

  // A hairline under the current section, in the bar's own text colour.
  const activeRule = "relative after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[1.5px] after:rounded-full after:bg-current";
  const activeTone = dark || overMedia ? "text-white" : "text-gray-900";
  const activeClass = `${activeRule} ${activeTone}`;

  const isActive = (to: string) => {
    const [path, anchor] = to.split("#");
    if (anchor) return pathname === "/" && activeSection === anchor;
    return path === pathname;
  };

  return (
    <>
      <header className={bar}>
        <nav
          aria-label="Main"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <Link to="/" className="flex items-center gap-2.5" aria-label="Orivon Edge, home">
            <img src="/logo.png" alt="" className="h-8 w-auto" />
            <span
              className={`text-base font-bold tracking-tight uppercase sm:text-lg ${wordmark}`}
              style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}
            >
              ORIVON <span className="text-blue-600">EDGE</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {ITEMS.map((item) => {
              const active = isActive(item.to);
              return (
                <SectionLink
                  key={item.to}
                  to={item.to}
                  active={active}
                  className={`${link} ${active ? activeClass : ""}`}
                >
                  {item.label}
                </SectionLink>
              );
            })}
            <Link
              to="/join-hub"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${cta}`}
            >
              Join the Hub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border md:hidden ${burger}`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Sheet */}
      <div
        ref={sheetRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 top-0 bg-white shadow-xl transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
            <span className="flex items-center gap-2.5">
              <img src="/logo.png" alt="" className="h-8 w-auto" />
              <span
                className="text-base font-bold uppercase tracking-tight text-gray-900"
                style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}
              >
                ORIVON <span className="text-blue-600">EDGE</span>
              </span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-900 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="px-4 py-3">
            {ITEMS.map((item) => {
              const active = isActive(item.to);
              return (
                <li key={item.to}>
                  <SectionLink
                    to={item.to}
                    active={active}
                    onNavigate={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-gray-100 py-3.5 text-lg font-medium text-gray-900"
                  >
                    <span className="flex items-center gap-2.5">
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />}
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </SectionLink>
                </li>
              );
            })}
            <li className="pt-4">
              <Link
                to="/join-hub"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-base font-semibold text-white"
              >
                Join the Hub
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SiteNav;
