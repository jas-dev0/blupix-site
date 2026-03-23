/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nautilus: {
          deep:    '#162839',
          DEFAULT: '#1e3345',
          mid:     '#253f55',
          light:   '#2e4f68',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light:   '#e2c97e',
          dim:     'rgba(201,168,76,0.18)',
          subtle:  'rgba(201,168,76,0.07)',
        },
        cream: '#eef2f0',
        muted: '#7a97a8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
    },
  },
  plugins: [],
}
