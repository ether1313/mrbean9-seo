import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6B5344",
          dark: "#4a3a30",
          light: "#8B7355",
        },
        /** Screenshot: chocolate shell */
        "brand-bg": "#2a2119",
        "brand-page": "#2a2119",
        "brand-surface": "#FFFFFF",
        "brand-cream": "#e8d5c4",
        /** Tan / gold accents (app-style UI) */
        "app-tan": "#c9a574",
        "app-tan-dark": "#a68452",
        "app-gold": "#f5e6a8",
        "app-chocolate": "#3d3028",
        "app-panel": "#352a22",
      },
    },
  },
  plugins: [],
} satisfies Config;
