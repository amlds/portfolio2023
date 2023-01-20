import React from "react";
import NavProject from "./NavProject";

import Logo from "../components/Logo";

import Projects from '../data/dataProject.json';

const ProjectContent: React.FC = () => {
  return (
    <section>
      <div className="project">
        <div className="project__decoration">
          <div className="sticky">
            <Logo />
            <h4>2022</h4>
            <div className="rectangle"></div>
          </div>
        </div>
        <div className="project__content">
          {Object.values(Projects).map((project) => (
            <NavProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
