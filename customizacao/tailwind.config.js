module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
      },
      colors: {
        'new-black': '#000000',
        'new-white': '#FFFFFF',
        'new-gray': '#707070'
      },
      fontSize: {
        sm: ['14px', '20px'],
      }
    },
  },
  plugins: [],
}
