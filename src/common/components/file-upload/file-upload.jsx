import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import IconUpload from "../../../assets/images/upload-cloud.png";

const fileTypes = ["SVG", "PNG", "JPG", "GIF"];

const FileContent = () => {
  return (
    <div className="file-upload">
      <span className="icon-holder">
        <img src={IconUpload} alt="Upload Cloud" />
      </span>
      <div className="text-upload">
        <span>Click to upload</span> or drag and drop
      </div>
      <span className="file-types">SVG, PNG, JPG or GIF (max. 800x400px)</span>
    </div>
  );
};

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="file-uploader">
      <FileUploader
        children={<FileContent />}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
    </div>
  );
};

export default FileUpload;
