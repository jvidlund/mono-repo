const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./components/**/*.{ts,tsx,js,jsx}", "./src/**/*.{ts,tsx}", "@pl/ui/**/*.{ts,tsx,js,jsx}", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: colors.orange,
      blue: colors.blue
    },
    extend: {}
  },
  plugins: []
};
