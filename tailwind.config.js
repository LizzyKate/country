module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1030px",
        xl: "1280px"
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter"
      },
      colors: {
        blue: {
          100: " #001A41"
        },
        black: {
          100: "#121212"
        },
        faint: "#74859C",
        soft: "#DEE5EF"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
