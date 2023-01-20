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

const Project: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const project = getProjectById(Number(id));

  return (
    <section className='projectPages'>
      {project ? (
        <div className='projectPages_content'>
          <Link to={`/`} className="return_btn">Retour</Link>
          <div className='projectPages_header'>
            <div className='projectPages_header_text'>
              <h1>{project.title}</h1>
              <p>{project.littledescription}</p>
              <p>{project.description}</p>
              <div className='tags'>
                {project.tags.map((tag, index) => (
                  <p className="tag md-1" key={index}>{tag}</p>
                ))}
              </div>
              <Link to={{ pathname: project.link}} target={"_blank"} className="link"><p>Link to website</p> <Arrow /></Link>

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
            <Link to={`/project/${project.id - 1}`} className='changeProject__prev'>
              <Arrow /> Previous project
            </Link>
            <Link to={`/project/${project.id + 1}`} className='changeProject__next'>
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
