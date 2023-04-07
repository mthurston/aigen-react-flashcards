import React, { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import "./FlashcardTest.scss";
import { Flashcard } from "../../../models/flashcards/types";

interface FlashcardTestProps {
  flashcard: Flashcard;
  onNextCard: () => void;
}

const FlashcardTest: React.FC<FlashcardTestProps> = ({
  flashcard,
  onNextCard,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNext = () => {
    setShowAnswer(false);
    onNextCard();
  };

  return (
    <div className="flashcard-test">
      <Card>
        <CardContent className="flashcard">
          {showAnswer ? (
            <Typography variant="body1" component="div" className="flashcard-back">
              {flashcard.answer}
            </Typography>
          ) : (
            <Typography
              variant="h5"
              component="div"
              className="flashcard-front"
            >
              {flashcard.question}
            </Typography>
          )}

          <div className="flashcard-buttons">
            <Button onClick={handleShowAnswer}>
              {showAnswer ? "Back" : "Answer"}
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next Card
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlashcardTest;
