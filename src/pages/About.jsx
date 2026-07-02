import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiEye, FiLock, FiCpu, FiUsers, FiTool, FiHeadphones, FiBarChart2 } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbRadar } from "react-icons/tb";
import { Link } from "react-router-dom";
import WhatsAppSection from "../components/WhatsAppSection";
import TelematicsParticles from "../components/TelematicsParticles";
import Seo from "../components/Seo";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const fadeRight = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const fadeLeft = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
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

const cardHover = {
  whileHover: { scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function About() {
  return (
    <div className="relative pt-24">
      <Seo
        title="About Us"
        description="Learn about O'Track Global - Zimbabwe's leading vehicle telematics and fleet management company. 15+ years of expertise in GPS tracking, fuel monitoring, and fleet security across Southern Africa."
        keywords="about O'Track Global, vehicle tracking company Zimbabwe, fleet management company Zimbabwe, telematics company Zimbabwe, GPS tracking company, O'Track Global team"
        path="/about"
        ogType="article"
      />
      <HeroBanner />
      <WhoWeAre />
      <FeatureSection />
      <MissionSection />
      <CoreValues />
      <TechInnovation />
      <CTASection />
      <WhatsAppSection />
    </div>
  );
}

function HeroBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/assets/images/original/heroabout.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-otrack-primary/85 to-otrack-secondary/85" />
      </div>
      <div className="absolute inset-0 z-[1]">
        <TelematicsParticles />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6">
            <TbRadar className="w-4 h-4" />
            <span className="font-semibold">About O'Track Global</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6 text-white">
            Driving Innovation in <span className="text-white/80">Vehicle Telematics</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light">
            Leading the way in vehicle telematics and fleet management solutions across Southern Africa
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/careers" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#F68C2A] font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Our Team <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 group">
              Contact Us <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeRight} className="relative">
            <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-[#F68C2A] via-[#FF6B00] to-[#F68C2A]">
              <div className="rounded-xl overflow-hidden bg-white">
                <img src="https://www.otrack.co.zw/assets/images/abouthero.png" alt="O'Track Global Team" className="w-full h-auto" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeLeft}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-[#F68C2A]/20 text-[#F68C2A] text-sm mb-4 font-semibold">
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-gray-900 mt-4 mb-6">
              O'Track Global stands at the forefront of vehicle telematics innovation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 font-light">
              With years of expertise in Vehicle Telematics and fleet management, we've built a reputation for reliability, innovation, and exceptional customer service across Southern Africa and beyond.
            </p>
            <p className="text-gray-700 leading-relaxed font-light">
              Our team of dedicated professionals works tirelessly to ensure that every client receives personalized attention and solutions tailored to their unique operational needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  const features = [
    { icon: FiUsers, title: "Expert Team", desc: "Skilled professionals with deep industry knowledge dedicated to your fleet success." },
    { icon: FiTool, title: "Advanced Technology", desc: "State-of-the-art GPS and telematics systems for precise vehicle tracking and data analytics." },
    { icon: FiHeadphones, title: "24/7 Support", desc: "Round-the-clock technical assistance and customer service whenever you need it." },
    { icon: FiBarChart2, title: "Data-Driven Insights", desc: "Comprehensive reporting and analytics to optimize fleet performance and reduce costs." },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-gray-900">Why Choose O'Track Global</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-light">We deliver value through expertise, innovation, and unwavering commitment to our clients</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-[#F68C2A]/10 hover:border-[#F68C2A]/20 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F68C2A] to-[#FF6B00] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 font-light">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-24 bg-otrack-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">Our Mission & Vision</h2>
          <p className="text-gray-400 mt-4 font-light">Guiding principles that drive our commitment to excellence</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={staggerItem} {...cardHover} className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F68C2A] to-[#FF6B00]" />
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F68C2A]/20 to-[#FF6B00]/20 flex items-center justify-center mb-5">
              <FiEye className="w-7 h-7 text-[#F68C2A]" />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-3">Our Mission</h3>
            <p className="text-gray-400 font-light mb-6">To provide world-class affordable & reliable GPS and Satellite solutions across southern Africa</p>
            <div className="space-y-3">
              {["Cutting-edge GPS technology", "Affordable pricing models", "24/7 customer support", "Continuous innovation"].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 text-sm text-gray-300 font-light">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F68C2A] to-[#FF6B00] flex items-center justify-center text-white text-xs">&#10003;</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={staggerItem} {...cardHover} className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F68C2A] to-[#FF6B00]" />
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F68C2A]/20 to-[#FF6B00]/20 flex items-center justify-center mb-5">
              <BsGlobe2 className="w-7 h-7 text-[#F68C2A]" />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-3">Our Vision</h3>
            <p className="text-gray-400 font-light mb-6">To be a global business leader in tracking and telematics solutions through Internet of Things</p>
            <div className="space-y-3">
              {["IoT integration", "Global expansion", "Technology leadership", "Strategic partnerships"].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 text-sm text-gray-300 font-light">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F68C2A] to-[#FF6B00] flex items-center justify-center text-white text-xs">&#10003;</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CoreValues() {
  const values = [
    { icon: FiShield, title: "Secure", desc: "Ensuring the safety and security of your assets through advanced tracking and monitoring systems with military-grade encryption." },
    { icon: FiEye, title: "Monitor", desc: "Providing real-time insights and comprehensive monitoring solutions for your fleet operations with actionable intelligence." },
    { icon: FiLock, title: "Protect", desc: "Safeguarding your investments through proactive security measures and immediate response systems with 24/7 vigilant monitoring." },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-gray-900">Our Core Values</h2>
          <p className="text-gray-500 mt-4 font-light">The principles that guide everything we do</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ scale: 1.03, y: -5, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F68C2A]/0 to-[#FF6B00]/0 group-hover:from-[#F68C2A]/5 group-hover:to-[#FF6B00]/5 transition-all duration-300" />
              <div className="relative">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F68C2A]/10 to-[#FF6B00]/10 flex items-center justify-center mx-auto mb-5"
                >
                  <v.icon className="w-8 h-8 text-[#F68C2A]" />
                </motion.div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-gray-900 mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechInnovation() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,140,42,0.08),transparent_60%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F68C2A]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeRight}>
            <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-[#F68C2A]/30 to-[#FF6B00]/30">
              <div className="rounded-xl overflow-hidden bg-black">
                <img src="https://www.otrack.co.zw/assets/images/technologyninnovation.png" alt="Technology and Innovation" className="w-full h-auto" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeLeft}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F68C2A]/10 border border-[#F68C2A]/20 text-[#F68C2A] text-sm mb-4 font-semibold">
              <FiCpu className="w-4 h-4" />
              Technology & Innovation
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#F68C2A] to-[#FF6B00] mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-4 mb-6">
              Harnessing the Power of <span className="text-[#F68C2A]">Cutting-Edge Technology</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 font-light">
              At O'Track Global, we believe in harnessing the power of cutting-edge technology to deliver superior telematics solutions. Our commitment to innovation ensures that our clients always have access to the most advanced tracking and monitoring capabilities.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4 font-light">
              We continuously invest in research and development, staying ahead of industry trends and emerging technologies. From IoT integration to AI-powered analytics, we're building the future of fleet management today.
            </p>
            <p className="text-gray-400 leading-relaxed font-light">
              Our platform is built on robust, scalable infrastructure that grows with your business, ensuring that you're always equipped with the tools you need to succeed in an ever-evolving marketplace.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F68C2A] to-[#FF6B00] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-white/5 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white mb-6">
            Ready to Experience the <span className="text-white/80">O'Track Advantage?</span>
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto font-light">
            Get in touch with our team today and discover how we can transform your fleet operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#F68C2A] font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 group">
              View Products <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
