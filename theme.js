const white = "#fff";
const black = "#000";
const primary = "rgb(0, 92, 221)";

export const theme = {
  googleFont:
    "https://fonts.googleapis.com/css?family=Poppins:500,900|Roboto:400,400i,700&display=swap",
  fonts: {
    heading: '"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  colors: {
    text: black,
    background: white,
    primary: primary
  },
  styles: {
    root: {
      textAlign: "left",
      fontSize: ["1.5em", null, "3em"]
    },
    h1: {
      fontWeight: 500,
      lineHeight: "1.25"
    },
    h2: {
      fontWeight: 500,
      lineHeight: "1.25"
    },
    h3: {
      fontWeight: 500,
      lineHeight: "1.25"
    },
    p: {
      fontWeight: 400
    },
    Slide: {
      display: "block",
      padding: "2em",
      textAlign: "left"
    }
  }
};
