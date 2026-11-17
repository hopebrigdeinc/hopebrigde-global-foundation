import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { navy: "#12366B", gold: "#D6A52B", ivory: "#F7F6F2", charcoal: "#303846" },
    fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"], serif: ["var(--font-playfair)", "Georgia", "serif"] },
    boxShadow: { editorial: "0 18px 60px rgba(18,54,107,.12)" }
  }},
  plugins: []
};
export default config;
