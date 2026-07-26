/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 70px rgba(83, 37, 16, 0.12)',
        float: '0 28px 60px rgba(67, 28, 11, 0.24)',
      },
      colors: { tomato: '#c92d25', ink: '#171717', cream: '#f3dfc8' },
    },
  },
  plugins: [],
}
