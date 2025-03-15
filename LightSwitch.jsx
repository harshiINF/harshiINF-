import React, { useState } from 'react';
import '../styles/LightSwitch.css';

const LightSwitch = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`room ${isOn ? 'on' : 'off'}`}>
      <div className={`bulb ${isOn ? 'on' : 'off'}`}></div>
      <div className="string" onClick={toggleLight}></div>
    </div>
  );
};

export default LightSwitch;
