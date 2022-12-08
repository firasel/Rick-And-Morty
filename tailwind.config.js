/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#191D29",
        customGreen: "#9DFE00",
        customBlue: "#14D9E5",
      },
      fontFamily: {
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        TTTravelsBlack: ["TTTravelsBlack", ...defaultTheme.fontFamily.sans],
        TTTravelsBlackItalic: ["TTTravelsBlackItalic", ...defaultTheme.fontFamily.sans],
        TTTravelsBold: ["TTTravelsBold", ...defaultTheme.fontFamily.sans],
        TTTravelsBoldItalic: ["TTTravelsBoldItalic", ...defaultTheme.fontFamily.sans],
        TTTravelsDemiBold: ["TTTravelsDemiBold", ...defaultTheme.fontFamily.sans],
        TTTravelsDemiBoldItalic: ["TTTravelsDemiBoldItalic", ...defaultTheme.fontFamily.sans],
        TTTravelsExtraBold: ["TTTravelsExtraBold", ...defaultTheme.fontFamily.sans],
        TTTravelsExtraBoldItalic: ["TTTravelsExtraBoldItalic", ...defaultTheme.fontFamily.sans],
        TTTravelsExtraLight: ["TTTravelsExtraLight", ...defaultTheme.fontFamily.sans],
        TTTravelsExtraLightItalic: ["TTTravelsExtraLightItalic", ...defaultTheme.fontFamily.sans],
        TTTravelsItalic: ["TTTravelsItalic", ...defaultTheme.fontFamily.sans],
        TTTravelsLight: ["TTTravelsLight", ...defaultTheme.fontFamily.sans],
        TTTravelsLightItalic: ["TTTravelsLightItalic", ...defaultTheme.fontFamily.sans],
        TTTravelsMedium: ["TTTravelsMedium", ...defaultTheme.fontFamily.sans],
        TTTravelsMediumItalic: ["TTTravelsMediumItalic", ...defaultTheme.fontFamily.sans],
        TTTravelsRegular: ["TTTravelsRegular", ...defaultTheme.fontFamily.sans],
        TTTravelsThin: ["TTTravelsThin", ...defaultTheme.fontFamily.sans],
        TTTravelsThinItalic: ["TTTravelsThinItalic", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "4rem",
      },
    },
  },
  plugins: [],
}