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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "spinner-grow": {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
