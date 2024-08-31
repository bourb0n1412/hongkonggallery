import React from 'react';
import '../styles/DarkModeButton.css';

function DarkModeButton({ toggleTheme, darkMode }) {
  return (
    <button className="dark-mode-button" onClick={toggleTheme}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeButton;
