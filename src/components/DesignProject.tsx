import React from "react";

import Projects from "../data/dataProject.json";

import NavDesign from "./NavDesign";

interface Props {
  id: number;
  role: string[];
}

const getProjectByRole = () => {
  return Object.values(Projects).filter((project: Props) => {
    return project.role.includes('designer');
  });
};


const DesignProject: React.FC = () => {
  const allDesignProject = getProjectByRole();

  return (
    <section className="DesignProject">
      <div className="Designproject_nav">
        {Object.values(allDesignProject).map((project) => (
          <NavDesign key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default DesignProject;
