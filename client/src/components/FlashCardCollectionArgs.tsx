export interface AddFlashcardArgs {
  question: string;
  answer: string;
  title?: string;
}

export interface EditFlashcardArgs {
  id: string;
  question?: string;
  answer?: string;
  title?: string;
}

export interface DeleteFlashcardArgs {
  id: string;
}

export interface AddCollectionArgs {
  collectionName: string;
}

export interface RenameCollectionArgs {
  oldName: string;
  newName: string;
}

export interface DeleteCollectionArgs {
  collectionName: string;
}

export interface ImportCollectionArgs {
  collectionName: string;
  data: string; // JSON-encoded string of the flashcard data
}

export interface ExportCollectionArgs {
  collectionName: string;
}

export interface MoveFlashcardArgs {
  flashcardId: string;
  sourceCollectionName: string;
  targetCollectionName: string;
}

export interface DuplicateFlashcardArgs {
  flashcardId: string;
  targetCollectionName: string;
}

export interface ChangeCollectionArgs {
  collectionName: string;
}

export interface NavigationItemClickArgs {
  itemName: string;
}

export interface CollectionChangeArgs {
  collectionName: string;
}
