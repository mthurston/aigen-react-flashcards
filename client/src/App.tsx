import React, { useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  SelectChangeEvent,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import CollapsibleNavigation from "./components/CollapsibleNavigation/CollapsibleNavigation";
import FlashcardsContainer from "./components/FlashcardsContainer/FlashcardsContainer";
import Settings from "./components/Settings/Settings";
import TestMode from "./components/TestMode/TestMode";
import "./App.scss";
import { NavigationItemClickArgs } from "./components/FlashCardCollectionArgs";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

const App: React.FC = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>("questions");
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [selectedCollection, setSelectedCollection] =
    useState<string>("Default Collection");

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleNavigationItemClick = (args: NavigationItemClickArgs) => {
    selectedNavItem !== args.itemName && setSelectedNavItem(args.itemName);
  };

  const handleCollectionChange = (collectionName: string) => {
    setSelectedCollection(collectionName);
  };

  const isMobile = useMediaQuery(theme(mode).breakpoints.down("sm"));

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme(mode)}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Box className="app-container">
              <CollapsibleNavigation
                onNavigationItemClick={handleNavigationItemClick}
                selectedNavigationItem={selectedNavItem}
                selectedCollection={selectedCollection}
                onCollectionChange={handleCollectionChange}
              />
              <Box className="main-content">
                {selectedNavItem === "questions" && <FlashcardsContainer />}
                {selectedNavItem === "settings" && <Settings />}
                {selectedNavItem === "testMode" && <TestMode />}
                {/* ... */}
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
