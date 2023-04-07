import { combineReducers } from "redux";
import { ADD_COLLECTION, ADD_FLASHCARD, SET_SELECTED_COLLECTION } from "./actions";
import { Collection } from "../models";

const collections = (state = [], action: any) => {
  switch (action.type) {
    case ADD_COLLECTION:
      return [...state, { name: action.payload, flashcards: [] }];
    case ADD_FLASHCARD:
      return state.map((collection: Collection) => {
        if (collection.name === action.payload.collectionName) {
          return {
            ...collection,
            flashcards: [...collection.flashcards, action.payload.flashcard],
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
    default:
      return state;
  }
};

export default combineReducers({
  collections,
  selectedCollection,
});
