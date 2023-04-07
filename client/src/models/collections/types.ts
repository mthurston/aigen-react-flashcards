import { Flashcard } from "../flashcards/types";

export interface Collection {
  name: string;
  flashcards: Flashcard[];
}