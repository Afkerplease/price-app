/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      Cyan: "hsl(179, 62%, 43%)",
      lightCyan: "hsl(179, 62%, 49%)",
      BrightYellow: "hsl(71, 73%, 54%)",

      LightGray: "hsl(204, 43%, 85%)",
      GrayishBlue: "hsl(218, 22%, 67%)",
    },
    fontFamily: {
      karla: ["Karla"],
    },
    extend: {},
  },
  plugins: [],
};
