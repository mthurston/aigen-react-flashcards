import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import "./FlashcardCreator.scss";

interface FlashcardCreatorProps {
  onCreate: (newFlashcard: any) => void;
}

const FlashcardCreator: React.FC<FlashcardCreatorProps> = (
  props: FlashcardCreatorProps
) => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    // Handle the flashcard submission logic here, e.g., adding the flashcard to a list
    console.log("Created flashcard:", { title, question, answer });
    props.onCreate({ title, question, answer });
  };

  return (
    <Grid container spacing={2} className="flashcard-creator">
      <Grid item xs={12}>
        <TextField
          label="Title (Optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!question || !answer}
        >
          Create Flashcard
        </Button>
      </Grid>
    </Grid>
  );
};

export default FlashcardCreator;
