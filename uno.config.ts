// https://github.com/unocss/unocss
const { defineConfig } = require('@unocss/vite');
const presetUno = require('@unocss/preset-uno');
const transformerDirective = require('@unocss/transformer-directives');

export default defineConfig({
  presets: [presetUno()],
  theme: {
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1600px',
    },
  },
  transformers: [transformerDirective()],
  rules: [
    [
      'overflow-ellipsis',
      {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
      },
    ],
  ],
});
