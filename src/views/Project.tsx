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
  imageFirst: string;
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
      <a href={link} target={"_blank"} className="link cg-1 cursorHover" rel="noreferrer"><p className='cursorHover'>Link to website</p> <Arrow /></a>
    )
  }
}

const showImg = (img: string[]) => {
  return img.map((img, index) => (
    <img className="projectPages_img" src={process.env.PUBLIC_URL + img} alt={"projet"} key={index} />
  ))
}

const Project: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const project = getProjectById(Number(id));
  const previousProject = getProjectById(getPreviousProjectId(Number(id)));
  const nextProject = getProjectById(getNextProjectId(Number(id)));

  console.log(previousProject, nextProject)

  return (
    <main>
      <section className='projectPages'>
        {project ? (
          <div className='projectPages_content'>
            <div className='projectPages_header'>
              <div className='projectPages_header_text'>
                  <Link to={`/`} className="return_btn cursorHover"><Arrow /> <p className='md-1 cursorHover'>Retour</p></Link>
                <span className='separator'></span>
                <h1>{project.title}</h1>
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
              <img className="projectPages_header_img" src={process.env.PUBLIC_URL + project.imageFirst} alt={"image 1 de " + project.title} />
            </div>
            {showImg(project.image)}
            <div className='changeProject'>
              <Link to={`/project/${getPreviousProjectId(project.id)}`}
                    className='changeProject__prev return_btn cursorHover'
                    onClick={scrollToTop}>
                <Arrow /><p className='cursorHover'>Previous</p>
              </Link>

              <Link to={`/project/${getNextProjectId(project.id)}`}
                    className='changeProject__next return_btn cursorHover'
                    onClick={scrollToTop}>
                <p className='cursorHover'>Next</p><Arrow />
              </Link>
            </div>
          </div>
        ) : (
          <p className='projectNotCharged'>Projet non trouvé</p>
        )}
      </section>
    </main>
  );
};

export default Project;
