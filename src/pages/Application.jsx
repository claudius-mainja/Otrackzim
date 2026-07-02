import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { FiSmartphone, FiDownload, FiClock, FiShield, FiMapPin, FiBell, FiArrowRight } from "react-icons/fi";
import { TbDeviceMobile, TbRadar } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import Logo3D from "../components/Logo3D";
import WhatsAppSection from "../components/WhatsAppSection";
import Seo from "../components/Seo";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Application() {
  return (
    <div className="relative pt-24">
      <Seo
        title="Mobile App"
        description="Download the O'Track Global mobile app for real-time fleet management. GPS tracking, instant alerts, fuel analytics, and vehicle security controls on iOS and Android."
        keywords="O'Track Global app, fleet management app Zimbabwe, GPS tracking app, vehicle tracking mobile app, download O'Track app, fleet management mobile Zimbabwe"
        path="/application"
      />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <ComingSoonSection />
      <CTASection />
      <WhatsAppSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,140,42,0.08),transparent_60%)]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-otrack-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-otrack-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white text-sm mb-6">
              <TbDeviceMobile className="w-4 h-4" />
              <span className="font-semibold">Mobile Application</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6 text-white">
              Manage Your Fleet From <span className="text-white/80">Anywhere</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
              Download the O'Track Global mobile application and take complete control of your fleet management operations right from your smartphone. Real-time tracking, instant alerts, and comprehensive analytics at your fingertips.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="#" className="flex items-center gap-3 px-6 py-3 bg-white text-[#F68C2A] font-bold rounded-xl hover:shadow-xl hover:shadow-black/20 transition-all group">
                <FaGooglePlay className="w-6 h-6" />
                <span>Download Now</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 px-6 py-3 bg-white/10 text-white rounded-xl border border-white/20 transition-all group hover:bg-white/20">
                <FaApple className="w-6 h-6" />
                <span>Get Early Access</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-64 h-[500px]">
              <div className="absolute inset-0 bg-white/20 rounded-[2rem] blur-3xl" />
              <div className="relative w-full h-full rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden p-4">
                <div className="flex items-center justify-between mb-6">
                  <img src="/logo.svg" alt="" className="h-6 w-auto opacity-80" />
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                    <p className="text-xs text-white font-bold uppercase tracking-tight">Fleet Status</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-white text-sm font-bold">12 Active</span>
                      <span className="text-green-400 text-xs font-light">● Online</span>
                    </div>
                  </div>
                  <div className="h-32 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
                    <TbRadar className="w-8 h-8 text-white animate-pulse-slow" />
                  </div>
                  <div className="space-y-2">
                    {["Vehicle #001 - Downtown", "Vehicle #002 - Highway A1", "Vehicle #003 - Industrial"].map((v, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/10 backdrop-blur-md p-2 rounded-lg">
                        <span className="text-white/70 text-xs font-light">{v}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${i < 2 ? "bg-green-400" : "bg-white"}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: FiMapPin, title: "Real-Time GPS Tracking", desc: "Track all your vehicles on an interactive map with live location updates" },
    { icon: FiBell, title: "Instant Alerts", desc: "Receive push notifications for speeding, geofence violations, and emergencies" },
    { icon: BsGraphUpArrow, title: "Detailed Analytics", desc: "Access comprehensive reports on fuel consumption, driver behavior, and more" },
    { icon: FiClock, title: "Historical Playback", desc: "Review vehicle routes and activities for any past date or time period" },
    { icon: FiShield, title: "Security Controls", desc: "Remote immobilization, panic alerts, and driver identification management" },
    { icon: FiSmartphone, title: "Multi-Device Sync", desc: "Seamlessly sync across all your devices for constant connectivity" },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-gray-900">
            App <span className="bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] bg-clip-text text-transparent">Features & Benefits</span>
          </h2>
          <p className="text-gray-700 font-light mt-4 max-w-2xl mx-auto">
            Everything you need to manage your fleet from the palm of your hand
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#F68C2A]/10 hover:border-[#F68C2A]/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#F68C2A] to-[#FF6B00] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#F68C2A]/30 transition-all">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight mb-2">{f.title}</h3>
              <p className="text-sm text-gray-700 font-light">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="relative py-24 bg-otrack-dark overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-[#F68C2A]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FF6B00]/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-otrack-dark p-8 lg:p-12 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center">
                    <FaGooglePlay className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Google Play Store</h3>
                    <p className="text-sm text-otrack-gray font-light">Download the official O'Track Global app</p>
                  </div>
                </div>
                <p className="text-otrack-gray font-light mb-8">
                  Get the full O'Track Global experience on your Android device. Monitor your fleet, receive real-time alerts, manage drivers, and access comprehensive analytics - all from your smartphone.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: FiMapPin, text: "Live GPS tracking with interactive maps" },
                    { icon: FiBell, text: "Instant push notifications for critical events" },
                    { icon: BsGraphUpArrow, text: "Fuel consumption and driver behavior reports" },
                    { icon: FiShield, text: "Remote vehicle security controls" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F68C2A]/20 to-[#FF6B00]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-[#F68C2A]" />
                      </div>
                      <span className="text-sm text-otrack-gray font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all group"
                >
                  <FaGooglePlay className="w-5 h-5" />
                  <span>Download from Google Play</span>
                  <FiDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-otrack-dark p-8 lg:p-12 rounded-2xl border border-white/10 hover:border-[#F68C2A]/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                    <FaApple className="w-8 h-8 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">iOS App Store</h3>
                    <p className="text-sm text-otrack-gray font-light">Coming soon to iPhone and iPad</p>
                  </div>
                </div>
                <p className="text-otrack-gray font-light mb-8">
                  The O'Track Global iOS application is currently under development. We are working hard to bring the same powerful fleet management experience to Apple devices.
                </p>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center">
                  <FiSmartphone className="w-10 h-10 text-[#F68C2A] mx-auto mb-3" />
                  <p className="text-white font-bold uppercase tracking-tight">iOS App Coming Soon</p>
                  <p className="text-sm text-otrack-gray font-light mt-1">Register your interest to be notified</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComingSoonSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,140,42,0.03),transparent_50%)]" />
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-[#F68C2A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-[#FF6B00]/5 rounded-full blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <motion.div {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F68C2A]/10 border border-[#F68C2A]/20 text-[#F68C2A] text-sm mb-8">
            <TbRadar className="w-4 h-4" />
            <span className="font-semibold">Next-Gen Technology</span>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-gray-900 mb-6">
            OIS Application{" "}
            <span className="bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] bg-clip-text text-transparent animate-pulse">Coming Soon</span>
          </h2>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mb-12">
            Experience the future of fleet intelligence with our upcoming OIS (O'Track Intelligence System) application. AI-powered analytics, predictive maintenance, and next-generation telematics.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: TbRadar, title: "AI Intelligence", desc: "Machine learning-driven predictive analytics for proactive fleet management" },
              { icon: BsGraphUpArrow, title: "Advanced Analytics", desc: "Deep insights into fleet performance, driver behavior, and operational efficiency" },
              { icon: FiShield, title: "Enterprise Security", desc: "Bank-grade encryption and multi-factor authentication for maximum protection" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#F68C2A]/10 hover:border-[#F68C2A]/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F68C2A] to-[#FF6B00] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="bg-gray-50 inline-flex items-center gap-4 px-8 py-4 rounded-xl border border-gray-100">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#F68C2A]"
                  style={{ animation: `pulse 1.5s ease-in-out ${i * 0.3}s infinite` }}
                />
              ))}
            </div>
            <span className="text-gray-700 text-sm font-light">Stay tuned for the launch of OIS Application</span>
          </div>
          <div className="mt-12 max-w-md mx-auto h-[200px]">
            <Logo3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F68C2A] to-[#FF6B00] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div {...fadeUp}>
          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
            Need Help With the Application?
          </h2>
          <p className="text-white/80 font-light mb-8 max-w-xl mx-auto">
            Our support team is ready to assist you with installation, setup, or any questions about the O'Track Global mobile app.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#F68C2A] font-bold rounded-xl hover:shadow-xl hover:shadow-black/20 transition-all"
            >
              Get the App <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
            >
              Learn More <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
