module.exports = {
  content: [
    '**/*.{jsx,tsx}' // this is ok as a bit component doesnt have node_modules,
    // './node_modules/@learn-bit-react/**/*.js'
  ],
  theme: {
    spacing: {
      16: "1.6rem",
      20: "2rem",
    },
    extend: {
      spacing: {
        16: "1.6rem",
        20: "2rem",
      },
    },
  },
  plugins: [],
};