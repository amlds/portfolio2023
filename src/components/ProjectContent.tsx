import React, { useState, useEffect } from "react";
import NavProject from "./NavProject";

import Logo from "../components/Logo";


interface Props {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
}

interface ProjectList {
  [key: string]: Props;
}

const ProjectContent: React.FC = () => {
  const [projects, setProjects] = useState<ProjectList>({});

  useEffect(() => {
    fetch("../data/dataProject.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

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
          {Object.keys(projects).map((key) => (
            <NavProject key={key} project={projects[key]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
