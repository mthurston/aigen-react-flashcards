import React from "react";

interface Props {
  collectionName: string;
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteCollection: React.FC<Props> = ({
  collectionName,
  onDelete,
  onCancel,
}) => {
  return (
    <div className="delete-collection">
      <h3>Delete Collection</h3>
      <p>Are you sure you want to delete the "{collectionName}" collection?</p>
      <div className="button-group">
        <button onClick={onDelete}>Delete</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteCollection;
