/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f53855', // Example custom color
        secondary: {
          light: '#f53854a0',
          DEFAULT: '#00ff00',
          dark: '#0000ff',
        },
        modalsbg: '#ffffff',
      },
    },
  },
};

// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       color: {
//         primary: '#f53855',
//       },
//     },
//   },
//   plugins: [],
// };
