import React from 'react';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
}


export default Header;
