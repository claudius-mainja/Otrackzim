import { motion } from "framer-motion";
import { FiSettings, FiShield, FiBarChart2 } from "react-icons/fi";

const cookieTypes = [
  {
    icon: FiSettings,
    title: "Essential Cookies",
    desc: "Required for the website to function properly. These cannot be disabled.",
    always: true,
    examples: ["Session management", "Security tokens", "Load balancing"],
  },
  {
    icon: FiBarChart2,
    title: "Analytics Cookies",
    desc: "Help us understand how visitors interact with our website by collecting anonymous information.",
    examples: ["Page visits", "Time on site", "Click patterns"],
  },
  {
    icon: FiShield,
    title: "Functional Cookies",
    desc: "Enable enhanced functionality and personalization based on your preferences.",
    examples: ["Remembering settings", "Language preferences", "Region selection"],
  },
];

export default function CookiePreferences() {
  return (
    <div className="relative pt-32 pb-24 bg-slate-100">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">Cookie Preferences</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2026</p>

          <div className="space-y-6 text-otrack-gray font-light">
            <Section>
              Cookies are small text files stored on your device when you visit our website. They help us provide you with a better browsing experience and understand how our website is used. You can manage your preferences below.
            </Section>

            <Section>
              <h2 className="text-xl font-extrabold text-white uppercase mb-4">Manage Cookie Preferences</h2>
              <div className="space-y-4">
                {cookieTypes.map((cookie, i) => (
                  <div key={i} className="glass-card backdrop-blur-md p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-otrack-primary/10 flex items-center justify-center shrink-0">
                          <cookie.icon className="w-5 h-5 text-otrack-primary" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold uppercase">{cookie.title}</h3>
                          <p className="text-sm text-otrack-gray mt-1">{cookie.desc}</p>
                          <ul className="flex flex-wrap gap-2 mt-3">
                            {cookie.examples.map((ex, j) => (
                              <li key={j} className="text-xs px-2 py-1 rounded-full bg-white/5 text-otrack-gray">
                                {ex}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {cookie.always ? (
                        <span className="text-xs px-3 py-1 rounded-full bg-otrack-primary/10 text-otrack-primary shrink-0">Always Active</span>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer shrink-0">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-otrack-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="What Are Cookies?">
              Cookies are small text files stored on your browser or device by websites you visit. They are widely used to make websites work more efficiently and provide information to website owners. Cookies can be "persistent" or "session" cookies.
            </Section>

            <Section title="How We Use Cookies">
              We use cookies for the following purposes:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Essential:</strong> To enable core website functionality and security</li>
                <li><strong>Analytics:</strong> To analyze website traffic and user behavior to improve our services</li>
                <li><strong>Functional:</strong> To remember your preferences and provide personalized features</li>
              </ul>
            </Section>

            <Section title="Third-Party Cookies">
              We may also use third-party services such as Google Analytics that set their own cookies. These third-party cookies are governed by the respective privacy policies of these services.
            </Section>

            <Section title="Managing Cookies">
              You can control and manage cookies in several ways:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the cookie preference tool above to enable/disable non-essential cookies</li>
                <li>Configure your browser settings to block or delete cookies</li>
                <li>Use your browser's incognito/private browsing mode</li>
                <li>Install browser extensions that manage cookie preferences</li>
              </ul>
              <p className="mt-2">Please note that disabling certain cookies may affect the functionality of our website.</p>
            </Section>

            <Section title="Updates to This Policy">
              We may update our Cookie Preferences from time to time. Any changes will be posted on this page with an updated revision date.
            </Section>

            <Section title="Contact Us">
              If you have questions about our use of cookies, please contact us:
              <div className="glass-card p-6 mt-2 space-y-2">
                <p><strong>O'Track Global</strong></p>
                <p>51 Van Praagh Avenue Milton Park, Harare, Zimbabwe</p>
                <p>Email: info@otrack.co.zw</p>
              </div>
            </Section>

            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-otrack-primary to-otrack-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-otrack-primary/25 transition-all">
                Save Preferences
              </button>
              <button className="px-6 py-3 glass-card backdrop-blur-md text-white font-semibold rounded-lg hover:border-otrack-primary/30 hover:shadow-sm transition-all">
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border-b border-white/5 pb-6 last:border-0">
      {title && <h2 className="text-xl font-extrabold text-gray-900 uppercase mb-3">{title}</h2>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
