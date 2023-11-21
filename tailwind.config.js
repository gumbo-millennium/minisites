/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@gumbo-millennium/eslint-config/tailwind'),
  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
}

