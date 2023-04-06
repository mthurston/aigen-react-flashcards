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
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className="app-container">
          <CollapsibleNavigation
            onNavigationItemClick={handleNavigationItemClick}
            selectedNavigationItem={selectedNavItem}
            collections={["My Collection", "Other Collection"]}
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
  );
};

export default App;
