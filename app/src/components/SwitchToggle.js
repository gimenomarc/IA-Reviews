import React from 'react';
import Switch from 'react-switch';

const SwitchToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="fixed top-4 right-4 z-10">
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        offColor="#f3f4f6"
        offHandleColor="#a1a1a1"
        handleDiameter={24}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={16}
        width={40}
        className="react-switch"
      />
    </div>
  );
};

export default SwitchToggle;