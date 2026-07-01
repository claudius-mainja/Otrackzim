/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        otrack: {
          primary: "#F68C2A",
          secondary: "#FF6B00",
          dark: "#231F20",
          accent: "#F68C2A",
          gray: "#94A3B8",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "glow-orange": "glowOrange 2s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "drift": "drift 8s ease-in-out infinite",
        "radar-ping": "radarPing 2s ease-out infinite",
        "data-flow": "dataFlow 3s linear infinite",
        "signal-pulse": "signalPulse 1.5s ease-in-out infinite",
        "orbit": "orbit 12s linear infinite",
        "orbit-reverse": "orbitReverse 15s linear infinite",
        "vehicle-move": "vehicleMove 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(246, 140, 42, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(246, 140, 42, 0.8)" },
        },
        glowOrange: {
          "0%": { boxShadow: "0 0 10px rgba(246, 140, 42, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(246, 140, 42, 0.6)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, -10px)" },
          "50%": { transform: "translate(-5px, 5px)" },
          "75%": { transform: "translate(8px, -5px)" },
        },
        radarPing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        dataFlow: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        signalPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(60px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(60px) rotate(-360deg)" },
        },
        orbitReverse: {
          "0%": { transform: "rotate(0deg) translateX(40px) rotate(0deg)" },
          "100%": { transform: "rotate(-360deg) translateX(40px) rotate(360deg)" },
        },
        vehicleMove: {
          "0%": { transform: "translateX(0px) translateY(0px)" },
          "25%": { transform: "translateX(30px) translateY(-10px)" },
          "50%": { transform: "translateX(60px) translateY(0px)" },
          "75%": { transform: "translateX(30px) translateY(10px)" },
          "100%": { transform: "translateX(0px) translateY(0px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #231F20 0%, #3a2a1a 50%, #231F20 100%)",
        "accent-gradient": "linear-gradient(135deg, #F68C2A 0%, #FF6B00 100%)",
        "tech-gradient": "linear-gradient(135deg, #F68C2A 0%, #FF6B00 100%)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)",
        "radar-gradient": "radial-gradient(circle, rgba(246,140,42,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
