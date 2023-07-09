// src/App.js

import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import SwitchToggle from './components/SwitchToggle';
import TransitionReplace from 'react-css-transition-replace';
import ParticlesBackground from './components/ParticlesBackground';  // <- Añade esta línea

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <SwitchToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <TransitionReplace transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        {darkMode ? <Home darkMode={darkMode} key="dark" /> : <Home darkMode={darkMode} key="light" />}
      </TransitionReplace>
      <ParticlesBackground /> 
    </div>
  );
}

export default App;