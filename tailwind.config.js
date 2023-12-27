/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#39DB4A",
        customRed: "#FF6868",
        primaryBG: "#FCFCFC",
        secondary: "#555",
      },
      fontFamily: {
        base: "Poppins, sans-serif",
        krona: '"Krona One", sans-serif',
      },
    },
  },
  plugins: [require("daisyui")],
};
