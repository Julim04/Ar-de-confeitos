/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['"Fraunces"', "serif"], // classe: font-fraunces
        "dm-sans": ['"DM Sans"', "sans-serif"], // classe: font-dm-sans
        parisienne: ['"Parisienne"', "cursive"], // classe: font-parisienne
      },
    },
  },
  plugins: [],
};
