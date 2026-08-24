import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#14231D",
        lime: "#D4FF4F",
        "mint-pale": "#EAF7EC",
        "mint-accent": "#32A563",
        "mint-dark": "#22804C",
        cream: "#FFFFFF",
        background: "#FFFFFF",
        ink: "#14231D",
        "ink-muted": "#5B6B62",
        hairline: "#DDD8CC",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        body: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "var(--font-playfair)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
        playfair: [
          "var(--font-playfair)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },
      borderRadius: {
        card: "14px",
        "card-lg": "20px",
        pill: "999px",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
