import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-72 glass-card rounded-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="w-6 h-6 text-white" />
                <div>
                  <p className="text-white font-semibold text-sm">WhatsApp Chat</p>
                  <p className="text-white/70 text-xs">Usually replies within 1 hour</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-otrack-dark">
              <p className="text-sm text-otrack-gray font-light mb-4">
                Hi! How can we help you with your fleet management needs?
              </p>
              <a
                href="https://wa.me/263713878933"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-shadow"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </motion.button>
    </div>
  );
}
