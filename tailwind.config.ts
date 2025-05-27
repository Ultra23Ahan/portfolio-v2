module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: '0' },
          '20%': { opacity: '1' },
          '60%': { opacity: '1' },
          '100%': { opacity: '0', display: 'none' },
        },
        'collapse-space': {
          '0%': { marginTop: '100vh' },
          '100%': { marginTop: '0', height: '0' },
        },
      },
      animation: {
        'fade-in-out': 'fade-in-out 3s forwards',
        'collapse-space': 'collapse-space 3s forwards',
      },
    },
  },
  plugins: [],
};
