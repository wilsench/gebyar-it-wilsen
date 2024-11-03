/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 50s linear infinite',
        marquee2: 'marquee2 50s linear infinite',
        typewriter: 'typewriter 1.5s steps(18) forwards',
        caret: 'typewriter 1.5s steps(18) forwards, blink 1s steps(18) infinite 1.5s',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      backgroundImage: {
        "dot" : "url('../../public/assets/images/dot_bg.svg')",
        "bg1" : "url('../../public/assets/images/gedung_1.jpeg')",
      },
      colors: {
        "black" : "#565656",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

