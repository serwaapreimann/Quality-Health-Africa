import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    qha: {
      tealDark: "#000",
      teal: "#ff0000",
      tealLight: "#E6F1F0",

      orange: "#ff0000",
      orangeDark: "##ff0000",

      charcoal: "#1D2023",
      warmWhite: "#FAF9F6",
      lightGray: "#E8E9E7",
      white: "#FFFFFF",
    },
  },

  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },

  styles: {
    global: {
      "html, body": {
        background: "qha.warmWhite",
        color: "qha.charcoal",
      },

      body: {
        margin: 0,
      },

      "*": {
        boxSizing: "border-box",
      },
    },
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "999px",
      },
    },
  },
});

export default theme;