import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Arrow from '../components/svg/Arrow';

const Projects: ProjectList = require('../data/dataProject.json');

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

interface ProjectList {
  [key: string]: Props;
}

const getProjectById = (id: number): Props | undefined => {
  return Object.values(Projects).find((project: Props) => project.id === id);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
}

const getNextProjectId = (currentId: number): number => {
  const currentIndex = Object.values(Projects).findIndex((project: Props) => project.id === currentId);
  return currentIndex === Object.values(Projects).length - 1 ? 0 : currentId + 1;
};

const getPreviousProjectId = (currentId: number): number => {
  const currentIndex = Object.values(Projects).findIndex((project: Props) => project.id === currentId);
  return currentIndex === 0 ? Object.values(Projects).length - 1 : currentId - 1;
};

const showLink = (link: string) => {
  if (link !== "") {
    return (
      <a href={link} target={"_blank"} className="link" rel="noreferrer"><p>Link to website</p> <Arrow /></a>
    )
  }
}

const Project: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const project = getProjectById(Number(id));
  const previousProject = getProjectById(getPreviousProjectId(Number(id)));
  const nextProject = getProjectById(getNextProjectId(Number(id)));

  console.log(previousProject, nextProject)

  return (
    <section className='projectPages'>
      {project ? (
        <div className='projectPages_content'>
          <div className='projectPages_header'>
            <div className='projectPages_header_text'>
              <Link to={`/`} className="return_btn"><Arrow /> <p>Retour</p></Link>
              <h1>{project.title}</h1>
              <p>{project.littledescription}</p>
              <p>{project.description}</p>
              <div className='tags'>
                {project.tags.map((tag, index) => (
                  <p className="tag md-1" key={index}>{tag}</p>
                ))}
              </div>
              {showLink(project.link)}
              <div className='align align_row'>
                <div className='align align_column'>
                  <p>year</p>
                  <p className='md-1'>{project.year}</p>
                </div>
                <div className='align align_column'>
                  <p>Rôle</p>
                  {project.role.map((role, index) => (
                    <p className="md-1" key={index}>{role}</p>
                  ))}
                </div>
              </div>
            </div>
            <img className="projectPages_header_img" src={project.image[0]} alt={"image 1 de " + project.title} />
          </div>
          <img className="projectPages_img" src={project.image[1]} alt={"image 2 de " + project.title} />
          <img className="projectPages_img" src={project.image[2]} alt={"image 3 de " + project.title} />
          <div className='changeProject'>
            <Link to={`/project/${getPreviousProjectId(project.id)}`}
                  className='changeProject__prev'
                  onClick={scrollToTop}>
              <Arrow /> Previous project
            </Link>

            <Link to={`/project/${getNextProjectId(project.id)}`}
                  className='changeProject__next'
                  onClick={scrollToTop}>
              Next project <Arrow />
            </Link>
          </div>
        </div>
      ) : (
        <p className='projectNotCharged'>Projet non trouvé</p>
      )}
    </section>
  );
};

export default Project;
