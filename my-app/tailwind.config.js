/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff6201",
          secondary: "#50ffb1",
          accent: "#00272b",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#000000",
          success: "#50ffb1",
          warning: "#F3A712",
          error: "#ff6201",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};  

