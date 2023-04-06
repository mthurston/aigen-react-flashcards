import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { FlipCameraAndroid } from "@mui/icons-material";
import "./Flashcard.scss";

interface FlashcardProps {
  title?: string;
  question: string;
  answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ title, question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <CardContent className="flashcard-content">
        {title && <Typography variant="h6">{title}</Typography>}
        <Typography variant="body1">{isFlipped ? answer : question}</Typography>
      </CardContent>
      <IconButton className="flip-button" onClick={handleFlip}>
        <FlipCameraAndroid />
      </IconButton>
    </Card>
  );
};

export default Flashcard;
