import { motion } from "framer-motion";
import Seo from "../components/Seo";

export default function TermsConditions() {
  return (
    <div className="relative pt-32 pb-24 bg-slate-100">
      <Seo
        title="Terms & Conditions"
        description="O'Track Global Terms & Conditions - Read the terms governing the use of our vehicle tracking and fleet management services across Zimbabwe and Southern Africa."
        keywords="O'Track Global terms, vehicle tracking terms Zimbabwe, fleet management terms, GPS tracking service agreement Zimbabwe"
        path="/terms-conditions"
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2026</p>

          <div className="space-y-6 text-gray-700">
            <Section title="1. Acceptance of Terms">
              By accessing or using the O'Track Global website, products, and services, you agree to be bound by these Terms & Conditions. If you do not agree to all terms, please do not use our services.
            </Section>

            <Section title="2. Service Description">
              O'Track Global provides vehicle telematics solutions including GPS tracking, fleet management, fuel monitoring, and related services. The specific features, capabilities, and limitations of your service are detailed in your service agreement.
            </Section>

            <Section title="3. User Responsibilities">
              As a user of our services, you agree to:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the services in compliance with all applicable Zimbabwean laws and regulations</li>
                <li>Not attempt to circumvent, disable, or interfere with our security systems</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Ensure that your vehicles and devices are properly maintained</li>
              </ul>
            </Section>

            <Section title="4. Service Agreements">
              All services are subject to a separate service agreement that outlines:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Service scope and limitations</li>
                <li>Fees, billing terms, and payment schedules</li>
                <li>Installation and maintenance responsibilities</li>
                <li>Contract duration and termination conditions</li>
                <li>Service level commitments and warranties</li>
                <li>Liability limitations</li>
              </ul>
            </Section>

            <Section title="5. Intellectual Property">
              All content, trademarks, logos, software, and intellectual property on our website and services are owned by O'Track Global or our licensors. You may not reproduce, distribute, or create derivative works without our express written permission.
            </Section>

            <Section title="6. Limitation of Liability">
              O'Track Global shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use or inability to use our services</li>
                <li>Interruption or loss of GPS signal or network connectivity</li>
                <li>Unauthorized access to or alteration of data</li>
                <li>Statements or conduct of any third party</li>
                <li>Any matter beyond our reasonable control including acts of God</li>
              </ul>
            </Section>

            <Section title="7. Warranties">
              We warrant that our services will be provided with reasonable skill and care. However, we do not guarantee uninterrupted service as GPS tracking and telematics systems may be affected by factors beyond our control including satellite coverage, weather conditions, and cellular network availability.
            </Section>

            <Section title="8. Termination">
              Either party may terminate services according to the terms of your service agreement. We reserve the right to suspend or terminate access to our services for violation of these terms without prior notice.
            </Section>

            <Section title="9. Governing Law">
              These Terms & Conditions are governed by and construed in accordance with the laws of Zimbabwe. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Zimbabwe.
            </Section>

            <Section title="10. Changes to Terms">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
            </Section>

            <Section title="11. Contact">
              <div className="glass-card backdrop-blur-md p-6 mt-2 space-y-2">
                <p><strong>O'Track Global</strong></p>
                <p>51 Van Praagh Avenue Milton Park, Harare, Zimbabwe</p>
                <p>Email: info@otrack.co.zw</p>
                <p>Phone: +263 779 999 600</p>
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
    <div className="border-b border-gray-200 pb-6 last:border-0">
      <h2 className="text-xl font-extrabold text-gray-900 uppercase mb-3">{title}</h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
