/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        base: "14px",
      },
      colors: {
        primary: "#03577b",
      },
    },
  },
  plugins: [],
};
