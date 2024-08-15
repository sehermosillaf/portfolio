/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Menlo", "monospace"],
    },
    extend: {
      colors: {
        'dark-gray': '#393E46',
      },
    },
  },
  plugins: [],
}

