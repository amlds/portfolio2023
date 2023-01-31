import React from "react";
import NavProject from "./NavProject";

import Logo from "../components/Logo";

import Projects from '../data/dataProject.json';

interface Props {
  id: number;
  role: string[];
}

const getProjectByRole = () => {
  return Object.values(Projects).filter((project: Props) => {
    return project.role.includes('développeur');
  });
};

const ProjectContent: React.FC = () => {
  const allDevelopperProject = getProjectByRole();

  return (
    <section>
      <div className="project">
        <div className="project__decoration">
          <div className="sticky">
            <Logo />
            <div className="rectangle"></div>
          </div>
        </div>
        <div className="project__content">
          {Object.values(allDevelopperProject).map((project) => (
            <NavProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
