// src/index.js or src/App.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import App from "./App";

function Main() {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme(mode)}>
      <App onToggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
