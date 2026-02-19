import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      colors: {
        base: {
          bg: "rgb(var(--bg))",
          surface: "rgb(var(--surface))",
          card: "rgb(var(--card))",
          border: "rgb(var(--border))",
          text: "rgb(var(--text))",
          muted: "rgb(var(--muted))",
        },
        brand: {
          50: "rgb(var(--brand-50))",
          100: "rgb(var(--brand-100))",
          200: "rgb(var(--brand-200))",
          300: "rgb(var(--brand-300))",
          400: "rgb(var(--brand-400))",
          500: "rgb(var(--brand-500))",
          600: "rgb(var(--brand-600))",
          700: "rgb(var(--brand-700))",
          800: "rgb(var(--brand-800))",
          900: "rgb(var(--brand-900))",
        },
        accent: {
          50: "rgb(var(--accent-50))",
          100: "rgb(var(--accent-100))",
          200: "rgb(var(--accent-200))",
          300: "rgb(var(--accent-300))",
          400: "rgb(var(--accent-400))",
          500: "rgb(var(--accent-500))",
          600: "rgb(var(--accent-600))",
          700: "rgb(var(--accent-700))",
          800: "rgb(var(--accent-800))",
          900: "rgb(var(--accent-900))",
        },
      },
    },
  },
  plugins: [],
};

export default config;
