import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

function CustomButton({ title, type, handleClick, customStyles }) {
  const snap = useSnapshot(state);
  const isWhite = (color) => {
    if (color === "#ffffff") {
      return (color = getContrastingColor(snap.color));
    } else {
      return (color = snap.color);
    }
  };
  const generateStyles = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: isWhite(snap.color),
        color: "#fff",
      };
    } else if (type === "outline") {
      return {
        borderColor: isWhite(snap.color),
        borderWidth: "1px",
        color: isWhite(snap.color),
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyles(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
