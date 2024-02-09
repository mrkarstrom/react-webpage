import React, { useState } from 'react';
import MyComponent from './MyComponent';
import PickCar from './PickCar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={isDarkMode ? 'dark-mode' : 'light-mode'}
      style={{ width: '100vw', height: '100vh' }}
    >
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      {/* Toggle button */}
      <button onClick={toggleMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <div className="card">
        <PickCar />
        <MyComponent></MyComponent>
      </div>
    </div>
  );
}

export default App;
