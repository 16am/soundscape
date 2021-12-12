import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      // bg: "gray.400",
      // color: "current-color",
    },
    a: {
      color: "pink.500",
      _hover: {
        // textDecoration: "underline",
      },
    },
  },
};

const fonts = {
  heading: "Poppins",
  body: "Poppins",
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  blue: {
    50: "blue",
    100: "blue",
    200: "blue",
    300: "blue",
    400: "blue",
    500: "blue",
    600: "blue",
    700: "blue",
    800: "blue",
    900: "blue",
  },
};

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: "pink" }),
  { styles, colors, fonts }
);
