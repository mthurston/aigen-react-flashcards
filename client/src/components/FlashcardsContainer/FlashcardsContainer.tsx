import React, { useState } from "react";
import FlashcardList from "./FlashcardList/FlashcardList";
import FlashcardCreator from "./FlashcardCreator/FlashcardCreator";
import "./FlashcardsContainer.scss";

const FlashcardsContainer: React.FC = () => {
  const [flashcards, setFlashcards] = useState([
    // Sample data
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "What is the largest ocean on Earth?",
      answer: "Pacific Ocean",
    },
  ]);

  return (
    <div className="flashcards-container">
      <FlashcardCreator />
      <FlashcardList />
    </div>
  );
};

export default FlashcardsContainer;
