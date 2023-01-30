import React from 'react';
import classnames from 'classnames';

import Root from './Root';
import Cursor from './components/Cursor';


const App: React.FC = () => {
  const [theme] = React.useState<'light' | 'dark'>('light');

  const classes = classnames('root', {
    'light-theme': theme === 'light',
    'dark-theme': theme === 'dark',
  });

  React.useEffect(() => {
    const handleResize = () => {
      const cursor = document.querySelector('.cursor');
      console.log(navigator.userAgent);
      if ( navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {

        if (cursor) cursor.classList.add('mobile');
      } else {
        if (cursor) cursor.classList.remove('mobile');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <main className={classes}>
      <Root />
      <Cursor />
    </main>
  );
}

export default App;
