import {
  Container,
  Eyebrow,
  DisplayH1,
  SectionH2,
  Lede,
  Em,
  Section,
} from "@/components/marketing/Sections";

export const metadata = {
  title: "Privacy Policy | OpusRoster",
  description: "How OpusRoster collects, uses, stores, and protects your data.",
};

const LAST_UPDATED = "May 5, 2026";

export default function PrivacyPage() {
  return (
    <main>
      {/* HERO */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>Legal</Eyebrow>
            <DisplayH1>Privacy Policy</DisplayH1>
            <Lede>
              How we collect, use, store, and protect your data — written plainly, without legal theatre. We treat the recruiting data you trust us with as the sensitive information it is.
            </Lede>
            <p className="mt-6 text-sm text-graphite/60">Last updated: {LAST_UPDATED}</p>
          </div>
        </Container>
      </Section>

      {/* BODY */}
      <Section>
        <Container>
          <div className="max-w-3xl prose-content">
            {/* 1. Who we are */}
            <h2 className="text-3xl font-serif text-graphite mt-8 mb-4">1. Who we are</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              OpusRoster ("OpusRoster," "we," "us," or "our") provides recruiting software, including AI-assisted sourcing, candidate management, outreach, and pipeline tools. This Privacy Policy explains how we handle personal information of our customers and the candidates they engage through our platform.
            </p>
            <p className="text-graphite/80 leading-relaxed mb-4">
              For questions about this policy, contact: <a href="mailto:privacy@opusroster.com" className="text-teal underline">privacy@opusroster.com</a>
            </p>

            {/* 2. Scope */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">2. Scope of this policy</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              This policy applies to information collected through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>Our marketing websites (including this site)</li>
              <li>The OpusRoster application and any associated APIs</li>
              <li>Communications you send us by email or other channels</li>
            </ul>
            <p className="text-graphite/80 leading-relaxed mb-4">
              This policy does not cover practices of third parties that we do not own or control, including any external sites you reach through links from our platform.
            </p>

            {/* 3. Information we collect */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">3. Information we collect</h2>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">3.1 Information you provide directly</h3>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li><strong>Account information:</strong> name, email address, organization name, role, password (stored as a salted hash, never in plain text)</li>
              <li><strong>Billing information:</strong> billing address and payment method (processed by our payment processor; we do not store full card numbers)</li>
              <li><strong>Job and candidate data:</strong> job descriptions, candidate names, contact details, resumes, communications, notes, and pipeline activity that you create or import</li>
              <li><strong>Communications:</strong> messages you send to support or feedback channels</li>
            </ul>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">3.2 Information we collect automatically</h3>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li><strong>Usage data:</strong> pages visited, features used, click events, session duration</li>
              <li><strong>Device and browser:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Cookies and similar technologies:</strong> see Section 9</li>
              <li><strong>Audit logs:</strong> every meaningful action within the application is logged with timestamp and actor for security and compliance purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">3.3 Information we obtain about candidates</h3>
            <p className="text-graphite/80 leading-relaxed mb-4">
              When you use our sourcing features, we may retrieve professional profile information about candidates from licensed third-party data providers. This information typically includes name, professional title, company, location, work history, and publicly available contact details. We process this information solely to help you evaluate and engage candidates for your roles.
            </p>

            {/* 4. How we use information */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">4. How we use information</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Score, rank, and match candidates to roles using our AI agents (with full audit trail and explainable outputs)</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send transactional and service-related communications</li>
              <li>Detect, prevent, and address fraud, abuse, and security incidents</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Send marketing communications you have opted in to (you can unsubscribe at any time)</li>
            </ul>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">4.1 What we do not do with your data</h3>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>We do not sell personal information to third parties</li>
              <li>We do not use your candidate or pipeline data to train AI models — ours, our vendors&apos;, or anyone else&apos;s</li>
              <li>We do not share your data with advertisers</li>
              <li>We do not share customer data between customers</li>
            </ul>

            {/* 5. Legal bases */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">5. Legal bases for processing (EEA/UK)</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              If you are in the European Economic Area or United Kingdom, we rely on the following legal bases to process your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li><strong>Contract:</strong> to provide the services you have signed up for</li>
              <li><strong>Legitimate interests:</strong> to improve our services, prevent fraud, and secure our platform</li>
              <li><strong>Consent:</strong> for marketing communications and certain cookies</li>
              <li><strong>Legal obligation:</strong> to comply with applicable law</li>
            </ul>

            {/* 6. Sharing */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">6. How we share information</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We share personal information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li><strong>Service providers and processors:</strong> we engage trusted vendors to help us deliver our services (categories include: cloud infrastructure and hosting, database and storage, payment processing, email delivery, analytics, customer support, and AI inference). These providers are contractually obligated to process data only on our instructions and to maintain appropriate security.</li>
              <li><strong>With your direction:</strong> when you choose to share information through our integrations or features (for example, when you export data or send candidate outreach).</li>
              <li><strong>Legal and safety:</strong> when required by law, subpoena, or court order, or to protect the rights, property, or safety of OpusRoster, our customers, or the public.</li>
              <li><strong>Business transfers:</strong> in the event of a merger, acquisition, or sale of assets, with notice to affected customers.</li>
            </ul>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We do not sell your personal information for advertising or marketing purposes.
            </p>

            {/* 7. Data retention */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">7. Data retention</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We retain personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li><strong>Active accounts:</strong> we retain account and customer data for the duration of your subscription</li>
              <li><strong>After cancellation:</strong> account data is retained for 30 days to allow account restoration, then permanently deleted</li>
              <li><strong>Audit logs:</strong> retained for at least 12 months for security and compliance purposes</li>
              <li><strong>Legal holds:</strong> data subject to legal hold or required by law is retained for the period required</li>
            </ul>
            <p className="text-graphite/80 leading-relaxed mb-4">
              Customers can export their data at any time in standard CSV or JSON formats from within the application.
            </p>

            {/* 8. Your rights */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">8. Your rights</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li><strong>Access:</strong> request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> request that we correct inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> request that we delete your personal information (subject to legal retention requirements)</li>
              <li><strong>Portability:</strong> request your data in a portable format</li>
              <li><strong>Objection:</strong> object to certain processing of your information</li>
              <li><strong>Withdrawal of consent:</strong> withdraw consent where we rely on it</li>
              <li><strong>Complaint:</strong> file a complaint with a supervisory authority in your jurisdiction</li>
            </ul>
            <p className="text-graphite/80 leading-relaxed mb-4">
              To exercise any of these rights, contact us at <a href="mailto:privacy@opusroster.com" className="text-teal underline">privacy@opusroster.com</a>. We will respond within the timeframes required by applicable law (generally 30 days).
            </p>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">8.1 Candidate rights</h3>
            <p className="text-graphite/80 leading-relaxed mb-4">
              Candidates whose information is processed through OpusRoster by one of our customers may exercise rights directly with that customer (the data controller). We will assist customers in fulfilling these requests. Candidates can also contact us directly at <a href="mailto:privacy@opusroster.com" className="text-teal underline">privacy@opusroster.com</a> to opt out of further outreach.
            </p>

            {/* 9. Cookies */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">9. Cookies and tracking</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We use cookies and similar technologies to operate, analyze, and improve our services. We use:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li><strong>Strictly necessary cookies:</strong> required for the platform to function (authentication, session management)</li>
              <li><strong>Analytics cookies:</strong> help us understand how the service is used so we can improve it</li>
              <li><strong>Preference cookies:</strong> remember your settings (such as language and display preferences)</li>
            </ul>
            <p className="text-graphite/80 leading-relaxed mb-4">
              You can control cookies through your browser settings. Disabling certain cookies may limit functionality.
            </p>

            {/* 10. International transfers */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">10. International data transfers</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              OpusRoster is operated from the United States. Personal information we collect may be processed in the United States. For transfers from the EEA, UK, or Switzerland, we rely on appropriate safeguards including Standard Contractual Clauses where required.
            </p>

            {/* 11. Security */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">11. Security</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We use industry-standard technical and organizational measures to protect personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>Encryption in transit (TLS 1.3) and at rest</li>
              <li>Database-layer access controls and isolation between customers</li>
              <li>Hashed and salted credential storage</li>
              <li>Audit logging on every meaningful action</li>
              <li>Vetted infrastructure providers operating in compliance with industry security standards</li>
              <li>Vendor agreements requiring confidentiality and security commitments</li>
            </ul>
            <p className="text-graphite/80 leading-relaxed mb-4">
              No system is 100% secure. If we become aware of a breach affecting your personal information, we will notify you and the appropriate authorities as required by law.
            </p>

            {/* 12. Children */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">12. Children&apos;s privacy</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              OpusRoster is not directed at children under 16, and we do not knowingly collect personal information from children. If you believe a child has provided us information, contact <a href="mailto:privacy@opusroster.com" className="text-teal underline">privacy@opusroster.com</a> and we will delete it.
            </p>

            {/* 13. California */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">13. California residents (CCPA/CPRA)</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              California residents have additional rights under the California Consumer Privacy Act and California Privacy Rights Act, including the right to know what personal information we collect, the right to delete it, the right to correct inaccurate information, and the right to opt out of the sale or sharing of personal information.
            </p>
            <p className="text-graphite/80 leading-relaxed mb-4">
              <strong>We do not sell or share personal information for cross-context behavioral advertising.</strong> To exercise your rights, contact <a href="mailto:privacy@opusroster.com" className="text-teal underline">privacy@opusroster.com</a>.
            </p>

            {/* 14. Changes */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">14. Changes to this policy</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Material changes will be communicated by email to account holders and posted on this page with an updated effective date. Continued use of the services after changes take effect constitutes acceptance of the updated policy.
            </p>

            {/* 15. Contact */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">15. Contact us</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              For privacy questions, requests, or concerns:
            </p>
            <div className="p-6 rounded-xl bg-cream border border-graphite/10 my-6">
              <p className="text-graphite font-medium">OpusRoster Privacy Team</p>
              <p className="text-graphite/70 mt-2">Email: <a href="mailto:privacy@opusroster.com" className="text-teal underline">privacy@opusroster.com</a></p>
              <p className="text-graphite/70 mt-1">For security reports: <a href="mailto:security@opusroster.com" className="text-teal underline">security@opusroster.com</a></p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
