import React, { useState } from 'react';
import Root from './Root';
import classnames from 'classnames';


const App: React.FC = () => {
  const [theme] = useState<'light' | 'dark'>('light');
  const classes = classnames('root', {
    'light-theme': theme === 'light',
    'dark-theme': theme === 'dark',
  });

  return (
    <main className={classes}>
      <Root />
    </main>
  );
}

export default App;
