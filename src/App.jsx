import React, { useState } from 'react';
import MyComponent from './MyComponent';
import PickCar from './PickCar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={toggleMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        <div className="card">
          <PickCar />
          <MyComponent></MyComponent>
        </div>
        </button>
      </div>
    </>
  );
}

export default App;
