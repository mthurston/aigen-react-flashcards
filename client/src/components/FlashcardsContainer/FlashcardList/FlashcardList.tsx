import React from "react";
import { Grid } from "@mui/material";
import Flashcard from "./Flashcard/Flashcard";
import "./FlashcardList.scss";
import { Flashcard as FlashcardData } from "../../../models/flashcards/types";
import { useSelector } from "react-redux";

const FlashcardList: React.FC = () => {
  const selectedCollection = useSelector(
    (state: any) => state.selectedCollection
  );
  const collections = useSelector((state: any) => state.collections);

  const flashcards = React.useMemo(() => {
    const collection = collections.find(
      (col: any) => col.name === selectedCollection
    );
    return collection?.flashcards ?? [];
  }, [collections, selectedCollection]);

  return (
    <Grid container spacing={2} className="flashcard-list">
      {flashcards.map((flashcard: FlashcardData, index: number) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
          <Flashcard {...flashcard} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FlashcardList;
