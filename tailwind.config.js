/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6dda72",
        secondary: "#DA6DD5",
      },
      backgroundImage :{
        'hero': "url('../hero.jpg')",
      }
    },
  },
  plugins: [],
};

