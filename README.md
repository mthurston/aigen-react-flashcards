# Flashcards Web Application

This project aims to create a static web-based application for creating, maintaining, and sharing flashcards. Each flashcard consists of three parts:

1. Optional title
2. Required question text
3. Required answer text

## Application Components

The application is built using React and consists of the following components:

### Collapsible Left Navigation

The collapsible left navigation allows users to choose a page. Navigation options include:

1. Flashcards container page labeled "Questions"
2. Data management page labeled "Settings"
3. Test mode, which presents one card at a time for review
4. A drop-down list that allows users to view different lists of flashcards. There should also be an option within the list that, when selected, lets the user type in a collection name for their cards.

## Component Breakdown

Here is a breakdown of the components and their child components:

1. CollapsibleNavigation
2. FlashcardsContainer
   - FlashcardList
     - Flashcard
   - FlashcardCreator
3. Settings
   - ImportExport
   - Other settings-related components as needed (e.g., appearance, account management, etc.)
4. TestMode
   - FlashcardTest
5. FlashcardCollectionSelector

## Recommended JS Libraries

The following JavaScript libraries are recommended for this project:

1. React: for creating UI components
2. React-Router: for handling navigation between components
3. Redux or MobX (optional): for state management
4. react-bootstrap or material-ui: for pre-built UI components and consistent styling
5. react-select: for the custom drop-down list
