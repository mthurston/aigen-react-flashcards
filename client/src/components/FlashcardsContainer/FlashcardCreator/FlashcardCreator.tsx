import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import "./FlashcardCreator.scss";
import { useSelector } from "react-redux";
import { addFlashcard } from "../../../store/actions";
import { store } from "../../../store";

const FlashcardCreator: React.FC = () => {
  // const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const selectedCollection = useSelector(
    (state: any) => state.selectedCollection
  );

  const handleSubmit = () => {
    if (selectedCollection) {
      if (question && answer) {
        const flashcard = { question, answer };
        store.dispatch(addFlashcard(selectedCollection.name, flashcard));
      } else {
        alert("Please provide both a question and an answer!");
      }
    } else {
      alert("Please select a collection first!");
    }
  };

  return (
    <Grid container spacing={2} className="flashcard-creator">
      {/* <Grid item xs={12}>
        <TextField
          label="Title (Optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          variant="outlined"
        />
      </Grid> */}
      <Grid item xs={12}>
        <TextField
          label="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          fullWidth
          multiline={true}
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
          multiline={true}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={4}>
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