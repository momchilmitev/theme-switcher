import "./ToggleButton.scss";

const ToggleButton = () => {
  return (
    <div className="toggle-btn">
      <span className="toggle-btn__text">Dark Mode</span>
      <div className="toggle-btn__body">
        <div className="toggle-btn__slider"></div>
      </div>
    </div>
  );
};

export default ToggleButton;
