/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", "Inter", "sans-serif"]
      },
      colors: {
        background: "hsl(229 52% 6%)",
        surface: "hsl(232 56% 12%)",
        primary: "hsl(191 87% 55%)",
        secondary: "hsl(267 83% 67%)",
        accent: "hsl(154 70% 60%)"
      },
      boxShadow: {
        glow: "0 0 25px rgba(56, 189, 248, 0.35)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(168, 85, 247, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.12) 1px, transparent 1px)"
      },
      animation: {
        "slow-pulse": "slow-pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite"
      },
      keyframes: {
        "slow-pulse": {
          "0%, 100%": { opacity: 0.9 },
          "50%": { opacity: 0.4 }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        }
      }
    }
  },
  plugins: []
};
