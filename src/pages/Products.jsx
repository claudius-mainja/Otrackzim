import { motion } from "framer-motion";
import { FiPhone, FiArrowRight, FiTarget, FiGlobe, FiMonitor, FiShield } from "react-icons/fi";
import { BsFuelPump, BsSoundwave, BsSpeedometer2, BsGeoAlt, BsEye, BsBell, BsGear } from "react-icons/bs";
import { TbCamera } from "react-icons/tb";
import { RiPoliceCarLine, RiFingerprint2Line, RiRadarLine } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import WhatsAppSection from "../components/WhatsAppSection";

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

const products = [
  {
    icon: BsFuelPump,
    title: "Advanced Fuel Monitoring",
    desc: "Precision fuel management with drop sensor technology for real-time consumption tracking and theft prevention",
    tag: "Advanced Tech",
    image: "https://www.otrack.co.zw/assets/images/fuel%20monitoring.png",
    features: ["Real-time fuel level monitoring", "Fuel filling & drainage detection", "Consumption analytics (km/l)", "Engine health monitoring", "Fuel abuse prevention"],
  },
  {
    icon: BsSoundwave,
    title: "Sounding Alarms",
    desc: "Advanced security system with immediate notifications and remote siren activation for enhanced vehicle protection",
    tag: "Security",
    image: "https://www.otrack.co.zw/assets/images/sound%20alarms.png",
    features: ["Unauthorized movement alerts", "Door breach detection", "Remote siren activation", "Real-time notifications"],
  },
  {
    icon: BsSpeedometer2,
    title: "Speed Governors (Speed Limiters)",
    desc: "Electronic speed limiting devices ensuring compliance with safety regulations and protecting your drivers",
    tag: "Safety First",
    image: "https://www.otrack.co.zw/assets/images/speed%20limiters.png",
    features: ["Maximum speed limitation", "RPM control", "Speed violation alerts", "Engine protection"],
  },
  {
    icon: TbCamera,
    title: "Mobile Digital Video Recorder (MDVR)",
    desc: "High-quality multi-camera surveillance system for comprehensive interior and exterior vehicle monitoring",
    tag: "HD Recording",
    image: "https://www.otrack.co.zw/assets/images/MDVR.png",
    features: ["Multiple camera support", "Interior & exterior recording", "Accident documentation", "High-quality footage"],
  },
  {
    icon: RiPoliceCarLine,
    title: "Panic Buttons",
    desc: "Emergency response system with 24/7 monitoring center for immediate driver safety assistance",
    tag: "Emergency",
    image: "https://www.otrack.co.zw/assets/images/Panic%20buttons.png",
    features: ["Quick emergency alerts", "Multiple installation options", "24/7 monitoring center", "Immediate response dispatch"],
  },
  {
    icon: RiFingerprint2Line,
    title: "Driver Identification Tags (i-Buttons)",
    desc: "Advanced authentication system using RFID and i-Button technology for driver verification",
    tag: "Smart Auth",
    image: "https://www.otrack.co.zw/assets/images/identity%20tags.png",
    features: ["RFID technology", "i-Button authentication", "Driver performance tracking", "Unauthorized use prevention"],
  },
];

const featuredBoxes = [
  { icon: BsGeoAlt, title: "Real-time Tracking" },
  { icon: BsEye, title: "Driver Monitoring" },
  { icon: BsBell, title: "Geo-fence Alerts" },
  { icon: BsGear, title: "Maintenance" },
];

const floatingIcons = [FiTarget, FiGlobe, FiMonitor, FiShield, RiRadarLine, IoShieldCheckmarkOutline];

export default function Products() {
  return (
    <div className="relative pt-24">
      <HeroBanner />
      <FeaturedSolution />
      <CompleteSolutions />
      <CTASection />
      <WhatsAppSection />
    </div>
  );
}

