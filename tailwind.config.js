/** @type {import('tailwindcss').Config} */
import TailwindPluginForms from '@tailwindcss/forms'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    TailwindPluginForms,
  ],
}

