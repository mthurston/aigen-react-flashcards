import { combineReducers } from "redux";
import {
  ADD_COLLECTION,
  SET_SELECTED_COLLECTION,
  ADD_FLASHCARD,
  DELETE_COLLECTION,
  DELETE_FLASHCARD,
} from "./actions";

const collections = (state = [], action: any) => {
  switch (action.type) {
    case ADD_COLLECTION:
      return [...state, { name: action.payload, flashcards: [] }];
    case ADD_FLASHCARD:
      return state.map((collection: any) => {
        if (collection.name === action.payload.collectionName) {
          return {
            ...collection,
            flashcards: [...collection.flashcards, action.payload.flashcard],
          };
        }
        return collection;
      });
    case DELETE_COLLECTION:
      return state.filter((collection: any) => collection.name !== action.payload);
    case DELETE_FLASHCARD:
      return state.map((collection: any) => {
        if (collection.name === action.payload.collectionName) {
          return {
            ...collection,
            flashcards: collection.flashcards.filter(
              (_: any, index: number) => index !== action.payload.flashcardIndex
            ),
          };
        }
        return collection;
      });
    default:
      return state;
  }
};

const selectedCollection = (state = null, action: any) => {
  switch (action.type) {
    case SET_SELECTED_COLLECTION:
      return action.payload;
    case ADD_COLLECTION:
      return action.payload;
    case DELETE_COLLECTION:
      return state === action.payload ? null : state;
    default:
      return state;
  }
};

export default combineReducers({
  collections,
  selectedCollection,
});
