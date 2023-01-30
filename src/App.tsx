import React, { useState } from 'react';
import classnames from 'classnames';

import Root from './Root';
import Cursor from './components/Cursor';


const App: React.FC = () => {
  const [theme] = useState<'light' | 'dark'>('light');
  const classes = classnames('root', {
    'light-theme': theme === 'light',
    'dark-theme': theme === 'dark',
  });

  return (
    <main className={classes}>
      <Root />
      <Cursor />
    </main>
  );
}

export default App;
