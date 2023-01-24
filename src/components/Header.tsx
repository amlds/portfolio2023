import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HoverLink from "./HoverLink";
import Logo from "./svg/Logo";
import ButtonTheme from './ButtonTheme';
import ButtonToggle from './ButtonToggle';


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const Header: React.FC = () => {
  const [lastScrollDirection, setLastScrollDirection] = useState<'up' | 'down'>('up');
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setLastScrollDirection('down');
      } else {
        setLastScrollDirection('up');
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    if (lastScrollDirection === 'down') {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  }, [lastScrollDirection]);

  return (
    <header /* className={`header ${isHeaderHidden ? "header--hidden" : ""}`} */>
      <div>
        <Logo />
      </div>
      <nav>
        <Link to="/" onClick={scrollToTop}>
          <HoverLink infos={
            {
              name: "Projets",
              font: ["1.5rem", "Satoshi"]
            }
          }/>
        </Link>
        <Link to="/about" onClick={scrollToTop}>
          <HoverLink infos={
            {
              name: "À propos",
              font: ["1.5rem", "Satoshi"]
            }
          }/>
        </Link>
        <ButtonTheme />
        <ButtonToggle />
      </nav>
    </header>
  );
}

export default Header;
