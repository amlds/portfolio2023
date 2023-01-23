import React, { useState } from 'react';
import Root from './Root';
import classnames from 'classnames';


const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const classes = classnames('root', {
    'light-theme': theme === 'light',
    'dark-theme': theme === 'dark',
  });

  return (
    <main className={classes}>
      <Root setTheme={setTheme}/>
    </main>
  );
}

export default App;
