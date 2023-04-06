New-Item -ItemType Directory -Path ".\components\CollapsibleNavigation"
New-Item -ItemType File -Path ".\components\CollapsibleNavigation\CollapsibleNavigation.js"
New-Item -ItemType File -Path ".\components\CollapsibleNavigation\CollapsibleNavigation.css"

New-Item -ItemType Directory -Path ".\components\FlashcardsContainer"
New-Item -ItemType File -Path ".\components\FlashcardsContainer\FlashcardsContainer.js"
New-Item -ItemType File -Path ".\components\FlashcardsContainer\FlashcardsContainer.css"

New-Item -ItemType Directory -Path ".\components\FlashcardsContainer\FlashcardList"
New-Item -ItemType File -Path ".\components\FlashcardsContainer\FlashcardList\FlashcardList.js"
New-Item -ItemType File -Path ".\components\FlashcardsContainer\FlashcardList\FlashcardList.css"

New-Item -ItemType Directory -Path ".\components\FlashcardsContainer\FlashcardList\Flashcard"
New-Item -ItemType File -Path ".\components\FlashcardsContainer\FlashcardList\Flashcard\Flashcard.js"
New-Item -ItemType File -Path ".\components\FlashcardsContainer\FlashcardList\Flashcard\Flashcard.css"

New-Item -ItemType Directory -Path ".\components\FlashcardsContainer\FlashcardCreator"
New-Item -ItemType File -Path ".\components\FlashcardsContainer\FlashcardCreator\FlashcardCreator.js"
New-Item -ItemType File -Path ".\components\FlashcardsContainer\FlashcardCreator\FlashcardCreator.css"

New-Item -ItemType Directory -Path ".\components\Settings"
New-Item -ItemType File -Path ".\components\Settings\Settings.js"
New-Item -ItemType File -Path ".\components\Settings\Settings.css"

New-Item -ItemType Directory -Path ".\components\Settings\ImportExport"
New-Item -ItemType File -Path ".\components\Settings\ImportExport\ImportExport.js"
New-Item -ItemType File -Path ".\components\Settings\ImportExport\ImportExport.css"

New-Item -ItemType Directory -Path ".\components\Settings\OtherSettingsComponents"

New-Item -ItemType Directory -Path ".\components\TestMode"
New-Item -ItemType File -Path ".\components\TestMode\TestMode.js"
New-Item -ItemType File -Path ".\components\TestMode\TestMode.css"

New-Item -ItemType Directory -Path ".\components\TestMode\FlashcardTest"
New-Item -ItemType File -Path ".\components\TestMode\FlashcardTest\FlashcardTest.js"
New-Item -ItemType File -Path ".\components\TestMode\FlashcardTest\FlashcardTest.css"

New-Item -ItemType Directory -Path ".\components\FlashcardCollectionSelector"
New-Item -ItemType File -Path ".\components\FlashcardCollectionSelector\FlashcardCollectionSelector.js"
New-Item -ItemType File -Path ".\components\FlashcardCollectionSelector\FlashcardCollectionSelector.css"

#oops, I wanted it in typscript.  sorry!

Get-ChildItem -Path ".\components" -Recurse -Include "*.js" | ForEach-Object { Rename-Item $_.FullName ($_.Name -replace '\.js$', '.tsx') }
