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
          primary: "#FF6201",
          secondary: "#50ffb1",
          accent: "#00272b",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#000000",
          success: "#50ffb1",
          warning: "#F3A712",
          error: "#ff6271",

        },

        screens: {      
        'sm': '400px',
        'md': '960px',
        'lg': '1440px',
        },
      },
  ],
  },
  theme: {
    extend: {
      colors: {
          footer: '#d9d9d9',
      }
    },
  },
  plugins: [require("daisyui")],
};  

