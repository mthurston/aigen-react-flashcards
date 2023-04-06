import React, { useState } from "react";
import FlashcardTest from "./FlashcardTest/FlashcardTest";
import './TestMode.scss';

const TestMode: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const flashcards = [
    // Sample data
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "What is the largest ocean on Earth?",
      answer: "Pacific Ocean",
    },
  ];

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="test-mode">
      <FlashcardTest
        flashcard={flashcards[currentCardIndex]}
        onNextCard={handleNextCard}
      />
    </div>
  );
};

export default TestMode;
