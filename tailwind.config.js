/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#191919",
        "nav-item": "#5D5E61",
        "nav-footer": "#C4C4C4",
        contacts: "#303030",
      },
      fontFamily: {
        button: ["Helvetica Neue"],
        helios: ["HeliosCond"],
      },
      spacing: {
        xl: "1440 px",
      },
    },
  },
  plugins: [],
};
