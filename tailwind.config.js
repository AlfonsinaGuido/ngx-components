/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/ngx-evolution-components/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-500)",
        accent: "var(--accent-500)",
        warn: "var(--warn)",
        "white-smoke": "var(--white-smoke)",
        "medium-gray": "var(--medium-gray)",
        "dark-gray": "var(--dark-gray)",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica Neue", "sans-serif"],
      },
      fontSize: {
        small: "0.875rem",
        tiny: "0.65rem",
      },
      borderRadius: {
        default: "15px",
        full: "9999px",
      },
      spacing: {
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "25px",
      },
      lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.75,
      },
      boxShadow: {
        normal: "0 2px 10px rgba(0, 0, 0, 0.1)",
      },
    },
    screens: {
      sm: "640px", // Telefonos
      md: "768px", // Tablets
      lg: "1024px", // Computadoras pequeñas
      xl: "1280px", // Computadoras medianas
      "2xl": "1536px", // Computadoras grandes
    },
  },
  plugins: [],
};
