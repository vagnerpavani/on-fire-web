/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      "sans-alt": ["Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        "brand-yellow": "#FFCE04",
        "brand-black": "#000000",
        "brand-brown": "#240E0B",
        "brand-grey": "#615A5A",
        "brand-white": "#FFFFFF",
        "brand-alt-yellow": "#FFDF53",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
