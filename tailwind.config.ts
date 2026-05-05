import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        teal: "#3AB0A2",
        coral: "#FF6B6B",
        mint: "#B7E4C7",
        cream: "#F5F7FA",
        graphite: "#2A2D30",
      },
    },
  },
  plugins: [],
};
export default config;
