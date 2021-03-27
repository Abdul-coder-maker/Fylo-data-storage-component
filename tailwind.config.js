module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: "Raleway, sans-serif",
    },
    extend: {
      spacing: {
        '99': '264px',
        '41': '154px',
        '45': '184px',
        '100':'350px',
        '101': '540px',
      },
      backgroundImage: (theme) => ({
        mobile: "url('images/bg-mobile.png')",

        deskop: "url('images/bg-desktop.png')",
      }),
      colors: {
        "pale-blue": "hsl(243, 100%, 93%)",
        "grayish-blue": "hsl(229, 7%, 55%)",
        "dark-blue": "hsl(228, 56%, 26%)",
        "very-dark-blue": "hsl(229, 57%, 11%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
