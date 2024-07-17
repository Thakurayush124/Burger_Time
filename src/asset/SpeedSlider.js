// SpeedSlider.js
import React from 'react';
import './speed-slider.css';

const SpeedSlider = ({ speed, setSpeed }) => {
  return (
    <div className="speed-slider">
      <label htmlFor="speed">Clock Speed: {speed}</label>
      <input
        id="speed"
        type="range"
        min="1"
        max="10"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
      />
    </div>
  );
};

export default SpeedSlider;
