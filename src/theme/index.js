import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

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
};

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: "cyan" }),
  { config, styles, colors, fonts }
);
