/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        wmx: "1290px",
      },
      boxShadow: {
        shx1: "rgba(0, 0, 0, 0.15) 0px 2px 8px;",
      },
    },
  },
  plugins: [],
};
