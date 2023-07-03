import React, { useState } from 'react';
import './theme1.css';
import './theme2.css';
import './theme3.css';

const Themes = () => {
  const [currentTheme, setCurrentTheme] = useState('theme1');

  const handleThemeChange = (selectedTheme) => {
    setCurrentTheme(selectedTheme);
  };

  return (
    <div className={`app-container ${currentTheme}`}>
      <header>
        <h1>Theme Switcher</h1>
      </header>
      <main>
        <div className="content">
          <h2>Welcome to the Theme Switcher!</h2>
          <p>Select a theme from the dropdown to change the appearance.</p>
        </div>
        <div className="theme-switcher">
          <label>Select a theme:</label>
          <select value={currentTheme} onChange={(e) => handleThemeChange(e.target.value)}>
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </div>
      </main>
    </div>
  );
};

export default Themes;
