import React from "react";
import ImportExport from "./ImportExport/ImportExport";
import "./Settings.scss";

const Settings: React.FC = () => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <ImportExport />
      {/* Add other settings components here */}
    </div>
  );
};

export default Settings;
