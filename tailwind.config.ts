import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F0",
        mint: "#7FE0B4",
        "mint-light": "#C7EFDA",
        "mint-dark": "#3FA87A",
        ink: "#14231D",
        "ink-muted": "#5B6B62",
        charcoal: "#0F1512",
        "card-beige": "#EFE9DD",
        hairline: "#DDD8CC",
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        card: "12px",
        "card-lg": "12px",
        pill: "999px",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "hero-pan": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1.05)" },
          "50%": { transform: "translate3d(-2%,-2%,0) scale(1.1)" },
        },
      },
      animation: {
        "hero-pan": "hero-pan 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
