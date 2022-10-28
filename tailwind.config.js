/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#EF9995",

          "secondary": "#A4CBB4",

          "accent": "#EBDC99",

          "neutral": "#7D7259",

          "base-100": "#FFF8EF",

          "info": "#2463EB",

          "success": "#16A249",

          "warning": "#DB7706",

          "error": "#DC2828",
        },
      },
    ],
    darkTheme: "false",
  },
}
