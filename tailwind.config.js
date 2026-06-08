/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"General Sans"', '"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0A0A0A",
        night: "#050506",
        royal: "#2563EB",
        violet: "#8B5CF6",
        mist: "#F4F6FA",
      },
      boxShadow: {
        glass: "0 20px 70px rgba(0, 0, 0, 0.35)",
        glow: "0 0 45px rgba(37, 99, 235, 0.24)",
        violet: "0 0 42px rgba(139, 92, 246, 0.24)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.4", transform: "scaleX(0.95)" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseLine: "pulseLine 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
