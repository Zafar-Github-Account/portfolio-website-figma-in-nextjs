/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#171717",
          "200": "rgba(255, 255, 255, 0.5)",
        },
        goldenrod: "#fec45d",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "jim-nightshade": "'Jim Nightshade'",
        "jsmath-cmsy10": "jsMath-cmsy10",
      },
      borderRadius: {
        "981xl": "1000px",
        "corner-full": "1000px",
      },
    },
    fontSize: {
      xl: "20px",
      "13xl": "32px",
      "45xl": "64px",
      sm: "14px",
      "5xl": "24px",
      "17xl": "36px",
      "21xl": "40px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
