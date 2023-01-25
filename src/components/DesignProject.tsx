import React from "react";

import Projects from "../data/dataProject.json";

interface Props {
  id: number;
  title: string;
  year: number;
  description: string;
  littledescription: string;
  image: string[];
  tags: string[];
  link: string;
  type: string[];
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
          <p>{project.title}</p>
        ))}
      </div>
    </section>
  );
};

export default DesignProject;
