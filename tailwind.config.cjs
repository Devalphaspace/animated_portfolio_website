/** @type {import('tailwindcss').Config}*/
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1535px",
        xl: "1279px",
        lg: "1023px",
        sm: "639px",
        md: "767px",
      },
      maxWidth: "100%",
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "836px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      exsm: { max: "380px" },
    },
    extend: {
      colors: {
        "text-yellow-500": "#ffc312",
      },
    },
  },
  plugins: [],
};
