import React from 'react';

const ButtonToggle: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.classList.remove('light-theme');
      main.classList.remove('dark-theme');
      main.classList.add(`${currentTheme}-theme`);
    }
  }, [currentTheme]);

  return (
    <label className="buttonTheme_toggle" id="_1st-toggle-btn">
      <input type="checkbox"
        defaultChecked={checked}
        onChange={() => {
          setChecked(!checked)
          setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
        }}
      />
      <span></span>
    </label>
  );
};

export default ButtonToggle;
