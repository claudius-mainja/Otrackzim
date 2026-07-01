import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookies-accepted", "false");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-gray-900 font-bold uppercase text-sm">Cookie Notice</p>
              <p className="text-gray-500 text-sm mt-1">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-6 py-2 bg-gradient-to-r from-otrack-primary to-otrack-secondary text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-otrack-primary/25 transition-all"
              >
                Accept All
              </button>
              <button onClick={() => setVisible(false)} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
