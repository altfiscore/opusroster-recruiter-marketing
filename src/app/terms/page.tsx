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
  title: "Terms of Service | OpusRoster",
  description: "The agreement that governs your use of OpusRoster.",
};

const LAST_UPDATED = "May 5, 2026";

export default function TermsPage() {
  return (
    <main>
      {/* HERO */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>Legal</Eyebrow>
            <DisplayH1>Terms of Service</DisplayH1>
            <Lede>
              The agreement between you and OpusRoster — what we provide, what we ask of you, and what happens if something goes wrong. Written to be read.
            </Lede>
            <p className="mt-6 text-sm text-graphite/60">Last updated: {LAST_UPDATED}</p>
          </div>
        </Container>
      </Section>

      {/* BODY */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            {/* 1. Acceptance */}
            <h2 className="text-3xl font-serif text-graphite mt-8 mb-4">1. Agreement to terms</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your access to and use of the OpusRoster platform, websites, applications, APIs, and related services (collectively, the "Services") provided by OpusRoster ("OpusRoster," "we," "us," or "our").
            </p>
            <p className="text-graphite/80 leading-relaxed mb-4">
              By creating an account, accessing, or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms, and "you" refers to that organization.
            </p>

            {/* 2. The services */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">2. The services</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              OpusRoster provides a recruiting platform that includes AI-assisted candidate sourcing, scoring, outreach, reply management, scheduling, and pipeline management features. Specific features available to you depend on your subscription plan.
            </p>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We may modify, add, remove, or discontinue features from time to time. Material changes that affect existing functionality will be communicated to active subscribers in advance.
            </p>

            {/* 3. Accounts */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">3. Accounts and eligibility</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              You must be at least 18 years old and able to form a binding contract to use the Services. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>Providing accurate and complete account information</li>
              <li>Maintaining the security of your credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Promptly notifying us of any unauthorized access or security breach</li>
            </ul>

            {/* 4. Plans, billing */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">4. Plans, billing, and refunds</h2>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">4.1 Subscription plans</h3>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We offer subscription plans with different features and usage limits. Plan details, pricing, and limits are available on our pricing page and within the application. We may modify plans, pricing, and limits with reasonable notice (typically at least 30 days for material changes).
            </p>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">4.2 Billing</h3>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>Subscriptions are billed in advance on a monthly or annual basis based on the plan you select.</li>
              <li>You authorize us to charge your designated payment method for all fees due.</li>
              <li>If a payment fails, we may suspend or terminate access until payment is received.</li>
              <li>Fees are exclusive of applicable taxes; you are responsible for any taxes that apply to your purchase.</li>
            </ul>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">4.3 Free trial</h3>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We may offer a free trial. Trial accounts include a limited allotment of credits and features as described on our pricing page. Trials automatically expire at the end of the trial period unless you upgrade to a paid plan.
            </p>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">4.4 Cancellation and refunds</h3>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>You may cancel your subscription at any time from within the application.</li>
              <li>Cancellations take effect at the end of the current billing period — you retain access through that period.</li>
              <li>Subscription fees are non-refundable except where required by law or at our sole discretion.</li>
              <li>Annual subscriptions cancelled mid-term are not refunded for the remainder of the term.</li>
            </ul>

            {/* 5. Acceptable use */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">5. Acceptable use</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">You agree not to use the Services to:</p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>Violate any applicable law, regulation, or third-party right</li>
              <li>Send unsolicited bulk communications (spam) outside legitimate recruiting outreach</li>
              <li>Send harassing, threatening, discriminatory, or fraudulent communications</li>
              <li>Make hiring or employment decisions in a manner that violates equal employment opportunity laws</li>
              <li>Reverse-engineer, decompile, or attempt to extract source code from the platform</li>
              <li>Bypass or circumvent rate limits, plan limits, or access controls</li>
              <li>Resell, sublicense, or commercially exploit the Services without our written consent</li>
              <li>Upload malware, viruses, or any code intended to harm the Services or other users</li>
              <li>Train AI models on data extracted from the Services</li>
              <li>Scrape, harvest, or collect data from the Services through automated means not provided by us</li>
            </ul>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We reserve the right to suspend or terminate accounts that violate these acceptable use rules.
            </p>

            {/* 6. Customer data */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">6. Customer data and content</h2>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">6.1 Your data</h3>
            <p className="text-graphite/80 leading-relaxed mb-4">
              You retain ownership of all data and content you upload, create, or import through the Services ("Customer Data"). You grant us a limited license to host, process, transmit, display, and back up Customer Data solely as necessary to provide the Services to you.
            </p>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">6.2 Your responsibilities</h3>
            <p className="text-graphite/80 leading-relaxed mb-4">You represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>You have the right to upload, process, and use all Customer Data through the Services</li>
              <li>Your use of the Services complies with all applicable laws, including data protection, employment, and anti-discrimination laws</li>
              <li>You have provided required notices to and obtained necessary consents from candidates whose information you process through the Services</li>
              <li>You will honor opt-out and data deletion requests from candidates</li>
            </ul>

            <h3 className="text-xl font-semibold text-graphite mt-6 mb-3">6.3 Data processing</h3>
            <p className="text-graphite/80 leading-relaxed mb-4">
              When you process personal data of EEA, UK, or California residents through the Services, we act as a processor on your behalf. A Data Processing Addendum is available upon request to <a href="mailto:legal@opusroster.com" className="text-teal underline">legal@opusroster.com</a>.
            </p>

            {/* 7. AI features */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">7. AI features and limitations</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              The Services include AI-powered features that score candidates, draft outreach communications, classify replies, and assist with other recruiting tasks. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>AI outputs are probabilistic and may contain errors, omissions, or biases despite our best efforts</li>
              <li>You are responsible for reviewing AI-generated content before using or sending it</li>
              <li>You must not rely on AI outputs as the sole basis for hiring or employment decisions</li>
              <li>Hiring decisions remain your responsibility and must comply with applicable laws (including EEO, anti-discrimination, and ADEA)</li>
              <li>We do not use your Customer Data to train AI models — ours, our vendors&apos;, or anyone else&apos;s</li>
            </ul>

            {/* 8. Intellectual property */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">8. Intellectual property</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              The Services, including all software, features, designs, logos, and documentation, are owned by OpusRoster and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use the Services in accordance with these Terms during the term of your subscription.
            </p>
            <p className="text-graphite/80 leading-relaxed mb-4">
              Feedback you provide about the Services is non-confidential, and we may use it without obligation or compensation.
            </p>

            {/* 9. Confidentiality */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">9. Confidentiality</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              Each party agrees to protect the other&apos;s confidential information with the same degree of care it uses for its own confidential information (and at minimum, a reasonable degree of care). Confidential information does not include information that is publicly available, independently developed, or required to be disclosed by law.
            </p>

            {/* 10. Term and termination */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">10. Term and termination</h2>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>These Terms remain in effect while you have an active account or subscription.</li>
              <li>You may terminate at any time by cancelling your subscription and closing your account.</li>
              <li>We may suspend or terminate your account immediately if you materially breach these Terms, fail to pay fees, or use the Services in a way that exposes us or other customers to risk.</li>
              <li>Upon termination, your right to access the Services ends. We will retain your data for 30 days, after which it will be permanently deleted unless we are required by law to retain it longer.</li>
              <li>Sections that by their nature should survive termination (including ownership, indemnification, limitations of liability, and governing law) will survive.</li>
            </ul>

            {/* 11. Disclaimers */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">11. Disclaimers</h2>
            <p className="text-graphite/80 leading-relaxed mb-4 uppercase text-sm tracking-wide">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
            </p>

            {/* 12. Limitation of liability */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">12. Limitation of liability</h2>
            <p className="text-graphite/80 leading-relaxed mb-4 uppercase text-sm tracking-wide">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL OPUSROSTER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUES, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-graphite/80 leading-relaxed mb-4 uppercase text-sm tracking-wide">
              OUR TOTAL CUMULATIVE LIABILITY UNDER THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE FEES YOU PAID US IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR (B) ONE HUNDRED US DOLLARS ($100).
            </p>
            <p className="text-graphite/80 leading-relaxed mb-4 text-sm">
              These limitations apply regardless of the legal theory of liability (contract, tort, statute, or otherwise) and even if a remedy fails of its essential purpose. Some jurisdictions do not allow the exclusion or limitation of certain damages; in those jurisdictions, our liability is limited to the maximum extent permitted by law.
            </p>

            {/* 13. Indemnification */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">13. Indemnification</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold OpusRoster harmless from and against any claims, damages, liabilities, costs, and expenses (including reasonable attorney fees) arising out of or related to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms or applicable law</li>
              <li>Your Customer Data, including any third-party claims that your Customer Data infringes any rights or violates any law</li>
              <li>Your hiring or employment decisions</li>
              <li>Your communications with candidates</li>
            </ul>

            {/* 14. Governing law */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">14. Governing law and dispute resolution</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict-of-laws principles. The parties agree that any dispute arising out of or relating to these Terms or the Services will be resolved exclusively in the state or federal courts located in Delaware, and each party consents to the personal jurisdiction of those courts.
            </p>
            <p className="text-graphite/80 leading-relaxed mb-4">
              Each party irrevocably waives any right to a jury trial. Class actions and class arbitrations are not permitted.
            </p>

            {/* 15. Changes */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">15. Changes to these Terms</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              We may update these Terms from time to time. Material changes will be posted to this page with an updated effective date. We will notify active subscribers by email when material changes are made. Your continued use of the Services after the effective date of updated Terms constitutes acceptance of the changes.
            </p>

            {/* 16. Miscellaneous */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">16. Miscellaneous</h2>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80 mb-4">
              <li><strong>Entire agreement:</strong> these Terms, together with our Privacy Policy and any executed order forms or addenda, constitute the entire agreement between you and OpusRoster.</li>
              <li><strong>Severability:</strong> if any provision is held unenforceable, the remaining provisions remain in effect.</li>
              <li><strong>No waiver:</strong> our failure to enforce any provision is not a waiver of that provision.</li>
              <li><strong>Assignment:</strong> you may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>Force majeure:</strong> neither party is liable for failure to perform due to causes beyond its reasonable control.</li>
              <li><strong>Notices:</strong> notices to OpusRoster must be sent to <a href="mailto:legal@opusroster.com" className="text-teal underline">legal@opusroster.com</a>. Notices to you may be sent to the email address associated with your account.</li>
            </ul>

            {/* 17. Contact */}
            <h2 className="text-3xl font-serif text-graphite mt-12 mb-4">17. Contact</h2>
            <p className="text-graphite/80 leading-relaxed mb-4">
              For questions about these Terms:
            </p>
            <div className="p-6 rounded-xl bg-cream border border-graphite/10 my-6">
              <p className="text-graphite font-medium">OpusRoster Legal Team</p>
              <p className="text-graphite/70 mt-2">Email: <a href="mailto:legal@opusroster.com" className="text-teal underline">legal@opusroster.com</a></p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
