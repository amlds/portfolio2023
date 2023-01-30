import React, { useRef } from "react";
import { Link } from "react-router-dom";

import HoverLink from "./HoverLink";

interface Props {
  project: {
    id: number;
    title: string;
    littledescription: string;
    image: string[];
    tags: string[];
  };
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
}

const NavProject: React.FC<Props> = ({ project }) => {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="navProject" ref={projectsRef}>
      <Link to={`/project/${project.id}`}
            onClick={scrollToTop}>
        <div className="navProject__content cursorHover">
          <p className="littleDescription cursorHover">{project.littledescription}</p>
          <HoverLink infos={
            {
              name: project.title,
              font: ["6rem", "Cabinet-Black"]
            }
          }/>
          <div className="navProject__tags cursorHover">
            {project.tags.map((tag, index) => (
              <p key={index} className="tag md-1 cursorHover">
                {tag}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavProject;
