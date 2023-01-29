import React, { useState, useEffect } from 'react';

const SwitchTheme: React.FC = () => {
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
      } else {
        setCurrentTheme('light');
      }
    };
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', handleDarkModeChange);

    if (darkModeQuery.matches) {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
    return () => {
      darkModeQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    const labelLight = document.querySelector('.label_light-mode');
    const labelDark = document.querySelector('.label_dark-mode');
    if (labelLight && labelDark) {
      if (theme === 'light') {
        labelLight.classList.add('label_active');
        labelDark.classList.remove('label_active');
      } else {
        labelLight.classList.remove('label_active');
        labelDark.classList.add('label_active');
      }
    }
  }, [theme]);

  return (
    <div className="SwitchTheme">
      <input
        className='SwitchTheme_Hidden'
        type="radio"
        id="light-mode"
        name="theme"
        value="light"
        checked={theme === 'light'}
        onChange={() => setCurrentTheme('light')}
      />
      <label className='SwitchTheme_label label_light-mode' htmlFor="light-mode">Light</label>
      <input
        className='SwitchTheme_Hidden'
        type="radio"
        id="dark-mode"
        name="theme"
        value="dark"
        checked={theme === 'dark'}
        onChange={() => setCurrentTheme('dark')}
      />
      <label className='SwitchTheme_label label_dark-mode' htmlFor="dark-mode">Dark</label>
    </div>
  );
};

export default SwitchTheme;
