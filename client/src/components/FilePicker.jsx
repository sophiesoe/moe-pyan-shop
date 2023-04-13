import React from "react";
import CustomButton from "./CustomButton";

function FilePicker({ file, setFile, readFile }) {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          accept="/image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload file to use as a sticker
        </label>
        <p className="mt-2 text-gray-600 text-xs truncate">
          File name: {file == " " ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <p className="text-sm">
          How do you like your sticker on your cool T-shirt?
        </p>
        <CustomButton
          type="outline"
          title="Logo"
          customStyles="text-xs"
          handleClick={() => readFile("logo")}
        />
        <CustomButton
          type="filled"
          title="Pattern"
          customStyles="text-xs"
          handleClick={() => readFile("full")}
        />
      </div>
    </div>
  );
}

export default FilePicker;
