import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Arrow from "./svg/Arrow";
import HoverLink from "./HoverLink";

interface Props {
  project: {
    id: number;
    title: string;
    year: number;
    image: string[];
  };
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
}

const NavDesign: React.FC<Props> = ({ project }) => {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="navDesign cursorHover" ref={projectsRef}>
      <Link to={`/project/${project.id}`}
            onClick={scrollToTop}>
        <div className="navDesign__content cursorHover">
          <p className="md-1 cursorHover">{project.year}</p>
          <div className="rectangle cursorHover"></div>
          <HoverLink infos={
            {
              name: project.title,
              font: ["2rem", "Cabinet-Black"]
            }
          }/>
        </div>
        <Arrow />
      </Link>
    </div>
  );
};

export default NavDesign;
