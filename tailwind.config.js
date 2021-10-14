module.exports = {
  purge: [
    './src/components/*.vue',
    './src/laouts/*.vue',
    './src/pages/*.vue',
    './src/templates/*.vue',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/typography') ],
}
