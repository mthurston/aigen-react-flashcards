import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import "./CollapsibleNavigation.scss";
import FlashcardCollectionSelector from "../FlashcardCollectionSelector/FlashcardCollectionSelector";
import { NavigationItemClickArgs } from "../FlashCardCollectionArgs";

interface CollapsibleNavigationProps {
  onNavigationItemClick: (args: NavigationItemClickArgs) => void;
  selectedNavigationItem?: string;
  collections: string[];
  selectedCollection: string;
  onCollectionChange: (collectionName: string) => void;
}

const CollapsibleNavigation: React.FC<CollapsibleNavigationProps> = ({
  onNavigationItemClick,
  selectedNavigationItem,
  collections,
  selectedCollection,
  onCollectionChange,
}) => {
  return (
    <div className="collapsible-navigation">
      <div className="drawer-header">
        <FlashcardCollectionSelector
          collections={collections}
          selectedCollection={selectedCollection}
          onCollectionChange={onCollectionChange}
        />
      </div>
      <List>
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
