module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      spacing: {
        nudge: '-40px',
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      xxl: '8rem',
    },
    container: {
      center: true,
      padding: '0.75rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6EBF1',
          200: '#C0CCDC',
          300: '#9AADC7',
          400: '#4E709D',
          500: '#023373',
          600: '#022E68',
          700: '#011F45',
          800: '#011734',
          900: '#010F23',
        },
        secondary: {
          100: '#FEF8E6',
          200: '#FCEDC1',
          300: '#FAE29B',
          400: '#F6CD50',
          500: '#F2B705',
          600: '#DAA505',
          700: '#916E03',
          800: '#6D5202',
          900: '#493702',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
