export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1926",
        accent: "#D4A373",
        accent2: "#E6C9A8",
        tan: "#D4A373",
        "tan-light": "#E6C9A8",
      },
      animation: {
        glow: "glow 2.5s ease-in-out infinite",
        "scroll-left": "scroll-left 20s linear infinite",
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
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
