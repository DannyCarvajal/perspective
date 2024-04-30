import type { Config } from "tailwindcss";

export const colors = {
  green: "hsla(154, 50%, 45%, 0.7)",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-brown-yellow":
          "linear-gradient(to bottom right, var(--brown) 0%, var(--yellow) 100%)",
      },
    },
    colors: {
      black: "black",

      white: "var(--white)",
      whiteBg: "var(--whiteBg)",
      brown: "var(--brown)",
      yellow: "var(--yellow)",
      blue: "var(--blue)",
      green: "var(--green)",
      gray: "var(--gray)",
    },
    textColor: {
      brown: "var(--textBrown)",
    },
    fontSize: {
      heading: ["var(--font-size-heading)", { lineHeight: "1" }],
      subheading: ["var(--font-size-subheading)", { lineHeight: "1" }],
      body: ["var(--font-size-body)", { lineHeight: "1.25" }],
      small: ["var(--font-size-small)", { lineHeight: "1" }],
    },
  },
  plugins: [],
};

export default config;
