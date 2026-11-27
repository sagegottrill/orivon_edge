import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "../lib/company";

/**
 * Contact and support page — the Support URL for the App Store and Play listings.
 * Every detail reads from src/lib/company.ts.
 */
const Contact = () => {
  const telHref = `tel:${COMPANY.phoneHref}`;

  const cards = [
    {
      icon: Mail,
      title: "App support",
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}?subject=App%20support`,
      note: "Problems with an app we publish, a bug report, or help with something you ordered. Include your reference number if you have one.",
    },
    {
      icon: Mail,
      title: "Privacy and data requests",
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}?subject=Privacy%20request`,
      note: "Access, correction or deletion of your personal data. Put Privacy in the subject. See the privacy policy for what we hold and why.",
    },
    {
      icon: Mail,
      title: "Training, business and partnerships",
      value: COMPANY.ceoEmail,
      href: `mailto:${COMPANY.ceoEmail}?subject=Enquiry`,
      note: "Applications to the Core Skills Track and the Corporate Track, development and consulting work, sponsorship and partnerships.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            ORIVON <span className="text-blue-600">EDGE</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">
          Support
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact and support</h1>
        <p className="text-gray-400 leading-relaxed max-w-2xl mb-12">
          We answer on working days, usually within one business day. Choose the address
          that fits, so your message reaches the right person.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col"
            >
              <card.icon className="w-5 h-5 text-blue-500 mb-4" />
              <h2 className="font-bold text-white mb-2">{card.title}</h2>
              <a
                href={card.href}
                className="text-sm text-blue-400 underline underline-offset-4 hover:text-blue-300 mb-3 break-all"
              >
                {card.value}
              </a>
              <p className="text-sm text-gray-400 leading-relaxed">{card.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <Phone className="w-5 h-5 text-blue-500 mb-4" />
            <h2 className="font-bold text-white mb-2">Phone</h2>
            <a
              href={telHref}
              className="text-sm text-blue-400 underline underline-offset-4 hover:text-blue-300"
            >
              {COMPANY.phone}
            </a>
            <p className="mt-3 flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
              <Clock className="w-4 h-4 mt-0.5 shrink-0" />
              Monday to Friday, 9:00 to 17:00 (West Africa Time, UTC+1).
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <MapPin className="w-5 h-5 text-blue-500 mb-4" />
            <h2 className="font-bold text-white mb-2">Registered office</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              {COMPANY.legalName}
              <br />
              {COMPANY.address}
              <br />
              RC {COMPANY.rcNumber}
            </p>
            <p className="mt-3 text-xs text-gray-500 leading-relaxed">
              Registered in {COMPANY.jurisdiction} as a{" "}
              {COMPANY.companyType.toLowerCase()} under the {COMPANY.law}.
            </p>
          </div>
        </div>

        <h2 className="mt-14 mb-3 text-2xl font-bold text-white">Before you write</h2>
        <ul className="space-y-2 text-gray-400 leading-relaxed list-disc pl-6">
          <li>
            For a file already in progress, quote the reference you were given — it lets us
            find it immediately.
          </li>
          <li>Never send a password, a full card number or a bank code by email.</li>
          <li>
            Documents are only accepted through the application you applied with, not as
            email attachments, so that they stay protected.
          </li>
        </ul>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm">
          <Link to="/privacy" className="text-blue-400 hover:text-blue-300">
            Privacy policy
          </Link>
          <Link to="/company" className="text-blue-400 hover:text-blue-300">
            Company information
          </Link>
          <Link to="/" className="text-gray-500 hover:text-white">
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Contact;
