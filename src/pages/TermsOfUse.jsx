import { motion } from "framer-motion";

export default function TermsOfUse() {
  return (
    <div className="relative pt-32 pb-24 bg-gradient-to-br from-otrack-primary to-otrack-secondary">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">Terms of Use</h1>
          <p className="text-otrack-gray mb-8 italic">Last updated: January 2026</p>

          <div className="space-y-6 text-otrack-gray font-light">
            <Section title="1. Website Use">
              This website is provided for informational and commercial purposes related to O'Track Global's vehicle telematics and fleet management services. By accessing this website, you agree to these Terms of Use.
            </Section>

            <Section title="2. Acceptable Use">
              You agree not to:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use this website for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
                <li>Interfere with or disrupt the operation of the website or servers</li>
                <li>Transmit malware, viruses, or any code of a destructive nature</li>
                <li>Scrape, crawl, or use automated means to access or collect data from the website</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Engage in any activity that could damage, disable, or impair the website</li>
              </ul>
            </Section>

            <Section title="3. Account Registration">
              Some features of our website may require account registration. You agree to:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide accurate, current, and complete registration information</li>
                <li>Maintain and update your registration information</li>
                <li>Maintain the security of your password and account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </Section>

            <Section title="4. Content and Intellectual Property">
              All content on this website, including text, graphics, logos, images, software, and design elements, is the property of O'Track Global or its content suppliers and is protected by Zimbabwean and international copyright laws. You may view, download, and print content for personal, non-commercial use only.
            </Section>

            <Section title="5. Third-Party Links">
              Our website may contain links to third-party websites. These links are provided for convenience only. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.
            </Section>

            <Section title="6. Disclaimer">
              This website and its content are provided "as is" without warranties of any kind, either express or implied. O'Track Global does not warrant that the website will be uninterrupted, error-free, secure, or free from viruses or other harmful components.
            </Section>

            <Section title="7. Indemnification">
              You agree to indemnify, defend, and hold harmless O'Track Global, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of the website or violation of these Terms of Use.
            </Section>

            <Section title="8. Governing Law">
              These Terms of Use are governed by the laws of Zimbabwe. Any legal action arising from these terms shall be brought exclusively in the courts of Zimbabwe.
            </Section>

            <Section title="9. Contact">
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
    <div className="border-b border-white/5 pb-6 last:border-0">
      <h2 className="text-xl font-extrabold text-white uppercase mb-3">{title}</h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
