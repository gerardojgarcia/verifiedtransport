module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: '#3E5c76',
        brightRedLight: '#1D2D44',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: '#1D2D44',
        darkGrayishBlue: '#3E5c76',
        veryDarkBlue: '#0D1321',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }


    },
  },
  plugins: [],
}
