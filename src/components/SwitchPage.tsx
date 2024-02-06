import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface Props {
  children: React.ReactNode;
}

const MaintainScrollPosition = () => {
  let location = useLocation();
  useEffect(() => {
    const restoreScrollPosition = () => {
      if (location.state && location.state.scrollY) {
        window.scrollTo(0, location.state.scrollY);
      }
    };
    window.addEventListener('popstate', restoreScrollPosition);
    return () => window.removeEventListener('popstate', restoreScrollPosition);
  }, [location]);

  useEffect(() => {
    if (location.pathname !== window.location.pathname) {
      window.history.replaceState({ ...window.history.state, scrollY: window.scrollY }, '');
    }
  }, [location]);

  return null;
};

const SwitchPage = ({ children }: Props) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={2000}>
        <Routes location={location}>{children}</Routes>
      </CSSTransition>
      <MaintainScrollPosition />
    </TransitionGroup>
  );
};

export default SwitchPage;