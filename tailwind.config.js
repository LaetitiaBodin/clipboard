/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "grayDark" : "hsl(210, 10%, 33%)",
        "grayLight" : "hsl(201, 11%, 66%)",
        "white" : "hsl(0, 0%, 100%)",
        "turquoise" : {
          100 : "hsla(171, 66%, 44%, 1)",
          80 : "hsla(171, 66%, 44%, 0.8)",
          20 : "hsla(171, 66%, 44%, 0.2)"
        },
        "azure" : {
          100 : "hsla(233, 100%, 69%, 1)",
          80 : "hsla(233, 100%, 69%, 0.8)",
          20 : "hsla(233, 100%, 69%, 0.2)"
        }
      },
      fontFamily: {
        "custom" : '"Bai Jamjuree", "sans-serif"'
      },
      backgroundImage: theme => ({
        'mobile': "url('img/bg/mobile.png')",
        'desktop': "url('img/bg/desktop.png')",
      })
    },
  },
  plugins: [],
}

