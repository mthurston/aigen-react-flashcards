export const ADD_COLLECTION = "ADD_COLLECTION";
export const SET_SELECTED_COLLECTION = "SET_SELECTED_COLLECTION";
export const ADD_FLASHCARD = "ADD_FLASHCARD";
export const DELETE_COLLECTION = "DELETE_COLLECTION";
export const DELETE_FLASHCARD = "DELETE_FLASHCARD";

export const addCollection = (name: string) => ({
  type: ADD_COLLECTION,
  payload: name,
});

export const setSelectedCollection = (name: string) => ({
  type: SET_SELECTED_COLLECTION,
  payload: name,
});

export const addFlashcard = (collectionName: string, flashcard: object) => ({
  type: ADD_FLASHCARD,
  payload: {
    collectionName,
    flashcard,
  },
});

export const deleteCollection = (name: string) => ({
  type: DELETE_COLLECTION,
  payload: name,
});

export const deleteFlashcard = (collectionName: string, flashcardIndex: number) => ({
  type: DELETE_FLASHCARD,
  payload: {
    collectionName,
    flashcardIndex,
  },
});
