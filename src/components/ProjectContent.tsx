import React from "react";
import { Link } from "react-router-dom";

import NavProject from "../components/NavProject";

export default function ProjectContent() {
  return (
    <main>
      <div className="project">
        <div className="project__content">
            <Link to="/project" className="project__content__text__link">
              <NavProject project={
                {
                  title: "Projet 1",
                  description: "",
                  tags: ["React", "TypeScript", "Sass"],
                  link: "http://www.google.com"
                }
              }/>
            </Link>
            <Link to="/project" className="project__content__text__link">
              <NavProject project={
                {
                  title: "Projet 2",
                  description: "",
                  tags: ["React", "TypeScript", "Sass"],
                  link: "http://www.google.com"
                }
              }/>
            </Link>
            <Link to="/project" className="project__content__text__link">
              <NavProject project={
                {
                  title: "Projet 3",
                  description: "",
                  tags: ["React", "TypeScript", "Sass"],
                  link: "http://www.google.com"
                }
              }/>
            </Link>
        </div>
      </div>
    </main>
  );
}
