import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="relative pt-32 pb-24 bg-gradient-to-br from-otrack-primary to-otrack-secondary">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-otrack-gray mb-8 italic">Last updated: January 2026</p>

          <div className="max-w-none space-y-6 text-otrack-gray font-light">
            <Section title="1. Introduction">
              O'Track Global ("we," "our," or "us") is committed to protecting the privacy of our clients, partners, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </Section>

            <Section title="2. Information We Collect">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and billing information provided through our contact forms or service agreements.</li>
                <li><strong>Device and Vehicle Data:</strong> GPS location data, vehicle identification numbers (VIN), speed data, fuel consumption data, and driving behavior metrics collected through our telematics devices.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, and browsing behavior on our website.</li>
                <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email, phone, WhatsApp, or other channels.</li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>To provide, maintain, and improve our vehicle tracking and fleet management services</li>
                <li>To process transactions and send related information including confirmations and invoices</li>
                <li>To send technical notices, updates, security alerts, and support messages</li>
                <li>To respond to your comments, questions, and requests</li>
                <li>To monitor and analyze usage trends and improve user experience</li>
                <li>To comply with legal obligations and regulatory requirements in Zimbabwe</li>
                <li>To protect our rights, property, and safety, and those of our clients</li>
              </ul>
            </Section>

            <Section title="4. Legal Basis for Processing (GDPR Compliance)">
              For users within the European Economic Area, we process personal data based on the following legal grounds:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Consent:</strong> Where you have given clear consent for us to process your personal data for specific purposes</li>
                <li><strong>Contractual Necessity:</strong> Where processing is necessary for the performance of a contract with you</li>
                <li><strong>Legal Obligation:</strong> Where we need to comply with a legal or regulatory obligation</li>
                <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests</li>
              </ul>
            </Section>

            <Section title="5. Data Sharing and Disclosure">
              We may share your information in the following circumstances:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>With service providers who perform services on our behalf (e.g., cloud hosting, payment processing)</li>
                <li>To comply with applicable laws, regulations, or legal processes</li>
                <li>To protect against fraud or security threats</li>
                <li>In connection with a business transaction such as a merger or acquisition</li>
                <li>With your consent or at your direction</li>
              </ul>
              <p className="mt-2">We do not sell your personal information to third parties.</p>
            </Section>

            <Section title="6. Data Security">
              We implement appropriate technical and organizational security measures to protect your personal data, including:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Encryption of data in transit and at rest using industry-standard protocols</li>
                <li>Multi-factor authentication for system access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection and privacy</li>
                <li>Access controls and monitoring of data processing activities</li>
              </ul>
            </Section>

            <Section title="7. Data Retention">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Vehicle tracking data is retained according to your service agreement terms and applicable Zimbabwean regulations.
            </Section>

            <Section title="8. Your Rights">
              Under applicable data protection laws, you have the following rights:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data where applicable</li>
                <li><strong>Right to Restrict Processing:</strong> Object to or restrict processing of your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, please contact us at the details provided below.</p>
            </Section>

            <Section title="9. Cookies and Tracking Technologies">
              Our website uses cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can manage your cookie preferences through our Cookie Preferences page. We use:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> To remember your preferences and settings</li>
              </ul>
            </Section>

            <Section title="10. International Data Transfers">
              Your data may be transferred to and processed in countries other than Zimbabwe. We ensure appropriate safeguards are in place through standard contractual clauses and data protection agreements to protect your data in accordance with this Privacy Policy.
            </Section>

            <Section title="11. Zimbabwe Data Protection Compliance">
              In compliance with Zimbabwean data protection principles, we ensure that:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Personal data is collected and processed fairly and lawfully</li>
                <li>Data is collected for specified, explicit, and legitimate purposes</li>
                <li>Data is adequate, relevant, and not excessive for the purposes collected</li>
                <li>Data is accurate and kept up to date</li>
                <li>Data is not kept longer than necessary</li>
                <li>Appropriate security measures are in place to prevent unauthorized access</li>
              </ul>
            </Section>

            <Section title="12. Children's Privacy">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete it.
            </Section>

            <Section title="13. Changes to This Privacy Policy">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </Section>

            <Section title="14. Contact Us">
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <div className="glass-card backdrop-blur-md p-6 mt-4 space-y-2">
                <p><strong>O'Track Global</strong></p>
                <p>51 Van Praagh Avenue Milton Park, Harare, Zimbabwe</p>
                <p>Email: info@otrack.co.zw</p>
                <p>Phone: +263 779 999 600</p>
                <p>Accounts: +263 713 878 924</p>
              </div>
            </Section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border-b border-white/5 pb-6 last:border-0">
      <h2 className="text-xl font-extrabold text-white uppercase mb-3">{title}</h2>
      <div className="text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
