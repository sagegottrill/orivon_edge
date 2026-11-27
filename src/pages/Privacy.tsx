import { Link } from "react-router-dom";
import SiteNav from "../components/SiteNav";
import { ArrowLeft } from "lucide-react";
import { COMPANY } from "../lib/company";

/**
 * Privacy policy.
 *
 * Every legal detail (name, RC, address, phone, email) reads from
 * src/lib/company.ts so the policy can never disagree with the footer or the
 * /company page.
 *
 * Retention periods, response times and deletion steps are deliberately stated
 * as principles plus one live, checkable route — no invented numbers. See
 * docs/apple-enrolment/CLAIMS-TO-CONFIRM.md before adding any.
 */

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-12 mb-3 text-2xl font-medium text-white">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-6 mb-2 text-lg font-semibold text-white">{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-gray-400 leading-relaxed">{children}</p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-4 space-y-2 text-gray-400 leading-relaxed list-disc pl-6">
    {children}
  </ul>
);

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
  >
    {children}
  </a>
);

const Privacy = () => {
  const supportHref = `mailto:${COMPANY.email}?subject=Privacy%20request`;
  const telHref = `tel:${COMPANY.phoneHref}`;

  return (
    <div className="min-h-screen bg-black pt-16 text-white">
      <SiteNav variant="dark" />

      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
          Legal
        </p>
        <h1 className="text-[clamp(1.8rem,3.6vw,2.6rem)] md:text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium mb-4">Privacy policy</h1>
        <p className="text-gray-500 mb-10">Last updated: 27 November 2026 · Version 1.0</p>

        <P>
          This policy explains what personal data Orivon Edge collects, why we collect
          it, who we share it with, and the choices you have. It covers this website and
          the mobile applications we publish.
        </P>

        <H2>1. Who we are</H2>
        <P>
          The data controller is <strong className="text-white">{COMPANY.legalName}</strong>
          , a {COMPANY.companyType.toLowerCase()} registered in {COMPANY.jurisdiction} (RC{" "}
          {COMPANY.rcNumber}), with its registered office at {COMPANY.address}.
        </P>
        <P>
          We handle personal data in line with the{" "}
          <strong className="text-white">Nigeria Data Protection Act 2023 (NDPA)</strong> and
          the guidance of the Nigeria Data Protection Commission (NDPC).
        </P>
        <div className="my-6 rounded-3xl bg-white/5 border border-white/10 p-6 text-gray-400">
          <p className="mb-2">
            <strong className="text-white">Privacy contact:</strong>{" "}
            <A href={supportHref}>{COMPANY.email}</A> ·{" "}
            <a href={telHref} className="text-blue-400 underline underline-offset-4">
              {COMPANY.phone}
            </a>
          </p>
          <p className="text-sm">
            Write with <em>Privacy</em> in the subject so the request is routed first.
          </p>
        </div>

        <H2>2. What this policy covers</H2>
        <UL>
          <li>
            <strong className="text-white">This website</strong>, orivonedge.com —
            enquiries, training applications, hub membership and partnership requests.
          </li>
          <li>
            <strong className="text-white">Applications we publish</strong> under our
            developer accounts, including the <em>VisaPaper</em> mobile application on
            Google Play and the Apple App Store.
          </li>
        </UL>
        <P>
          Where an application publishes its own detailed notice, that notice applies to
          the data it handles, and this policy applies alongside it. VisaPaper's notice is
          at <A href="https://www.visapaper.com/privacy-policy">visapaper.com/privacy-policy</A>.
        </P>

        <H2>3. Information we collect</H2>

        <H3>3.1 Information you give us</H3>
        <UL>
          <li>
            <strong className="text-white">Contact details</strong> — your name, email
            address, phone number and organisation when you write to us, request a quote or
            apply to a programme.
          </li>
          <li>
            <strong className="text-white">Programme and training details</strong> — the
            track you applied for, your background, portfolio or CV where a programme asks
            for one.
          </li>
          <li>
            <strong className="text-white">Enquiry content</strong> — whatever you choose
            to include in a message.
          </li>
        </UL>

        <H3>3.2 Information collected automatically</H3>
        <UL>
          <li>
            <strong className="text-white">Technical data</strong> — IP address, browser
            and device type, operating system, the pages you visit and the time of your
            visit, held in the server logs of our hosting providers.
          </li>
          <li>
            <strong className="text-white">Cookies and similar storage</strong> —
            strictly necessary cookies only, plus local storage that keeps a form's
            progress. See section 11.
          </li>
          <li>
            <strong className="text-white">Page-view analytics</strong> — a cookieless
            count of visits collected by our host, Vercel Analytics. It does not identify
            you.
          </li>
        </UL>

        <H3>3.3 Information in applications we publish</H3>
        <P>When you use an application we publish, it may ask for:</P>
        <UL>
          <li>
            <strong className="text-white">Account details</strong> — name, email address
            and a password (stored only as a salted hash).
          </li>
          <li>
            <strong className="text-white">Content you upload</strong> — for a visa or
            travel application, a passport data page, a photograph, supporting documents and
            the details printed on them. We treat this as sensitive personal data and
            restrict access to staff who need it to process your request.
          </li>
          <li>
            <strong className="text-white">Transaction records</strong> — the amount,
            status and reference of a payment. Card numbers and bank credentials are entered
            on our payment provider's own page and are never stored by us.
          </li>
          <li>
            <strong className="text-white">Diagnostics</strong> — crash and error reports,
            where the application or the platform provides them.
          </li>
        </UL>

        <H3>3.4 Information from other sources</H3>
        <P>
          We may receive confirmation of a payment from our payment provider, or a delivery
          and error report from our email and messaging providers. We do not buy personal
          data or use data brokers.
        </P>

        <H2>4. Why we use your data</H2>
        <div className="mb-4 overflow-x-auto rounded-3xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-gray-300">
              <tr>
                <th className="p-3 font-semibold">Purpose</th>
                <th className="p-3 font-semibold">Data used</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              {[
                ["Answering an enquiry, quote or partnership request", "Name, email, phone, message"],
                ["Assessing and running a training or incubation application", "Name, contact details, background and portfolio"],
                ["Delivering, tracking and completing a service you ordered through one of our applications", "Account details, uploaded documents, transaction records"],
                ["Taking and confirming payment", "Amount, reference, payment status"],
                ["Service messages — receipts, status updates, documents we need from you", "Name, email, phone"],
                ["Keeping the service secure and working — rate limits, abuse prevention, error diagnosis", "Technical data, logs, IP address"],
                ["Meeting our legal, tax and accounting obligations", "Transaction and invoice records"],
              ].map(([purpose, data]) => (
                <tr key={purpose} className="border-t border-white/10 align-top">
                  <td className="p-3">{purpose}</td>
                  <td className="p-3">{data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          We do not sell your personal data. What you send or upload is used to answer you
          and to deliver the service you asked for — not for advertising.
        </P>

        <H2>5. Our lawful basis</H2>
        <P>
          Under the NDPA we rely on: <strong className="text-white">your consent</strong>{" "}
          (for optional communications, and for sensitive documents you choose to upload);{" "}
          <strong className="text-white">performance of a contract</strong> (delivering a
          service you asked for); <strong className="text-white">compliance with a legal
          obligation</strong> (tax, accounting, lawful requests); and our{" "}
          <strong className="text-white">legitimate interests</strong> (keeping the service
          secure and improving it, balanced against your rights).
        </P>
        <P>
          You can withdraw consent at any time; it does not affect processing that has
          already happened.
        </P>

        <H2>6. Who we share it with</H2>
        <P>
          We share personal data only with providers that help us run the service, and only
          as far as they need it:
        </P>
        <UL>
          <li>
            <strong className="text-white">Hosting and infrastructure</strong> — Vercel
            (this website) and Cloudflare (networking, storage, DNS).
          </li>
          <li>
            <strong className="text-white">Email and messaging</strong> — Resend
            (transactional email) and our SMS provider for text messages.
          </li>
          <li>
            <strong className="text-white">Payments</strong> — our payment provider, which
            processes the card or transfer and returns only a status and reference to us.
          </li>
          <li>
            <strong className="text-white">Business tools</strong> — Google Workspace for
            company email, Google Places for address suggestions as you type, and Google
            Fonts, which serves this website's typefaces.
          </li>
          <li>
            <strong className="text-white">Professional advisers and authorities</strong> —
            where we are legally required to disclose, to establish or defend a legal claim,
            or to protect someone's safety.
          </li>
        </UL>
        <P>
          When a service you ordered is delivered by a partner — an embassy, a visa centre
          or a courier — we share only the information that delivery requires. We never sell
          data to a third party.
        </P>

        <H2>7. Sending data outside Nigeria</H2>
        <P>
          Some of our providers store data outside Nigeria, mainly in the European Union and
          the United States. Where that happens we rely on the transfer conditions in the
          NDPA and on those providers' contractual data-protection terms, which require
          equivalent protection.
        </P>

        <H2>8. How long we keep it</H2>
        <P>
          We keep personal data only for as long as we need it for the reason we collected
          it, then delete it or make it unreadable. We do not keep everything indefinitely.
        </P>
        <UL>
          <li>
            <strong className="text-white">Enquiries that do not lead to work</strong> —
            kept while the conversation is open, then deleted.
          </li>
          <li>
            <strong className="text-white">Records of a service we delivered, and the
            documents behind it</strong> — kept while the service is live, and afterwards
            only for as long as company and tax law requires accounting records.
          </li>
          <li>
            <strong className="text-white">Payment and invoice records</strong> — kept for
            the period Nigerian company and tax law requires, then deleted.
          </li>
          <li>
            <strong className="text-white">Server and error logs</strong> — short-lived,
            kept only to run and secure the service.
          </li>
        </UL>
        <P>
          If you want to know how long a particular record of yours will be kept, write to
          us and we will answer for your own data.
        </P>

        <H2>9. Security</H2>
        <P>
          Data is encrypted in transit (HTTPS), access to the internal console is limited by
          role and password, documents are served only to authorised staff and to you, and
          payment credentials never reach our servers. If a breach affects your personal
          data, we will notify the NDPC and the people affected as the NDPA requires.
        </P>

        <H2>10. Your rights</H2>
        <P>
          You may ask us to: confirm whether we hold your data and give you a copy; correct
          anything wrong; delete it; restrict or object to how we use it; or send you a
          portable copy. You may also withdraw consent, and complain to the{" "}
          <strong className="text-white">Nigeria Data Protection Commission</strong>.
        </P>
        <P>
          Write to <A href={supportHref}>{COMPANY.email}</A> with <em>Privacy</em> in the
          subject. We confirm receipt, then answer as quickly as we can — within 30 days
          unless the request is unusually complex, in which case we tell you why and when to
          expect it. We may ask you to prove your identity first, so that we do not hand your
          data to someone else.
        </P>
        <div className="my-6 rounded-3xl bg-white/5 border border-white/10 p-6 text-gray-400">
          <p>
            <strong className="text-white">
              Deleting your VisaPaper account and data.
            </strong>{" "}
            Write to{" "}
            <A href="mailto:visa@visapaper.com?subject=Delete%20my%20account">
              visa@visapaper.com
            </A>{" "}
            with the subject <em>Delete my account</em>, from the address on the account — or
            call +234 916 700 2222. The request is free, we confirm it within two working
            days, and it is completed within 30 days, removing the account, the application
            record and the uploaded documents. The same steps are published at{" "}
            <A href="https://www.visapaper.com/delete-data">visapaper.com/delete-data</A>.
          </p>
        </div>

        <H2>11. Cookies</H2>
        <P>
          This website sets no advertising or cross-site tracking cookies. What it does use:{" "}
          <strong className="text-white">Vercel Analytics</strong>, a page-view count
          collected by our host without cookies and without identifying you;{" "}
          <strong className="text-white">Google Fonts</strong>, which serves the typefaces
          from Google's servers, so Google sees that request; a session cookie only when you
          sign in to an internal tool; and local storage that keeps a form's progress so a
          reload does not lose it. Your browser lets you block or clear cookies, though a
          sign-in will not work without them.
        </P>

        <H2>12. Children</H2>
        <P>
          Our services are for adults. We do not knowingly collect data from anyone under 18
          without the consent of a parent or guardian. If you believe a child has given us
          data, write to us and we will delete it.
        </P>

        <H2>13. Changes to this policy</H2>
        <P>
          When this policy changes we update the date at the top and, for a material change,
          tell account holders by email. The current version is always at this address.
        </P>

        <H2>14. Contact</H2>
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6 text-gray-400">
          <p className="mb-3">
            <strong className="text-white">{COMPANY.legalName}</strong>
            <br />
            {COMPANY.address}
            <br />
            RC {COMPANY.rcNumber}
          </p>
          <p className="mb-1">
            Email: <A href={`mailto:${COMPANY.email}`}>{COMPANY.email}</A>
          </p>
          <p>
            Phone:{" "}
            <a href={telHref} className="text-blue-400 underline underline-offset-4">
              {COMPANY.phone}
            </a>
          </p>
        </div>
        <P>
          If you are not satisfied with our answer you may complain to the Nigeria Data
          Protection Commission at{" "}
          <A href="https://ndpc.gov.ng">ndpc.gov.ng</A>.
        </P>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm">
          <Link to="/contact" className="text-blue-400 hover:text-blue-300">
            Contact &amp; support
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

export default Privacy;
