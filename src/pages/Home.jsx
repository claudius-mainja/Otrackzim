import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiArrowRight,
  FiShield,
  FiAward,
  FiCheckCircle,
  FiGlobe,
  FiSettings,
  FiHeadphones,
  FiClock,
} from "react-icons/fi";
import { BsFuelPump, BsSoundwave, BsSpeedometer2 } from "react-icons/bs";
import { TbRadar, TbCamera } from "react-icons/tb";
import { RiPoliceCarLine, RiFingerprint2Line, RiCarLine } from "react-icons/ri";
import WhatsAppSection from "../components/WhatsAppSection";
import TelematicsParticles from "../components/TelematicsParticles";
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

export default function Home() {
  return (
    <div className="relative">
      <Seo
        title="Home"
        description="O'Track Global - Zimbabwe's premier vehicle tracking and fleet management solutions provider. GPS tracking, fuel monitoring, telematics, and security systems for businesses across Southern Africa."
        keywords="vehicle tracking Zimbabwe, fleet management Zimbabwe, GPS tracking Zimbabwe, telematics solutions, vehicle monitoring Zimbabwe, fleet tracking Zimbabwe, O'Track Global, vehicle security Zimbabwe"
        path="/"
      />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <WhatWeOfferSection />
      <ProductsPreviewSection />
      <AdvantageSection />
      <FeatureImageSection />
      <CTASection />
      <WhatsAppSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/original/heroimage1.png"
          alt=""
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,140,42,0.06),transparent_60%)]" />
      </div>
      <div className="absolute inset-0 z-[1]">
        <TelematicsParticles />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-16 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm mb-4">
              <TbRadar className="w-4 h-4" />
              <span className="font-semibold">
                WELCOME TO O'TRACK GLOBAL
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase leading-tight mb-3 text-white">
              We Are Your Reliable Partner in{" "}
              <span className="gradient-text">Vehicle Tracking,</span>
              <br />
              <span className="text-white">Fleet Management & Beyond</span>
            </h1>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl mb-4 font-light">
              Let us enhance efficiency, safety, and security in your
              transportation operations with our cutting-edge GPS technology,
              comprehensive fleet management tools, and unparalleled customer
              service that keeps your business moving forward.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="tel:+263779999600"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-otrack-primary to-otrack-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-otrack-primary/30 transition-all duration-300 hover:scale-105"
              >
                <FiPhone className="w-3.5 h-3.5" />
                Get a Quote
              </a>
              <Link
                to="/products"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-otrack-primary/40 transition-all duration-300 group backdrop-blur-sm"
              >
                Explore Solutions
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="hidden sm:grid grid-cols-3 gap-4 border-t border-white/10 pt-3">
              {[
                { number: "1000+", label: "Vehicles Tracked" },
                { number: "15+", label: "Years Experience" },
                { number: "24/7", label: "Support" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-lg sm:text-xl font-black gradient-text">{stat.number}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-otrack-primary/20 to-otrack-secondary/20 rounded-3xl blur-xl" />
              <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-2xl border border-white/10 p-3 overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping" />
                      <span className="relative rounded-full bg-green-400 w-1.5 h-1.5" />
                    </span>
                    <span className="text-[10px] text-white/50 font-light uppercase tracking-wider">Live</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {["#F68C2A", "#10B981", "#3B82F6"].map((color, i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>

                <div className="relative aspect-square mb-2 rounded-xl bg-black/40 border border-white/[0.06] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TbRadar className="w-20 h-20 text-otrack-primary/10 animate-spin-slow" />
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,140,42,0.08),transparent_60%)]" />
                  {[
                    { top: "18%", left: "28%", delay: "0s" },
                    { top: "55%", left: "72%", delay: "0.6s" },
                    { top: "38%", left: "48%", delay: "1.2s" },
                    { top: "72%", left: "22%", delay: "0.3s" },
                    { top: "25%", left: "78%", delay: "0.9s" },
                    { top: "80%", left: "65%", delay: "1.5s" },
                  ].map((dot, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-otrack-primary shadow-lg shadow-otrack-primary/50"
                      style={{ top: dot.top, left: dot.left }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.8, 0],
                        boxShadow: ["0 0 0px rgba(246,140,42,0)", "0 0 12px rgba(246,140,42,0.6)", "0 0 0px rgba(246,140,42,0)"],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: parseFloat(dot.delay),
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                    <span className="text-[10px] text-white/20 font-mono">SECTOR A</span>
                    <span className="text-[10px] text-white/20 font-mono">RNG: 15KM</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { label: "Active Vehicles", value: "12", color: "text-emerald-400" },
                    { label: "Today's Alerts", value: "3", color: "text-otrack-primary" },
                    { label: "Fuel Saved", value: "8.2L", color: "text-blue-400" },
                    { label: "Route Compl.", value: "94%", color: "text-otrack-secondary" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="bg-black/30 rounded-lg p-1.5 border border-white/[0.06] hover:border-otrack-primary/20 transition-colors"
                    >
                      <div className="text-[8px] text-white/40 font-light uppercase tracking-wider">{item.label}</div>
                      <div className={`text-sm font-black ${item.color}`}>{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[8px] text-white/30 uppercase tracking-[0.2em]">Explore</span>
          <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-10" />
    </section>
  );
}

function TrustBar() {
  const stats = [
    { icon: FiAward, number: "1000+", label: "Vehicles Tracked" },
    { icon: FiClock, number: "15+", label: "Years Experience" },
    { icon: FiCheckCircle, number: "98%", label: "Satisfaction" },
    { icon: FiShield, number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="text-center"
            >
              <stat.icon className="w-10 h-10 text-otrack-primary mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-black text-gray-900">
                {stat.number}
              </div>
              <div className="text-sm font-light text-gray-600 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const features = [
    { icon: FiGlobe, title: "Industry Leaders" },
    { icon: FiSettings, title: "Comprehensive Solutions" },
    { icon: FiShield, title: "Advanced Security" },
    { icon: FiHeadphones, title: "Dedicated Support" },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-otrack-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-otrack-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-otrack-secondary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-otrack-primary/20 shadow-lg shadow-otrack-primary/10">
              <div className="absolute inset-0 bg-gradient-to-t from-otrack-dark/80 via-transparent to-transparent z-10" />
              <div className="absolute top-0 left-0 right-0 z-20 p-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-otrack-primary/20 border border-otrack-primary/30 text-otrack-primary text-sm font-heading font-semibold mb-3">
                  <FiShield className="w-3 h-3" />
                  About Us
                </div>
              </div>
              <img
                src="https://www.otrack.co.zw/assets/images/aboutfeature.png"
                alt="O'Track Global About"
                className="w-full h-auto"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <div className="w-16 h-0.5 bg-otrack-primary mb-3" />
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase tracking-tight text-white">
                  About O'Track Global
                </h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-300 leading-relaxed mb-4 font-body">
              O'Track Global stands at the forefront of vehicle telematics
              innovation, delivering cutting-edge solutions that transform how
              businesses manage their fleets across Southern Africa and beyond.
              With over 15 years of expertise in GPS tracking and fleet
              management, we've built a reputation for reliability, innovation,
              and exceptional customer service.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8 font-body">
              Our mission is to enhance efficiency, safety, and security in the
              transportation industry through advanced technology and
              personalized support. We understand that every fleet is unique,
              which is why we offer customizable solutions tailored to meet your
              specific business needs.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-otrack-primary/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-otrack-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-otrack-primary/20 transition-colors">
                    <f.icon className="w-5 h-5 text-otrack-primary" />
                  </div>
                  <span className="text-sm font-heading font-bold text-white  tracking-tight">
                    {f.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-otrack-primary to-otrack-secondary text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-otrack-primary/25 transition-all duration-300 group"
            >
              Learn More About Us
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhatWeOfferSection() {
  const features = [
    {
      image:
        "https://www.otrack.co.zw/assets/images/feature1_vehicletracking.png",
      title: "Vehicle Tracking",
      desc: "Our GPS and Satellite tracking system ensures you can monitor the real-time location, speed, and route history of your vehicles. Set geofences, receive movement alerts, and keep your fleet on the right track.",
      highlights: [
        "Real-time GPS location monitoring",
        "Route history & playback",
        "Geofencing & speed alerts",
      ],
    },
    {
      image:
        "https://www.otrack.co.zw/assets/images/feature1_fuelmonitoring.png",
      title: "Fuel Monitoring",
      desc: "Gain complete visibility into your fuel usage. Our advanced sensors detect fuel levels, track consumption trends, and alert you to unusual activity such as theft or leakage.",
      highlights: [
        "Real-time fuel level tracking",
        "Fuel theft detection",
        "Consumption analytics reports",
      ],
    },
    {
      image: "https://www.otrack.co.zw/assets/images/feature1_security.png",
      title: "Security Systems",
      desc: "Protect your fleet with multi-layered security. Receive instant alerts for unauthorized movement, activate remote immobilization, and ensure driver verification.",
      highlights: [
        "Real-time security alerts",
        "Remote immobilization",
        "Driver identification tags",
      ],
    },
  ];

  const accentColors = [
    "from-otrack-primary to-orange-400",
    "from-otrack-dark to-gray-700",
    "from-otrack-secondary to-otrack-primary",
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-otrack-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-otrack-secondary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-32 h-32 border border-otrack-primary/10 rounded-full" />
        <div className="absolute bottom-1/4 left-[10%] w-20 h-20 border border-otrack-secondary/10 rounded-full" />
        <svg className="absolute top-0 right-0 w-64 h-64 text-otrack-primary/[0.03]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-20" {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-otrack-primary/10 border border-otrack-primary/20 text-otrack-primary text-sm font-heading font-semibold mb-4">
            <FiCheckCircle className="w-3 h-3" />
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-gray-900">
            What We Offer
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-body">
            Comprehensive solutions designed to give you complete control and
            visibility over your fleet
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[30px] top-0 bottom-0 w-px bg-gradient-to-b from-otrack-primary/30 via-otrack-secondary/20 to-transparent hidden lg:block" />

          {features.map((feature, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative mb-16 lg:mb-24 last:mb-0"
              >
                <div className="hidden lg:flex absolute left-[22px] top-8 z-10 w-[17px] h-[17px] rounded-full bg-white border-4 border-otrack-primary shadow-lg shadow-otrack-primary/20" />

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative group ${!isLeft ? "lg:order-2" : ""}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-lg shadow-gray-200/50">
                      <div className={`absolute inset-0 bg-gradient-to-tr ${accentColors[i]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      <div className="relative aspect-[4/3] p-8 flex items-center justify-center">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColors[i]} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: isLeft ? 5 : -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative ${!isLeft ? "lg:order-1" : ""}`}
                  >
                    <div className="hidden lg:flex items-center gap-3 mb-4">
                      <span className={`text-5xl font-black bg-gradient-to-r ${accentColors[i]} bg-clip-text text-transparent`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className={`h-px flex-1 bg-gradient-to-r ${accentColors[i]}`} />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-tight text-gray-900 mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 font-body">
                      {feature.desc}
                    </p>

                    <div className="space-y-3 mb-8">
                      {feature.highlights.map((h, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.1 + i * 0.15 }}
                          className="flex items-center gap-3"
                        >
                          <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${accentColors[i]} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm text-gray-600 font-body">{h}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      to="/products"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${accentColors[i]} text-white text-sm font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-otrack-primary/25 transition-all duration-300 group`}
                    >
                      Learn More
                      <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductsPreviewSection() {
  const products = [
    { icon: RiCarLine, label: "Vehicle Tracking" },
    { icon: BsFuelPump, label: "Fuel Monitoring" },
    { icon: BsSoundwave, label: "Sounding Alarms" },
    { icon: BsSpeedometer2, label: "Speed Limiters" },
    { icon: TbCamera, label: "MDVR" },
    { icon: RiPoliceCarLine, label: "Panic Buttons" },
    { icon: RiFingerprint2Line, label: "Identity Tags" },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-otrack-dark overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-otrack-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-otrack-secondary/10 rounded-full blur-3xl animate-glow-orange" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <div className="w-16 h-0.5 bg-otrack-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            Our Products
          </h2>
          <p className="text-otrack-gray mt-4 max-w-2xl mx-auto font-light">
            Comprehensive suite of tracking, security, and monitoring solutions
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="glass-card backdrop-blur-md p-6 text-center group transition-all duration-300 cursor-default hover:border-otrack-primary/40 hover:shadow-lg hover:shadow-otrack-primary/10"
            >
              <div className="w-12 h-12 rounded-lg bg-otrack-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:bg-otrack-primary/20">
                <product.icon className="w-6 h-6 text-otrack-primary" />
              </div>
              <p className="text-sm font-semibold text-white uppercase tracking-tight">
                {product.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12" {...fadeUp}>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-otrack-primary to-otrack-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-otrack-primary/25 transition-all duration-300 group"
          >
            View All Products
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function AdvantageSection() {
  const items = [
    {
      icon: "https://www.otrack.co.zw/assets/images/web%20icons_experience.svg",
      title: "Industry Experience",
      desc: "Over 15 years of proven expertise in vehicle telematics solutions across Southern Africa.",
    },
    {
      icon: "https://www.otrack.co.zw/assets/images/web%20icons_innovation.svg",
      title: "Cutting-Edge Innovation",
      desc: "Continuously advancing our technology to stay ahead of industry trends.",
    },
    {
      icon: "https://www.otrack.co.zw/assets/images/web%20icons_24-7.svg",
      title: "24/7 Expert Support",
      desc: "Round-the-clock customer service and technical assistance whenever you need it.",
    },
    {
      icon: "https://www.otrack.co.zw/assets/images/web%20icons_customization.svg",
      title: "Tailored Solutions",
      desc: "Customizable solutions designed to meet your unique business requirements.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-otrack-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-otrack-secondary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <div className="w-16 h-0.5 bg-otrack-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            The O'Track Advantage
          </h2>
          <p className="text-otrack-gray mt-4 max-w-2xl mx-auto font-light">
            Why industry leaders choose us for their fleet management needs
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="glass-card backdrop-blur-md p-8 text-center group hover:border-otrack-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-otrack-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-otrack-primary/20">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <h3 className="text-lg font-bold uppercase text-white  tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-otrack-gray text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureImageSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          {...fadeUp}
        >
          <img
            src="https://www.otrack.co.zw/assets/images/featureimgbt.png"
            alt="O'Track Global Comprehensive Solutions"
            className="w-full h-auto"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-otrack-dark/80 via-otrack-dark/40 to-transparent flex items-center">
            <div className="p-8 sm:p-12 lg:p-16 max-w-xl">
              <div className="w-16 h-0.5 bg-otrack-primary mb-6" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white  tracking-tight mb-4">
                Comprehensive Fleet Solutions
              </h3>
              <p className="text-otrack-gray text-sm sm:text-base leading-relaxed font-light">
                End-to-end vehicle tracking and fleet management technology
                designed to optimize your operations, reduce costs, and enhance
                security across your entire fleet.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-otrack-primary/5 rounded-full blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div {...fadeUp}>
          <div className="w-16 h-0.5 bg-otrack-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white mb-6">
            Ready to Transform Your{" "}
            <span className="gradient-text">Fleet Management?</span>
          </h2>
          <p className="text-lg text-otrack-gray mb-10 max-w-2xl mx-auto font-light">
            Join thousands of satisfied customers who trust O'Track Global for
            their vehicle tracking and fleet management needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="tel:+263779999600"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-otrack-primary to-otrack-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-otrack-primary/25 transition-all duration-300 hover:scale-105"
            >
              <FiPhone className="w-5 h-5" />
              Get Started Today
            </a>
            <Link
              to="/about"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-otrack-primary/30 transition-all duration-300 group"
            >
              Request a Consultation
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-light">
            <span className="flex items-center gap-2 bg-otrack-primary/10 text-otrack-primary border border-otrack-primary/20 px-4 py-2 rounded-full">
              <FiShield className="w-4 h-4" /> Free Consultation
            </span>
            <span className="flex items-center gap-2 bg-otrack-primary/10 text-otrack-primary border border-otrack-primary/20 px-4 py-2 rounded-full">
              <FiAward className="w-4 h-4" /> Expert Installation
            </span>
            <span className="flex items-center gap-2 bg-otrack-primary/10 text-otrack-primary border border-otrack-primary/20 px-4 py-2 rounded-full">
              <FiClock className="w-4 h-4" /> 24/7 Support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
