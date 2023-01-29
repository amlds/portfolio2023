import React, { useState, useEffect } from 'react';

const ButtonToggle: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [theme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.classList.remove('light-');
      main.classList.remove('dark-theme');
      main.classList.add(`${theme}-theme`);
    }
  }, [theme]);

  useEffect(() => {
    const img = document.querySelector('.about__img');
    if (img) {
      if (theme === 'light') {
        img.classList.add('negatif__img');
      } else {
        img.classList.remove('negatif__img');
      }
    }
  }, [theme]);

  useEffect(() => {
    const handleDarkModeChange = (darkModes: MediaQueryListEvent) => {
      if (darkModes.matches) {
        setCurrentTheme('dark');
        setChecked(true);
      } else {
        setCurrentTheme('light');
        setChecked(false);
      }
    };
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', handleDarkModeChange);

    if (darkModeQuery.matches) {
      setCurrentTheme('dark');
      setChecked(true);
    } else {
      setCurrentTheme('light');
      setChecked(false);
    }
    return () => {
      darkModeQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  return (
    <label className="buttonTheme_toggle" id="_1st-toggle-btn">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          setCurrentTheme(theme === 'light' ? 'dark' : 'light');
        }}
      />
      <span></span>
    </label>
  );
};

export default ButtonToggle;
