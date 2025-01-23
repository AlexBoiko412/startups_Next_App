import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "card": "2px 2px 6px #000000"
      },
      colors: {
        primary: {
          "100": "#FBF6EA",
          "dark": "#EDC14A",
          DEFAULT: "#FFD050"
        },
        secondary: {
          DEFAULT: "#F4F0F8"
        },
        black: {
          "100": "#6D6E76",
          "200": "#4C4C4C",
          DEFAULT: "#000000"
        },
        white: {
          DEFAULT: "#FFFFFF"
        },

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "sen-sans": "var(--font-sen-sans)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
