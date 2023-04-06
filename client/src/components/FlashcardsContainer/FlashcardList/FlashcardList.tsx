import React from "react";
import { Grid } from "@mui/material";
import Flashcard from "./Flashcard/Flashcard";
import "./FlashcardList.scss";

interface FlashcardData {
  title?: string;
  question: string;
  answer: string;
}

interface FlashcardListProps {
  flashcards: FlashcardData[];
}

const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards }) => {
  return (
    <Grid container spacing={2} className="flashcard-list">
      {flashcards.map((flashcard, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Flashcard {...flashcard} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FlashcardList;
