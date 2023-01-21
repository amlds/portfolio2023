import React from "react";
import { Link } from "react-router-dom";
import HoverLink from "./HoverLink";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <HoverLink infos={
          {
            name: "Projets",
            font: ["1.5rem", "Satoshi"]
          }
        }/>
      </Link>
      <Link to="/about">
        <HoverLink infos={
          {
            name: "À propos",
            font: ["1.5rem", "Satoshi"]
          }
        }/>
      </Link>
    </header>
  );
}

export default Header;
