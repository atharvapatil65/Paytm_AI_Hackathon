import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#162b46",
        muted: "#657388",
        canvas: "#f8f9f5",
        paytm: "#00a8e8",
        deep: "#0c4c89",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(31, 70, 107, .09)",
      },
    },
  },
  plugins: [],
} satisfies Config;
