const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    'tailwindcss/nesting': 'postcss-nesting',
    autoprefixer: {},
  },
};
