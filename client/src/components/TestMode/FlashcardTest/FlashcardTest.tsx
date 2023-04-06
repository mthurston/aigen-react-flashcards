import React, { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import "./FlashcardTest.scss";

interface FlashcardData {
  title?: string;
  question: string;
  answer: string;
}

interface FlashcardTestProps {
  flashcard: FlashcardData;
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
        <CardContent>
          <Typography variant="h5" component="div">
            {showAnswer ? flashcard.answer : flashcard.question}
          </Typography>
          <Button onClick={handleShowAnswer}>
            {showAnswer ? "Show Question" : "Show Answer"}
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next Card
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlashcardTest;
