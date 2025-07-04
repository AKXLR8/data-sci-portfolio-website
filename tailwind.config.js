import { transform } from "framer-motion";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#F5F5DC",
        beige: "#FDF6E3",

      },
      animation: {
        glow: "glow 2.5s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 10px #00CC99, 0 0 20px #00CC99",
          },
          "50%": {
            transform:"scale(1)",
            boxShadow: "0 0 20px #00CC99, 0 0 35px #00CC99",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};