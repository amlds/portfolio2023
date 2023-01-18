import React from "react";
import { Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface Props {
  children: React.ReactNode;
}

const SwitchPage: React.FC<Props> = ({ children }) => {
  const location = useLocation();

  return (
      <TransitionGroup>
        <CSSTransition  key={location.pathname}
                        timeout={3000}
                        classNames="slide">
          <Routes location={location}>{children}</Routes>
        </CSSTransition>
      </TransitionGroup>
  );
};

export default SwitchPage;
