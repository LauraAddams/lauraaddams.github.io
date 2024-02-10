import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  hotpink: "#ff66c4",
  limon: "#dae018",
  pepper: "#f52b09",
  creme: "#f8f3ed",
  blackish: "#171613",
};

const styles = {
  global: (props: any) => ({
    body: {
      color: mode("blackish", "creme")(props),
      bg: mode("creme", "blackish")(props),
      minHeight: "100vh",
      border: "5px solid black",
      position: "relative",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "var(--chakra-fontSizes-4xl)",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      pl: 1,
      pr: 1,
    },
    nav: {
      position: "absolute",
      writingMode: "vertical-lr",
      fontWeight: "bold",
      textTransform: "uppercase",
      lineHeight: 10,
      right: 0,
      pt: 1,
    },
    aside: {
      position: "absolute",
      writingMode: "vertical-lr",
      fontWeight: "bold",
      textTransform: "uppercase",
      lineHeight: 10,
    },
    main: {
      ml: 10,
      mr: 10,
      border: "5px solid black",
      minHeight: "calc(100vh - 125px)",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      pl: 1,
      pr: 1,
    },
  }),
};

const fonts = {
  heading: "var(--font-josefin)",
  body: "`'Cabin', sans-serif`",
};

export const theme = extendTheme({
  colors,
  fonts,
  styles,
});
