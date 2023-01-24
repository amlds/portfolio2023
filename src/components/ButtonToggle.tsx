import React, { useState } from 'react';

const ButtonToggle: React.FC = () => {
  const [theme, setCurrentTheme] = useState('light');

  const main = document.querySelector('main');
  console.log(main?.classList[1]);

  if (main?.classList[1] === 'light-theme') {
    setCurrentTheme('light');
  }

  if (main) {
    main.classList.remove('light-theme');
    main.classList.remove('dark-theme');
    main.classList.add(`${theme}-theme`);
  }

  return (
    <label className="buttonTheme_toggle" id="_1st-toggle-btn">
      <input type="checkbox"
        defaultChecked={theme}
        onChange={() => setCurrentTheme(!theme)}
      />
      <span></span>
    </label>
  );
};

export default ButtonToggle;
