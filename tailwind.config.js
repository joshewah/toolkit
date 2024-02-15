/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ? LIGHT THEME ☀️
        background: "#FFFFFF",
        text: "#1F1F1F",
        primary: "#025CED",
        alternate: "#8247FF",
        "background-alternate": "#F0F4F8",
        "background-active": "#DDE3EA",

        // ? DARK THEME 🌙
        "dark--background": "#131314",
        "dark--background-alternate": "#1F1F20",
        "dark--background-active": "#323537",
        "dark--text": "#E3E3E3",
        "dark--text-alternate": "#FFFFFF",

        // ? MISCELLANEOUS
        "free-color": "#37B24D",
        "free-background": "#EBFBEE",
      },
    },
  },
  plugins: [],
}
