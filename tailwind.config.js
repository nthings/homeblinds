/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'strong-blue': '#0D3068',
        'light-blue': '#0094C5',
        gray: '#666666',
        'background-gray': '#EDEDED',
        'icons-gray': '#CCCCCC',
        'icons-blue': '#245191',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}

