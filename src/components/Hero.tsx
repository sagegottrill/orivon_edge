import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * The home hero.
 *
 * Composition is editorial rather than centred: the display headline sits on the
 * bottom-left, a quiet status strip runs along the bottom, and one photograph
 * does the talking. One idea in the first viewport — a headline, a sub, two
 * actions — and nothing else competing for attention.
 *
 * One still, not a carousel: the three photographs on the site were a monochrome
 * portrait, a red-cap close-up and a party scene. Rotating them diluted the
 * first impression and cost 400 KB; the portrait carries the page on its own.
 *
 * Motion: a single entrance sequence (eyebrow → h1 → sub → actions → strip) on
 * one easing curve. Disabled under prefers-reduced-motion; the rest state is
 * fully visible if JS never runs.
 */

const lagosTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

const Hero = () => {
  const [time, setTime] = useState(lagosTime);

  useEffect(() => {
    const id = window.setInterval(() => setTime(lagosTime()), 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-[#0a0a0a]">
      {/* Media plane */}
      <div className="absolute inset-0 -z-10">
        {/* A portrait crop for phones: the landscape frame would zoom into the
            hat. Same photograph, framed for the ratio it is shown in. */}
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/imges/hero-1-portrait-sm.webp 450w, /imges/hero-1-portrait.webp 900w"
            sizes="100vw"
          />
          <img
            src="/imges/hero-1-1920.webp"
            srcSet="/imges/hero-1-960.webp 960w, /imges/hero-1-1280.webp 1280w, /imges/hero-1-1920.webp 1920w"
            sizes="100vw"
            width={1920}
            height={1080}
            alt="An Orivon Edge member directing a shoot on set"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[62%_center]"
          />
        </picture>

        {/* Scrim: dense at the text, lighter at the top but never open enough to
            let white text sit on a bright sky. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.94)_0%,rgba(10,10,10,0.66)_38%,rgba(10,10,10,0.40)_68%,rgba(10,10,10,0.30)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-56 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.55),rgba(10,10,10,0))]" />
      </div>

      {/* Grain — unifies photo and type, kills gradient banding */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-5 pb-8 pt-24 sm:px-8 lg:px-10 lg:pb-10">
        <div className="hero-anim flex-1 pt-2" style={{ animationDelay: "0.12s" }}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/25 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Applications open · Cohort 2026
          </span>
        </div>

        <div className="mt-10 max-w-5xl lg:mt-14">
          <h1
            className="hero-anim text-white"
            style={{
              animationDelay: "0.22s",
              fontSize: "clamp(2.35rem, 7.2vw, 5.75rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              fontWeight: 500,
              textShadow: "0 16px 38px rgba(0,0,0,0.32)",
            }}
          >
            Build the future.
            <br />
            <span className="text-white/55">Ship it from Jos.</span>
          </h1>

          <p
            className="hero-anim mt-7 max-w-[30rem] text-[16px] leading-relaxed text-white/70 sm:text-[17.5px]"
            style={{ animationDelay: "0.34s", textShadow: "0 2px 18px rgba(0,0,0,0.42)" }}
          >
            A youth-led hub training engineers, incubating products and building
            software for organisations across Nigeria — from Plateau State to the world.
          </p>

          <div
            className="hero-anim mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: "0.46s" }}
          >
            <Link
              to="/join-hub"
              className="group inline-flex items-center justify-between gap-4 rounded-full bg-white py-2.5 pl-6 pr-2.5 text-[15px] font-medium text-[#0a0a0a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] sm:justify-start"
            >
              Join the Hub
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a0a0a] text-white transition-transform duration-200 ease-out group-hover:-rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>

            <a
              href="#programmes"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-[15px] font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/[0.12]"
            >
              See the programmes
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Quiet strip: identity, place, live time. */}
        <div
          className="hero-anim mt-12 flex flex-col gap-3 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between"
          style={{ animationDelay: "0.58s" }}
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
            <span>ORIVON EDGE LTD · RC 9135897</span>
            <span className="hidden sm:inline">Jos, Plateau State</span>
            <span className="tabular-nums">Local time {time} WAT</span>
          </div>

          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 sm:inline">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
