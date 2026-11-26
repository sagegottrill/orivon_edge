import { Link } from "react-router-dom";
import { COMPANY } from "../lib/company";

/**
 * The legal company block that sits in the footer of every page.
 * Reads its values from src/lib/company.ts.
 */
const CompanyFooter = () => {
  return (
    <div className="mt-12 pt-8 border-t border-white/10 grid gap-8 md:grid-cols-3 text-sm text-gray-400 text-left">
      <div className="space-y-1">
        <p className="text-white font-semibold tracking-wide">
          {COMPANY.legalName}
        </p>
        <p>RC {COMPANY.rcNumber}</p>
        <p>
          Registered in {COMPANY.jurisdiction} under the {COMPANY.law}
        </p>
      </div>

      <div className="space-y-1">
        <p className="text-white font-semibold tracking-wide">
          Registered office
        </p>
        <p className="leading-relaxed">{COMPANY.address}</p>
      </div>

      <div className="space-y-1">
        <p className="text-white font-semibold tracking-wide">Contact</p>
        <a
          href={`tel:${COMPANY.phoneHref}`}
          className="block hover:text-white transition-colors"
        >
          {COMPANY.phone}
        </a>
        <a
          href={`mailto:${COMPANY.email}`}
          className="block hover:text-white transition-colors"
        >
          {COMPANY.email}
        </a>
        <Link
          to={COMPANY.companyPage}
          className="inline-block mt-2 underline underline-offset-4 hover:text-white transition-colors"
        >
          Company information
        </Link>
      </div>
    </div>
  );
};

export default CompanyFooter;
