import React, { useState } from "react";
import { IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FlashcardCollectionSelector from "../FlashcardCollectionSelector/FlashcardCollectionSelector";
import "./CollapsibleNavigation.scss";
import { useLocation, useNavigate } from "react-router-dom";

const CollapsibleNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="collapsible-navigation">
      <div className="menu-bar">
        <IconButton onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <FlashcardCollectionSelector />
      </div>
      <List
        className={`menu-items ${isMenuOpen ? "open" : "closed"}`}
        component="nav"
      >
        {/* Flashcards container */}
        <ListItemButton
          selected={location.pathname.indexOf("questions") > 1}
          onClick={() => navigate("questions")}
        >
          <ListItemText primary="Questions" />
        </ListItemButton>
        {/* Settings */}
        <ListItemButton
          selected={location.pathname.indexOf("settings") > 1}
          onClick={() => navigate("settings")}
        >
          <ListItemText primary="Settings" />
        </ListItemButton>
        {/* Test mode */}
        <ListItemButton
          selected={location.pathname.indexOf("testMode") > 1}
          onClick={() => navigate("testMode")}
        >
          <ListItemText primary="Quiz Flashcards" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default CollapsibleNavigation;
