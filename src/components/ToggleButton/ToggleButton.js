import "./ToggleButton.scss";
import React from "react";

const ToggleButton = ({ mode, toggleMode }) => {
  let className = mode ? "toggle-btn toggle-btn--dark" : "toggle-btn";

  return (
    <div
      className={className}
      onClick={() => {
        toggleMode(!mode);
      }}
    >
      <span className="toggle-btn__text">Dark Mode</span>
      <div className="toggle-btn__body">
        <div className="toggle-btn__slider"></div>
      </div>
    </div>
  );
};

export default ToggleButton;
