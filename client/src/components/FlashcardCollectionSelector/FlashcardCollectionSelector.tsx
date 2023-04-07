import React, { ReactNode } from "react";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Add } from "@mui/icons-material";

import "./FlashcardCollectionSelector.scss";
import { useSelector, useDispatch } from "react-redux";
import { addCollection, setSelectedCollection } from "../../store/actions";

const FlashcardCollectionSelector: React.FC = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state: any) => state.collections);
  const selectedCollection = useSelector(
    (state: any) => state.selectedCollection
  );

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSelectedCollection(event.target.value));
  };

  const handleAddCollection = () => {
    const newCollectionName = prompt("Enter the new collection name:");
    if (newCollectionName) {
      dispatch(addCollection(newCollectionName));
    }
  };

  return (
    <FormControl variant="outlined" className="flashcard-collection-selector">
      <InputLabel id="flashcard-collection-label">Collection</InputLabel>
      <Select
        labelId="flashcard-collection-label"
        value={selectedCollection || ""}
        onChange={handleChange}
        label="Collection"
      >
        <MenuItem
          key={"add-new"}
          value={"add-new"}
          onClick={handleAddCollection}
        >
          <IconButton
            onClick={handleAddCollection}
            className="add-collection-button"
          >
            <Add />
          </IconButton>{" "}
          Add New
        </MenuItem>
        {collections.map((collection: any) => (
          <MenuItem key={collection.name} value={collection.name}>
            {collection.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FlashcardCollectionSelector;
