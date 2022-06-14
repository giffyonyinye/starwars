module.exports = {
  mode: 'jit',
  purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
      'montserrat' : ['Montserrat'],
      'poppins' : ['Poppins'],
      'nunitosans': ['Nunito Sans']
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl' : {'max' : '1279px'},
      'lg' : {'max' : '1023px'},
      'md' : {'max' : "767px"},
      'sm' : {'max' : '345px'}
    }

  }
},
  variants: {
    extend: {},
  },
  plugins: [],
}