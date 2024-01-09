import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("keep-react/preset")],
  theme: {
    extend: {
      colors: {
        srPrimary: "#007BFF",
        srSecondary: "#000000",
        srExtra: "#00C853",
      },
      fontFamily: {
        primaryFont: ["Creato Display"],
      },
    },
  },
  plugins: [],
};
export default config;
