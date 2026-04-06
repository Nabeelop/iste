import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lego-red":    "#D4000A",
        "lego-yellow": "#F5C400",
        "lego-blue":   "#0057A8",
        "lego-green":  "#006B3C",
        "lego-dark":   "#111108",
        "lego-cream":  "#F0EDD8",
      },
      fontFamily: {
        bebas:  ["var(--font-bebas)",  "cursive"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      borderColor: {
        "lego-red":    "#D4000A",
        "lego-yellow": "#F5C400",
        "lego-blue":   "#0057A8",
        "lego-green":  "#006B3C",
      },
    },
  },
  plugins: [],
};

export default config;