import React from "react";
import { Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface Props {
  children: React.ReactNode;
}

const SwitchPage: React.FC<Props> = ({ children }) => {
  const [canScroll, setCanScroll] = React.useState(true);
  const location = useLocation();
  const isFirstTime = React.useRef(true);

  React.useEffect(() => {
    if (isFirstTime.current) {
      setTimeout(() => {
        setCanScroll(true);
        isFirstTime.current = false;
      }, 2000);
    } else {
      setCanScroll(false);
      setTimeout(() => {
        console.log("can scroll");
        setCanScroll(true);
        isFirstTime.current = false;
      }, 2000);
    }
  }, [location]);

  const hiddenScroll = () => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflowY = "hidden";
    }
  };

  const showScroll = () => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflowY = "scroll";
    }
  };

  React.useEffect(() => {
    if (canScroll) {
      showScroll();
    } else {
      hiddenScroll();
    }
  }, [canScroll]);

  return (
      <TransitionGroup>
        <CSSTransition  key={location.pathname}
                        classNames="slide"
                        timeout={2000}>
          <Routes location={location}>{children}</Routes>
        </CSSTransition>
      </TransitionGroup>
  );
};

export default SwitchPage;
