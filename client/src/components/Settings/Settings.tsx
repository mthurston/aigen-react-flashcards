import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCollection } from "../../store/actions";
import ImportExport from "./ImportExport/ImportExport";
import DeleteCollection from "./DeleteCollection/DeleteCollection";
import "./Settings.scss";
import { Button, Typography } from "@mui/material";

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [collectionToDelete, setCollectionToDelete] = useState("");
  const selectedCollection = useSelector((state: any) => state.selectedCollection);


  const handleDeleteCollection = () => {
    // Delete the collection here
    dispatch(deleteCollection(collectionToDelete));
    setShowDeleteConfirmation(false);
    setCollectionToDelete('');
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleShowDeleteConfirmation = () => {
    setCollectionToDelete(selectedCollection);
    setShowDeleteConfirmation(true);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <ImportExport />
      
      <Typography variant="h6">Delete Collection</Typography>
      {showDeleteConfirmation ? (
        <DeleteCollection
          collectionName={collectionToDelete}
          onDelete={handleDeleteCollection}
          onCancel={handleCancelDelete}
        />
      ) : (
      <Button variant="contained" color="primary" onClick={handleShowDeleteConfirmation}>
        Export Flashcards
      </Button>
      )}
      {/* Add other settings components here */}
    </div>
  );
};

export default Settings;
