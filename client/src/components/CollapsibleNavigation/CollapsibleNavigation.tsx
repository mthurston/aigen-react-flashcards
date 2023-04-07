import React, { useState } from "react";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FlashcardCollectionSelector from "../FlashcardCollectionSelector/FlashcardCollectionSelector";
import "./CollapsibleNavigation.scss";

import { NavigationItemClickArgs } from "../FlashCardCollectionArgs";
import { Collection } from "../../models";

interface CollapsibleNavigationProps {
  onNavigationItemClick: (item: { itemName: string }) => void;
  selectedNavigationItem: string;
  selectedCollection: string;
  onCollectionChange: (collection: string) => void;
}

const CollapsibleNavigation: React.FC<CollapsibleNavigationProps> = ({
  onNavigationItemClick,
  selectedNavigationItem,
  selectedCollection,
  onCollectionChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <ListItem
          button
          selected={selectedNavigationItem === "questions"}
          onClick={() => onNavigationItemClick({ itemName: "questions" })}
        >
          <ListItemText primary="Questions" />
        </ListItem>
        {/* Settings */}
        <ListItem
          button
          selected={selectedNavigationItem === "settings"}
          onClick={() => onNavigationItemClick({ itemName: "settings" })}
        >
          <ListItemText primary="Settings" />
        </ListItem>
        {/* Test mode */}
        <ListItem
          button
          selected={selectedNavigationItem === "testMode"}
          onClick={() => onNavigationItemClick({ itemName: "testMode" })}
        >
          <ListItemText primary="Quiz Flashcards" />
        </ListItem>
      </List>
    </div>
  );
};

export default CollapsibleNavigation;
