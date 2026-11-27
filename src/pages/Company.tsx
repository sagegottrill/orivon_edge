import { Link } from "react-router-dom";
import SiteNav from "../components/SiteNav";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  Globe,
  Hash,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { COMPANY } from "../lib/company";

const details = [
  { label: "Legal name", value: COMPANY.legalName },
  { label: "Registration number", value: `RC ${COMPANY.rcNumber}` },
  { label: "Date incorporated", value: COMPANY.incorporated },
  { label: "Company type", value: COMPANY.companyType },
  { label: "Jurisdiction", value: COMPANY.jurisdiction },
  { label: "Governing law", value: COMPANY.law },
  { label: "Regulator", value: COMPANY.regulator },
];

const Company = () => {
  return (
    <div className="min-h-screen bg-black pt-16 text-white">
      <SiteNav variant="dark" />

      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">
          Company information
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {COMPANY.legalName}
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          Orivon Edge is the trading name of {COMPANY.legalName}, a{" "}
          {COMPANY.companyType.toLowerCase()} registered in{" "}
          {COMPANY.jurisdiction} under the {COMPANY.law}. We work in technology
          training, startup incubation, custom software development and digital
          consulting.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {details.map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                {item.label}
              </p>
              <p className="text-white font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-bold">Registered office</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">{COMPANY.address}</p>
            <p className="text-sm text-gray-500 mt-3">
              This is also our postal address for legal and official
              correspondence.
            </p>
          </div>
        </div>

        <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <UserRound className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-bold">Leadership</h2>
          </div>
          <p className="text-white font-medium">{COMPANY.ceoName}</p>
          <p className="text-sm text-gray-400 mb-3">{COMPANY.ceoTitle}</p>
          <a
            href={`mailto:${COMPANY.ceoEmail}`}
            className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-gray-500" />
            {COMPANY.ceoEmail}
          </a>
        </div>

        <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-bold">Contact us</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-gray-500" />
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-gray-500" />
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.websiteUrl}
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4 text-gray-500" />
              {COMPANY.website}
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            For quotes, partnerships and support, email us and we will reply
            within one business day.
          </p>
        </div>

        <div className="mt-6 p-6 rounded-2xl border border-white/10 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-sm text-gray-400 leading-relaxed">
            {COMPANY.legalName} is registered with the {COMPANY.regulator} under
            registration number RC {COMPANY.rcNumber} and incorporated on{" "}
            {COMPANY.incorporated}. Company details can be verified on the CAC
            public search.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-500">
          <span className="inline-flex items-center gap-2">
            <Hash className="w-4 h-4" /> RC {COMPANY.rcNumber}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="w-4 h-4" /> Incorporated{" "}
            {COMPANY.incorporated}
          </span>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 {COMPANY.displayName}. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Company;
