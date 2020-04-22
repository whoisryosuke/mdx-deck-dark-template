const white = "#fff";
const black = "#000";
// const primary = "rgb(0, 92, 221)";
// Similar to brand color above, but optimized for dark mode
const primary = "rgb(0, 92, 221)";

export const theme = {
  googleFont:
    "https://fonts.googleapis.com/css?family=Poppins:500,800|Roboto:400,400i,700&display=swap",
  fonts: {
    heading: '"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  colors: {
    text: white,
    background: black,
    primary: primary
  },
  styles: {
    root: {
      textAlign: "left",
      fontSize: ["1.5em", null, "3em"]
    },
    h1: {
      fontWeight: 800,
      lineHeight: "1.25"
    },
    h2: {
      fontWeight: 800,
      lineHeight: "1.25"
    },
    h3: {
      fontWeight: 800,
      lineHeight: "1.25"
    },
    p: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: ["0.5em", null, "0.75em"]
    },
    li: {
      marginBottom: "0.5em",
      fontSize: ["0.5em", null, "0.75em"]
    },
    pre: {
      fontSize: "0.5em"
    },
    Slide: {
      display: "block",
      padding: "1em 2em",
      textAlign: "left"
    }
  }
};
