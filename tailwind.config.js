/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#025CED",
        secondary: "#27272A",
        background: "#F3F2F2",
        "dark-theme--bg": "#1b1b1b",
        "dark-theme--bg-alt": "#4a4a4a",
        "dark-theme--card-bg": "#313131",
        "dark-theme--text": "#F1F1F1",
        "background-alt": "#0D0C0C",
        text: "#0C0F13",
        "free-color": "#37B24D",
        "free-background": "#EBFBEE",
      },
    },
  },
  plugins: [],
}
