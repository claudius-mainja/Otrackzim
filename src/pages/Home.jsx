import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiPhone, FiArrowRight, FiShield, FiAward, FiCheckCircle, FiGlobe, FiSettings, FiHeadphones, FiClock } from "react-icons/fi";
import { BsFuelPump, BsSoundwave, BsSpeedometer2 } from "react-icons/bs";
import { TbRadar, TbCamera } from "react-icons/tb";
import { RiPoliceCarLine, RiFingerprint2Line, RiCarLine } from "react-icons/ri";
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

export default function Home() {
  return (
    <div className="relative">
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
  const particles = [
    { size: 300, x: "10%", y: "20%", duration: 7, delay: 0 },
    { size: 200, x: "80%", y: "60%", duration: 9, delay: 1 },
    { size: 150, x: "50%", y: "10%", duration: 6, delay: 0.5 },
    { size: 250, x: "20%", y: "70%", duration: 8, delay: 2 },
    { size: 100, x: "70%", y: "30%", duration: 5, delay: 1.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-otrack-primary to-otrack-secondary">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 blur-3xl"
          style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6">
              <TbRadar className="w-4 h-4" />
              <span className="font-semibold italic">WELCOME TO O'TRACK GLOBAL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display uppercase leading-tight mb-6 text-white">
              We Are Your Reliable Partner in{" "}
              <br />
              <span className="text-white">Vehicle Tracking,</span>
              <br />
              <span className="text-white">Fleet Management & Beyond</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mb-8 font-light italic">
              Let us enhance efficiency, safety, and security in your transportation operations with our cutting-edge GPS technology, comprehensive fleet management tools, and unparalleled customer service that keeps your business moving forward.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+263779999600"
                className="flex items-center gap-2 px-6 py-3 bg-white text-otrack-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-white/25 transition-all duration-300 hover:scale-105"
              >
                <FiPhone className="w-4 h-4" />
                Get a Quote
              </a>
              <Link
                to="/products"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                Explore Solutions
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-sm" />
              <img
                src="/assets/images/original/heroimage1.png"
                alt="O'Track Global Vehicle Tracking"
                className="w-full h-auto rounded-2xl relative z-0"
              />
              <div className="absolute inset-0 bg-white/[0.08] backdrop-blur-[2px] rounded-2xl z-10 border border-white/20" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
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
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="text-center"
            >
              <stat.icon className="w-10 h-10 text-otrack-primary mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-black text-gray-900">{stat.number}</div>
              <div className="text-sm font-light text-gray-600 mt-1 uppercase tracking-wider">{stat.label}</div>
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
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://www.otrack.co.zw/assets/images/aboutfeature.png"
                alt="O'Track Global About"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-0.5 bg-otrack-primary mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-gray-900 mb-2">
              About O'Track Global
            </h2>
            <p className="text-otrack-primary font-semibold italic mb-6">
              Transforming Fleet Management Through Innovation
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 font-light">
              O'Track Global stands at the forefront of vehicle telematics innovation, delivering cutting-edge solutions that transform how businesses manage their fleets across Southern Africa and beyond. With over 15 years of expertise in GPS tracking and fleet management, we've built a reputation for reliability, innovation, and exceptional customer service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-light">
              Our mission is to enhance efficiency, safety, and security in the transportation industry through advanced technology and personalized support. We understand that every fleet is unique, which is why we offer customizable solutions tailored to meet your specific business needs.
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
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-200/70 border border-slate-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-otrack-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-otrack-primary" />
                  </div>
                  <span className="text-sm font-bold text-gray-800 uppercase tracking-tight">{f.title}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-otrack-primary to-otrack-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-otrack-primary/25 transition-all duration-300 group"
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
      image: "https://www.otrack.co.zw/assets/images/feature1_vehicletracking.png",
      title: "Vehicle Tracking",
      desc: "Our GPS and Satellite tracking system ensures you can monitor the real-time location, speed, and route history of your vehicles. Set geofences, receive movement alerts, and keep your fleet on the right track.",
      highlights: ["Real-time GPS location monitoring", "Route history & playback", "Geofencing & speed alerts"],
    },
    {
      image: "https://www.otrack.co.zw/assets/images/feature1_fuelmonitoring.png",
      title: "Fuel Monitoring",
      desc: "Gain complete visibility into your fuel usage. Our advanced sensors detect fuel levels, track consumption trends, and alert you to unusual activity such as theft or leakage.",
      highlights: ["Real-time fuel level tracking", "Fuel theft detection", "Consumption analytics reports"],
    },
    {
      image: "https://www.otrack.co.zw/assets/images/feature1_security.png",
      title: "Security Systems",
      desc: "Protect your fleet with multi-layered security. Receive instant alerts for unauthorized movement, activate remote immobilization, and ensure driver verification.",
      highlights: ["Real-time security alerts", "Remote immobilization", "Driver identification tags"],
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <div className="w-16 h-0.5 bg-otrack-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-gray-900">
            What We Offer
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-light italic">
            Comprehensive solutions designed to give you complete control and visibility over your fleet
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-white/50">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:to-otrack-primary/5 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 font-light italic">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-otrack-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
          <p className="text-otrack-gray mt-4 max-w-2xl mx-auto font-light italic">
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
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="glass-card backdrop-blur-md p-6 text-center group transition-all duration-300 cursor-default hover:border-otrack-primary/40 hover:shadow-lg hover:shadow-otrack-primary/10"
            >
              <div className="w-12 h-12 rounded-lg bg-otrack-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:bg-otrack-primary/20">
                <product.icon className="w-6 h-6 text-otrack-primary" />
              </div>
              <p className="text-sm font-semibold text-white uppercase tracking-tight">{product.label}</p>
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
          <p className="text-otrack-gray mt-4 max-w-2xl mx-auto font-light italic">
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
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="glass-card backdrop-blur-md p-8 text-center group hover:border-otrack-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-otrack-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-otrack-primary/20">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">{item.title}</h3>
              <p className="text-otrack-gray text-sm leading-relaxed font-light italic">{item.desc}</p>
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
        <motion.div className="relative rounded-2xl overflow-hidden" {...fadeUp}>
          <img
            src="https://www.otrack.co.zw/assets/images/featureimgbt.png"
            alt="O'Track Global Comprehensive Solutions"
            className="w-full h-auto"
            loading="lazy"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-otrack-dark/80 via-otrack-dark/40 to-transparent flex items-center">
            <div className="p-8 sm:p-12 lg:p-16 max-w-xl">
              <div className="w-16 h-0.5 bg-otrack-primary mb-6" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                Comprehensive Fleet Solutions
              </h3>
              <p className="text-otrack-gray text-sm sm:text-base leading-relaxed font-light italic">
                End-to-end vehicle tracking and fleet management technology designed to optimize your operations, reduce costs, and enhance security across your entire fleet.
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
            Ready to Transform Your <span className="gradient-text">Fleet Management?</span>
          </h2>
          <p className="text-lg text-otrack-gray mb-10 max-w-2xl mx-auto font-light italic">
            Join thousands of satisfied customers who trust O'Track Global for their vehicle tracking and fleet management needs.
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

          <div className="flex flex-wrap justify-center gap-6 text-xs font-light italic">
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
