module.exports = {
  content: [
    '**/*.composition?(s).{jsx,tsx,ts,js}',
    '**/*.{tw,tailwind}.{jsx,tsx,ts,js,html}'
  ],
  theme: {
    spacing: {
      1: "0.1rem",
      1.5: "0.15rem",
      16: "1.6rem",
      20: "2rem",
    },
    extend: {
      spacing: {
        1: "0.1rem",
        1.5: "0.15rem",
        16: "1.6rem",
        20: "2rem",
      },
    },
  },
  plugins: [],
};