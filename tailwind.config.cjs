module.exports = {
  jit: true,
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,css,ts}',
  ],
  theme: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar'),]
};