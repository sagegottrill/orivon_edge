import { Link } from "react-router-dom";
import { COMPANY } from "../lib/company";

const linkClass =
  "text-white/55 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white";

/**
 * The legal company block that sits in the footer of every page.
 * Reads its values from src/lib/company.ts.
 */
const CompanyFooter = () => {
  return (
    <div className="mt-14 grid gap-x-12 gap-y-8 border-t border-white/10 pt-8 text-[13px] leading-relaxed text-white/55 md:grid-cols-3">
      <div>
        <p className="text-[14px] text-white/80">{COMPANY.legalName}</p>
        <p className="mt-1">RC {COMPANY.rcNumber}</p>
        <p>
          Registered in {COMPANY.jurisdiction} under the {COMPANY.law}
        </p>
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
          <Link to={COMPANY.privacyPage} className={linkClass}>
            Privacy policy
          </Link>
          <Link to={COMPANY.contactPage} className={linkClass}>
            Contact &amp; support
          </Link>
        </p>
      </div>

      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
          Registered office
        </p>
        <p className="mt-3">{COMPANY.address}</p>
      </div>

      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Contact</p>
        <a href={`tel:${COMPANY.phoneHref}`} className={`mt-3 block ${linkClass}`}>
          {COMPANY.phone}
        </a>
        <a href={`mailto:${COMPANY.email}`} className={`block ${linkClass}`}>
          {COMPANY.email}
        </a>
        <Link to={COMPANY.companyPage} className={`mt-1 block ${linkClass}`}>
          Company information
        </Link>
      </div>
    </div>
  );
};

export default CompanyFooter;
