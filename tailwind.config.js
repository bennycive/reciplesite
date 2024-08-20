/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/index.html'
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '480px', // Custom extra small breakpoint at 480px
        'smm': '720px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '500':'500ms'
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.32, 0.1, 0.5, 1)',
      },
    },
  },
  plugins: [],
}
