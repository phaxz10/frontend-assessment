const { join } = require('path');

module.exports = {
  plugins: {
    'tailwindcss/nesting': 'postcss-nested',
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
