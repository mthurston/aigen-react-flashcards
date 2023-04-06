import React from "react";
import { Button, Typography } from "@mui/material";
import './ImportExport.scss';


const ImportExport: React.FC = () => {
  const handleExport = () => {
    // Handle exporting the flashcard data here
    console.log("Exporting flashcards...");
  };

  const handleImport = () => {
    // Handle importing flashcard data here
    console.log("Importing flashcards...");
  };

  return (
    <div className="import-export">
      <Typography variant="h6">Import/Export Flashcards</Typography>
      <Button variant="contained" color="primary" onClick={handleExport}>
        Export Flashcards
      </Button>
      <Button variant="contained" color="primary" onClick={handleImport}>
        Import Flashcards
      </Button>
    </div>
  );
};

export default ImportExport;
