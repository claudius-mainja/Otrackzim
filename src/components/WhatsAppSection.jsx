import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { FiPhone, FiMessageSquare } from "react-icons/fi";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const channels = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    desc: "Instant messaging support",
    href: "https://wa.me/263713878933",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FaFacebookMessenger,
    title: "Messenger",
    desc: "Chat via Facebook",
    href: "https://www.facebook.com/OTrackGlobal",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FiPhone,
    title: "Phone Call",
    desc: "Direct voice support",
    href: "tel:+263718602892",
    color: "from-otrack-primary to-otrack-secondary",
  },
  {
    icon: FiMessageSquare,
    title: "Feedback Form",
    desc: "Send us your feedback",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd6K1t3oJ45d3t5xJZMtLPEoMA48Z4YME1WXLVRFsQyMEnMIw/viewform?usp=publish-editor",
    color: "from-otrack-primary to-otrack-secondary",
  },
];

export default function WhatsAppSection() {
  return (
    <section className="relative z-10 py-24 bg-otrack-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-otrack-primary/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-otrack-primary/10 border border-otrack-primary/20 text-otrack-primary text-sm mb-4 font-medium">
            <FaWhatsapp className="w-4 h-4" />
            <span>Let's Chat via WhatsApp or Calls!</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
            Choose How You'd Like to <span className="gradient-text">Connect With Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {channels.map((channel, i) => (
            <motion.a
              key={i}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card p-6 text-center hover:border-transparent transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <channel.icon className="w-7 h-7 text-otrack-primary" />
                </div>
                <h3 className="text-white font-semibold uppercase mb-1">{channel.title}</h3>
                <p className="text-sm text-otrack-gray font-light">{channel.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
