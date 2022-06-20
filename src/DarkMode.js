import React from 'react';
import './DarkMode.css';

const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

const storedTheme = localStorage.getItem('theme');

// Checking the user's browser settings for preferred color scheme
const prefersLight =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches;

// Check localStorage and preferred color scheme and set to light mode if true
const defaultLight =
  storedTheme === 'light' || (storedTheme === null && prefersLight);

if (defaultLight) {
  setLight();
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    setLight();
  } else {
    setDark();
  }
};

export function DarkMode() {
  return (
    <div className="dark-mode-toggle2">
      <label className="toggle-theme">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultLight}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}
