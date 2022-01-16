module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'very-dark-gray': 'hsl(0, 0%, 17%)',
        'dark-gray': 'hsl(0, 0%, 59%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
