/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#aa6d6b",
        brandDark: "#151616",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        verela: ["Verela Round", "sans-serif"],
      },
    },
  },
  plugins: [],
};
