import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollapsibleNavigation from "./components/CollapsibleNavigation/CollapsibleNavigation";
import FlashcardsContainer from "./components/FlashcardsContainer/FlashcardsContainer";
import Settings from "./components/Settings/Settings";
import TestMode from "./components/TestMode/TestMode";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { persistor, store } from "./store";
import theme from "./theme";
import "./App.scss";

const App: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  useState<string>("Default Collection");

  // const toggleTheme = () => {
  //   setMode(mode === "light" ? "dark" : "light");
  // };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme(mode)}>
          <CssBaseline />
          <Router>
            <div className="App">
              <CollapsibleNavigation />
              <div className={"app-container"}>
                <Routes>
                  <Route path="/questions" element={<FlashcardsContainer />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/testMode" element={<TestMode />} />
                </Routes>
              </div>
            </div>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
