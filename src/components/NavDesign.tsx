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
    behavior: 'smooth',
  });
}

const NavDesign: React.FC<Props> = ({ project }) => {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="navDesign" ref={projectsRef}>
      <Link to={`/project/${project.id}`}
            onClick={scrollToTop}>
        <div className="navDesign__content">
          <p className="md-1">{project.year}</p>
          <div className="rectangle"></div>
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
