// src/theme.js
import { createTheme } from "@mui/material/styles";

const baseTheme = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  shape: {
    borderRadius: 4,
  },
};

const lightTheme = {
  ...baseTheme,
  palette: {
    primary: {
      main: "#64B3C1",
    },
    secondary: {
      main: "#F45855",
    },
    emphasis: {
      main: "#46828C",
    },
    info: {
      main: "#18F29A",
    },
    warning: {
      main: "#BF0056",
    },
    background: {
      default: "#ffffff",
    },
  },
};

const darkTheme = {
  ...baseTheme,
  palette: {
    primary: {
      main: "#64B3C1",
    },
    secondary: {
      main: "#F45855",
    },
    emphasis: {
      main: "#46828C",
    },
    info: {
      main: "#18F29A",
    },
    warning: {
      main: "#BF0056",
    },
    background: {
      default: "#303030",
    },
  },
};

const theme = (mode) =>
  mode === "dark" ? createTheme(darkTheme) : createTheme(lightTheme);

export default theme;
