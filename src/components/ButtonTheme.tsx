import React, { useState } from "react";

const ButtonTheme: React.FC = () => {
  const [theme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const main = document.querySelector('main');

  if (main) {
    main.classList.remove('light-theme');
    main.classList.remove('dark-theme');
    main.classList.add(`${theme}-theme`);
  }

  return (
    <div>
      <button onClick={() => setCurrentTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch theme
      </button>
    </div>
  );
};


export default ButtonTheme;
