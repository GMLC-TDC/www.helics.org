const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
  },

  plugins: [require('tw-elements/dist/plugin'), require('@tailwindcss/typography')],
}

module.exports = config
