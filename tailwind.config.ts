// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fade-in-out 3s forwards',
        'collapse-space': 'collapse-space 3s forwards',
      },
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: '0' },
          '20%': { opacity: '1' },
          '60%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'collapse-space': {
          from: { marginTop: '100vh' },
          to: { marginTop: '0', height: '0' },
        },
      },
    },
  },
  plugins: [],
};
