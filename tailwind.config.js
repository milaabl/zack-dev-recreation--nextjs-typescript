/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  mode: 'jit',
  important: true,
  theme: {
    extend: {
      colors: {
        'windows-tan': '#bdbebd',
        'windows-grey': '#6d6d6d',
        'neon-red': '#ff0000',
        'neon-yellow': '#f9ff00',
        'neon-green': '#56d7e4',
        'dark-blue': '#06157f'
      },
      backgroundImage: {
        'old-computer-screen': 'linear-gradient(rgba(18,16,16,0) 50%,rgba(0,0,0,.25) 0),linear-gradient(90deg,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06))'
      },
      backgroundSize: {
        'old-computer-screen-pixel': '100% 2px,3px 100%'
      }
    },
  },
  plugins: [],
}
