import React, { useState } from "react";

interface ButtonThemeProps {
  setTheme: (newTheme: 'light' | 'dark') => void
}

const ButtonTheme: React.FC<ButtonThemeProps> = ({setTheme}) => {
  const [theme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  return (
    <div>
      <button onClick={() => setCurrentTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch theme
      </button>
    </div>
  );
};
export default ButtonTheme;
