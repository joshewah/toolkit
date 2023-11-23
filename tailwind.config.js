/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#025CED",
        background: "#F3F2F2",
        "text-dark": "#0C0F13",
      },
    },
  },
  plugins: [],
}
