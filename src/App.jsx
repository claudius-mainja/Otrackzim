import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import TelematicsParticles from "./components/TelematicsParticles";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Application = lazy(() => import("./pages/Application"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const CookiePreferences = lazy(() => import("./pages/CookiePreferences"));
const VulnerabilityManagement = lazy(() => import("./pages/VulnerabilityManagement"));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-otrack-primary to-otrack-secondary">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/80 animate-pulse font-light italic">Establishing Secure Connection...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <TelematicsParticles />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/application" element={<Application />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/cookie-preferences" element={<CookiePreferences />} />
            <Route path="/vulnerability-management" element={<VulnerabilityManagement />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppChat />
      <CookieConsent />
    </div>
  );
}
