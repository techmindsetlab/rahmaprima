/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  safelist: [
    "md:col-span-3", "md:col-span-4", "md:col-span-5", "md:col-span-6",
    "md:mt-0", "md:mt-16", "md:mt-24",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#6B1E2A",
          deep: "#4A0E19",
          light: "#8B2E3A",
          rose: "#B85450",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#1A1613",
        },
        cream: {
          DEFAULT: "#F5EFE6",
          warm: "#EDE4D3",
        },
        gold: "#C9A961",
      },
      fontFamily: {
        display: ['"Reckless"', '"Cormorant Garamond"', "serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        "hero": "clamp(3.5rem, 18vw, 12rem)",
        "display": "clamp(2.5rem, 10vw, 6rem)",
        "eyebrow": "0.7rem",
      },
      letterSpacing: {
        "widest-2": "0.35em",
      },
      spacing: {
        "safe-b": "env(safe-area-inset-bottom)",
      },
      screens: {
        xs: "375px",
        ipad: "820px",
        "ipad-pro": "1024px",
      },
    },
  },
  plugins: [],
};
