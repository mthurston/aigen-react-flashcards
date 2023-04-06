import React, { ReactNode } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import "./FlashcardCollectionSelector.scss";

interface FlashcardCollectionSelectorProps {
  collections: string[];
  selectedCollection: string;
  onCollectionChange: (collection: string) => void;
}

const FlashcardCollectionSelector: React.FC<
  FlashcardCollectionSelectorProps
> = ({ collections, selectedCollection, onCollectionChange }) => {
  const handleChange = (event: SelectChangeEvent<string>, child: ReactNode) => {
    onCollectionChange(event.target.value as string);
  };

  return (
    <FormControl variant="outlined" className="flashcard-collection-selector">
      <InputLabel id="flashcard-collection-label">Collection</InputLabel>
      <Select
        labelId="flashcard-collection-label"
        value={selectedCollection}
        onChange={handleChange}
        label="Collection"
      >
        {collections.map((collection) => (
          <MenuItem key={collection} value={collection}>
            {collection}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FlashcardCollectionSelector;
