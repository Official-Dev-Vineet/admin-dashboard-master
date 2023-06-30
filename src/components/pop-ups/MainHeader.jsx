import React from "react";
import "./index.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const MainHeader = ({ title, children }) => {
  return (
    <div className="header">
      <div className="wrap">
        <h2 className="title">{title}</h2>
        <p>{children}</p>
      </div>
      <div className="btn-group">
        <button title="Back" onClick={() => window.history.back()}>
          {<KeyboardBackspaceIcon />}
        </button>
        <button
          title="Forward"
          className="forward"
          onClick={() => window.history.forward()}
        >
          {<KeyboardBackspaceIcon />}
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