function HeroBanner() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#F68C2A] to-[#FF6B00]">
      {floatingIcons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10"
          style={{
            top: `${15 + i * 12}%`,
            left: `${5 + i * 15}%`,
            fontSize: `${2 + (i % 3) * 0.5}rem`,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        >
          <Icon />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold mb-6"
          >
            Products & Solutions
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6 text-white">
            Tracking Your Vehicles Across{" "}
            <span className="text-white/80">Southern Africa</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light italic">
            International roaming services available across the entire Southern African region
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#F68C2A] font-bold rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 group"
            >
              Request Demo <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+263779999600"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm"
            >
              <FiPhone className="w-4 h-4" /> Contact Sales
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function FeaturedSolution() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#F68C2A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F68C2A] via-[#FF6B00] to-[#F68C2A] rounded-2xl opacity-40 blur-lg group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
              <div className="relative rounded-2xl overflow-hidden bg-white p-1">
                <div className="rounded-xl overflow-hidden">
                  <motion.img
                    src="https://www.otrack.co.zw/assets/images/vehicle%20tracking.png"
                    alt="Vehicle Tracking System"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = "none" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#F68C2A]/0 group-hover:from-[#F68C2A]/20 transition-all duration-500" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] rounded-full mb-6" />
            <span className="text-[#F68C2A] text-sm font-bold italic uppercase tracking-wider">Featured Solution</span>
            <div className="flex items-center gap-2 mt-2 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-[#F68C2A]/10 text-[#F68C2A] border border-[#F68C2A]/20 font-semibold">
                Advanced GPS Technology
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-6 text-gray-900">
              Vehicle Tracking & <span className="text-[#F68C2A]">Surveillance System</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 font-light italic">
              Our flagship GPS and satellite tracking solution provides comprehensive fleet management capabilities with real-time insights, driver behavior analytics, and proactive maintenance alerts. Experience complete visibility and control over your entire fleet.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {featuredBoxes.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#F68C2A]/30 hover:shadow-lg hover:shadow-[#F68C2A]/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F68C2A]/10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#F68C2A]/20 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[#F68C2A]" />
                  </div>
                  <p className="text-gray-900 font-semibold text-sm">{item.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CompleteSolutions() {
  return (
    <section className="relative py-24 bg-[#231F20] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F68C2A]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#F68C2A]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <div className="w-12 h-1 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] rounded-full mx-auto mb-6" />
          <span className="text-[#F68C2A] text-sm font-bold italic uppercase tracking-wider">Complete Solutions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mt-3 text-white">
            Explore Our <span className="text-[#F68C2A]">Product Range</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light italic">
            Comprehensive suite of security and monitoring solutions designed to protect your assets
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              transition={{ delay: i * 0.05, ...staggerItem.transition }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
              <div className="relative h-full bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#F68C2A]/40 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = "none" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231F20] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#F68C2A]/0 to-[#F68C2A]/0 group-hover:from-[#F68C2A]/20 group-hover:to-transparent transition-all duration-500" />
                  <div className="absolute top-3 left-3">
                    <motion.span
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block text-xs px-3 py-1 rounded-full bg-[#F68C2A] text-white font-semibold"
                    >
                      {product.tag}
                    </motion.span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F68C2A]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#F68C2A]/20 transition-all duration-300">
                    <product.icon className="w-6 h-6 text-[#F68C2A]" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 font-light leading-relaxed">{product.desc}</p>
                  <ul className="space-y-2">
                    {product.features.map((f, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-400 font-light group/feature"
                      >
                        <svg className="w-4 h-4 text-[#F68C2A] shrink-0 group-hover/feature:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,140,42,0.06),transparent_60%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#F68C2A]/5 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <motion.div {...fadeUp}>
          <div className="w-12 h-1 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] rounded-full mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-6 text-gray-900">
            Interested in a <span className="text-[#F68C2A]">Specific Solution?</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto font-light italic">
            Contact our team for a personalized consultation and discover the right solution for your fleet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#F68C2A]/30 transition-all duration-300 group"
            >
              Get Pricing <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+263779999600"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-xl hover:border-[#F68C2A] hover:text-[#F68C2A] transition-all duration-300 group"
            >
              <FiPhone className="w-4 h-4" /> Talk to an Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
