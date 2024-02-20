import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        anta: ["Anta", "sans-serif"],
      },
    },
  },
  colors: {
    dark: "#1b1b1b",
    light: "#fff",
    accent: "#7B00D3",
    accentDark: "#ffdb4d",
    gray: "#747474",
    oceanGradient: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
  },
  plugins: [],
};
export default config;
