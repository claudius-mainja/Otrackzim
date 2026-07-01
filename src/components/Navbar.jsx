import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FiPhone, FiDownload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/products", label: "Products & Solutions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.svg"
              alt="O'Track Global"
              className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-semibold transition-colors duration-300 py-2 ${
                  location.pathname === link.path
                    ? "text-otrack-primary"
                    : "text-gray-700 hover:text-otrack-primary"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-otrack-primary rounded-full"
                  />
                )}
              </Link>
            ))}

            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
              <a
                href="tel:+263779999600"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-otrack-primary transition-colors font-medium"
              >
                <FiPhone className="w-4 h-4" />
                <span>+263 779 999 600</span>
              </a>
              <Link
                to="/application"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-otrack-primary to-otrack-secondary text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-otrack-primary/25 transition-all duration-300 hover:scale-105"
              >
                <FiDownload className="w-4 h-4" />
                Download App
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-otrack-primary transition-colors"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-sm font-semibold transition-colors ${
                    location.pathname === link.path
                      ? "text-otrack-primary"
                      : "text-gray-700 hover:text-otrack-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-4">
                <a
                  href="tel:+263779999600"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-otrack-primary transition-colors font-medium"
                >
                  <FiPhone className="w-4 h-4" />
                  +263 779 999 600
                </a>
                <Link
                  to="/application"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-otrack-primary to-otrack-secondary text-white text-sm font-bold rounded-lg transition-all duration-300"
                >
                  <FiDownload className="w-4 h-4" />
                  Download Application
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
