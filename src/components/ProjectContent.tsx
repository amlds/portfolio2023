import { Link } from "react-router-dom";

import NavProject from "../components/NavProject";
import Logo from "../components/Logo";

export default function ProjectContent() {
  return (
    <section>
      <div className="project">
        <div className="project__decoration">
          <Logo />
          <h4>2022</h4>
          <div className="rectangle"></div>
        </div>
        <div className="project__content">
            <Link to="/project" className="project__content__text__link">
              <NavProject project={
                {
                  title: "AM-PRODUCTION",
                  description: "Mon portfolio",
                  tags: ["React", "TypeScript", "Sass"],
                }
              }/>
            </Link>
            <Link to="/project" className="project__content__text__link">
              <NavProject project={
                {
                  title: "Vel-Watt",
                  description: "Vélo pédagogique",
                  tags: ["React", "TypeScript", "Sass"],
                }
              }/>
            </Link>
            <Link to="/project" className="project__content__text__link">
              <NavProject project={
                {
                  title: "Cabinet Rostaing",
                  description: "Actualité de comptabilité",
                  tags: ["React", "TypeScript", "Sass"],
                }
              }/>
            </Link>
            <Link to="/project" className="project__content__text__link">
              <NavProject project={
                {
                  title: "Compét' en vill'",
                  description: "Actualité de comptabilité",
                  tags: ["React", "TypeScript", "Sass"],
                }
              }/>
            </Link>
        </div>
      </div>
    </section>
  );
}
