const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./components/**/*.{ts,tsx,js,jsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      primary: colors.orange
    },
    extend: {}
  },
  plugins: []
};
