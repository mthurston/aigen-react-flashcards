import React, { useState } from "react";
import ImportExport from "./ImportExport/ImportExport";
import DeleteCollection from "./DeleteCollection/DeleteCollection";
import "./Settings.scss";

const Settings: React.FC = () => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [collectionToDelete, setCollectionToDelete] = useState("");

  const handleDeleteCollection = () => {
    // Delete the collection here
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleShowDeleteConfirmation = (collectionName: string) => {
    setCollectionToDelete(collectionName);
    setShowDeleteConfirmation(true);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <ImportExport />
      {showDeleteConfirmation && (
        <DeleteCollection
          collectionName={collectionToDelete}
          onDelete={handleDeleteCollection}
          onCancel={handleCancelDelete}
        />
      )}
      {/* Add other settings components here */}
    </div>
  );
};

export default Settings;
