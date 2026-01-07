
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        icomoon: ["icomoon", "sans-serif"],

      },
      backgroundImage: {
        'gradient-purple-black': 'linear-gradient(to right, #6d28d9 30%, #4c1d95 90%, #000000 100%)',
      },
      colors : {
        /* PURPLE SHADES */
          purple: {
            50:  "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8B5CF6", // your main purple
            600: "#7c3aed",
            700: "#452c63",
            800: "#5b21b6",
            900: "#26143F",
            1000: "#26143F",
          },

          /* BLACK */
          black: "#000000",

          /* WHITE */
          white: "#ffffff",
      },
    },
  },
  plugins: [],
};
