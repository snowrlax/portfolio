/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/crimson_bg.jpg')",
      }
    },
    colors: {
      purplebg: "#D896FF",
      whitebg: "#FFFFFF",
      offwhitebg: "#EDE1D0",
      yellowbg: "#FCDC5F",
      pinkbg: "#FF7F7F"
    }
  },
  plugins: [require('daisyui')],
};
