import React, { useState } from "react";
import { Link } from "react-router-dom";
import SwitchTheme from "./SwitchTheme";

interface Props {}

const MenuBurger: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openBurger, setOpenBurger] = useState("burger--open");

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setOpenBurger("burger--close");
    } else {
      setOpenBurger("burger--open");
    }
  };

  return (
    <div className="burger-menu">
      <button className={openBurger} id="burger-button" onClick={handleClick}>
        <div className={`burger-line ${isOpen ? "open" : ""}`}></div>
        <div className={`burger-line ${isOpen ? "open" : ""}`}></div>
      </button>
      <nav id="navMobile" className={`menu ${isOpen ? "open" : ""}`}>
        <div className="align align_column">
          <Link to="/" onClick={handleClick} ><h2>Project</h2> </Link>
          <Link to="/About" onClick={handleClick}><h2>About</h2> </Link>
        </div>
        <span className="separator"></span>
        <div className="align align_column">
          <p className="md-1">Select theme :</p>
          <SwitchTheme />
        </div>
      </nav>
    </div>
  );
};

export default MenuBurger;
