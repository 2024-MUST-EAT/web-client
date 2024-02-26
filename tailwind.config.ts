import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: "#064E3B",
        lightGreen: "#449178",
        extraLightGreen: "#E9EFED",
        extraLightGreen2: "#D0D9D6",
        neonGreen: "#12B780",
        darkYellow: "#EAB308",
        yellow: "#FACC15",
        zinc9: "#18181B",
        zinc8: "#27272A",
        zinc6: "#52525B",
        zinc4: "#A1A1AA",
        zinc3: "#D4D4D8",
        zinc2: "#E4E4E7",
        zinc1: "#F9F9F9",
        zinc12: "#F2F2F2",
        skyBlue2: "#368FD0",
        skyBlue1: "#89CEFF",
      },
      boxShadow: {
        rgba1: "4px 4px 16px 4px rgba(0,0,0,0.1)",
        rgba3: "4px 4px 16px 4px rgba(0,0,0,0.3)",
      },
      fontSize: {
        h1: "32px",
        h2: "24px",
        h3: "16px",
        h4: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
