/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      darkmagenta:"hsl(300,100%,25.1%)",
      lightmagenta:"hsl(300,100%,94.71%)",
      whitecolor:"hsl(0,0%,100%)",
      lightgrey:"hsl(237.6,12.32%,60.2%)",
    },
    extend: {},
  },
  plugins: [],
}

