import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f26c0d",        // Burnt Orange
        accent: "#6d28d9",         // Deep Purple
        "background-dark": "#181411",    // Near Black
        "card-dark": "#27201b",    // Dark Card Background
        "card-header": "#1e1915",  // Card Header Background (slightly lighter than background-dark)
        "card-graphite": "#392f28", // Dark Graphite
        "border-dark": "#392f28",  // Border color
        "text-secondary": "#baa89c", // Beige/Gray for secondary text
        "text-muted": "#6B7280",   // Steel Gray
        "background-light": "#F8F7F5", // Off White
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"], // Headlines
        body: ["Noto Sans", "sans-serif"],        // Body text
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      boxShadow: {
        "primary-glow": "0 0 40px -10px rgba(242, 108, 13, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
