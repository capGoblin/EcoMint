import React, { useState } from "react";
import InputFileUpload from './Upload';

const Actions = () => {
  const [showUploadButton, setShowUploadButton] = useState(false);

  const TreePlantingVerificationClick = () => {
    setShowUploadButton(true);
  };

  const UploadButtonClick = () => {
    // reward users with tokens, call backend function for uploading/rewarding
    setShowUploadButton(false);
  };

  return (
    <div className = "container">
      <h2 id ="heading">Actions</h2>
      <div onClick={TreePlantingVerificationClick}>
        Tree Planting Verification
      </div>
      {showUploadButton && (
        <div>
          <InputFileUpload />
          <button onClick={UploadButtonClick}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default Actions;
