/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#025CED",
        secondary: "#27272A",
        background: "#F3F2F2",
        "background-alt": "#0D0C0C",
        "text-dark": "#0C0F13",
        "free-color": "#37B24D",
        "free-background": "#EBFBEE",
      },
    },
  },
  plugins: [],
}
