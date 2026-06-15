/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          50:  "#FFFDE7",
          100: "#FFF9C4",
          200: "#FFF59D",
          300: "#FFF176",
          400: "#FFEE58",
          500: "#FFD600",
          600: "#F9C200",
          700: "#F59E0B",
          800: "#B45309",
          900: "#78350F",
        },
        brand: {
          yellow:  "#FFD600",
          black:   "#0A0A0A",
          dark:    "#111111",
          card:    "#1A1A1A",
          border:  "#2A2A2A",
          muted:   "#888888",
          light:   "#CCCCCC",
        },
      },
      fontFamily: {
        sans:    ["'Space Grotesk'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
