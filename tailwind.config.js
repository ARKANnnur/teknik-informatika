/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        dark: {
          50: "#242424",
          100: "#222222",
          200: "#2b2928",
          300: "#7c7a77",
        },
        light: {
          100: "#f1ede8",
          200: "#ade2f0",
          300: "#d0ccc8",
          400: "#fa9892",
          500: "#bbcc9a",
          600: "#ffeba3",
          700: "#ffc685",
          800: "#c4abe0",
        },
      },
    },
  },
  plugins: [],
};
