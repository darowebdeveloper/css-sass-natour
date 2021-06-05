module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'Geneva', 'Tahoma'],
      },
      minHeight: {
        hero: '45rem',
      },
      letterSpacing: {
        'big-spacing': '2.1875rem',
        'small-spacing': '1.09375rem',
      },
      backgroundImage: (theme) => ({
        'hero-pattern': `linear-gradient(
          to right bottom,
          rgba(126, 213, 111, 0.8),
          rgba(40, 180, 131, 0.8)
        ),
        url('../images/hero.jpg')`,
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
