import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-otrack-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="O'Track Global" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-otrack-gray leading-relaxed font-light">
              Your trusted partner in vehicle telematics solutions. Delivering cutting-edge GPS tracking and fleet management across Southern Africa.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/o-track-global/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-otrack-gray hover:text-otrack-primary hover:bg-white/10 transition-all border border-white/5"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://web.facebook.com/OTrackGlobal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-otrack-gray hover:text-otrack-primary hover:bg-white/10 transition-all border border-white/5"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">Home</Link></li>
              <li><Link to="/about" className="text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">About Us</Link></li>
              <li><Link to="/products" className="text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">Products & Solutions</Link></li>
              <li><Link to="/application" className="text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">Download App</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">Terms & Conditions</Link></li>
              <li><Link to="/terms-of-use" className="text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">Terms of Use</Link></li>
              <li><Link to="/cookie-preferences" className="text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">Cookie Preferences</Link></li>
              <li><Link to="/vulnerability-management" className="text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">Vulnerability Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-otrack-primary mt-0.5 shrink-0" />
                <span className="text-sm text-otrack-gray font-light italic">51 Van Praagh Avenue Milton Park, Harare, Zimbabwe</span>
              </li>
              <li>
                <a href="tel:+263779999600" className="flex items-center gap-3 text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">
                  <FiPhone className="w-4 h-4 text-otrack-primary shrink-0" />
                  <span className="font-medium">Operations:</span> +263 779 999 600
                </a>
              </li>
              <li>
                <a href="tel:+263718602892" className="flex items-center gap-3 text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">
                  <FiPhone className="w-4 h-4 text-otrack-primary shrink-0" />
                  <span className="font-medium">Customer Care:</span> +263 718 602 892
                </a>
              </li>
              <li>
                <a href="tel:+263713878924" className="flex items-center gap-3 text-sm text-otrack-gray hover:text-otrack-primary transition-colors font-light">
                  <FiPhone className="w-4 h-4 text-otrack-primary shrink-0" />
                  <span className="font-medium">Accounts:</span> +263 713 878 924
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="w-4 h-4 text-otrack-primary mt-0.5 shrink-0" />
                <span className="text-sm text-otrack-gray font-light italic">info@otrack.co.zw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-otrack-gray font-light">
              &copy; {new Date().getFullYear()} O'Track Global. All rights reserved.
            </p>
            <p className="text-sm text-otrack-gray font-light">
              Powered by{" "}
              <a
                href="https://www.claudius-mainja.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-otrack-primary hover:text-otrack-secondary transition-colors font-semibold"
              >
                Claudius Mainja
              </a>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-otrack-gray font-light italic">
              Have a question? We're here to help. Reach out to us anytime.
            </p>
            <a
              href="https://wa.me/263713878933"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 group"
            >
              <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
