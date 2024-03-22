// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
export default {
  darkMode: 'false',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}