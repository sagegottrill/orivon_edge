import { useEffect, useState } from "react";
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

const SectionLink = ({
  to,
  onNavigate,
  className,
  children,
}: {
  to: string;
  onNavigate?: () => void;
  className?: string;
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
        aria-current={hash === `#${anchor}` ? "true" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className} onClick={onNavigate}>
      {children}
    </Link>
  );
};

const SiteNav = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const [open, setOpen] = useState(false);
  const { pathname, hash, key } = useLocation();

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

  const dark = variant === "dark";
  const bar = dark
    ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md"
    : "fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md";
  const wordmark = dark ? "text-white" : "text-gray-900";
  const link = dark
    ? "text-sm font-medium text-gray-300 hover:text-white transition-colors"
    : "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors";
  const burger = dark
    ? "text-white border-white/20 hover:bg-white/10"
    : "text-gray-900 border-gray-300 hover:bg-gray-100";

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
            {ITEMS.map((item) => (
              <SectionLink key={item.to} to={item.to} className={link}>
                {item.label}
              </SectionLink>
            ))}
            <Link
              to="/join-hub"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Join the Hub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
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
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 top-0 bg-white shadow-xl transition-transform duration-250 ${
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
            {ITEMS.map((item) => (
              <li key={item.to}>
                <SectionLink
                  to={item.to}
                  onNavigate={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-gray-100 py-3.5 text-lg font-medium text-gray-900"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4 text-gray-400" />
                </SectionLink>
              </li>
            ))}
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
