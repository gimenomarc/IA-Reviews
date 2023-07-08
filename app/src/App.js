import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import SwitchToggle from './components/SwitchToggle';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <SwitchToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <CSSTransition
        in={darkMode}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Home />
      </CSSTransition>
    </div>
  );
}

export default App;

