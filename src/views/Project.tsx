import { useParams, Link } from 'react-router-dom';

const Projects: ProjectList = require('../data/dataProject.json');

interface Props {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
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
    <div>
      {project ? (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <div>
            {project.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      ) : (
        <p>Projet non trouvé</p>
      )}
      <Link to={`/`}>Retour</Link>
    </div>
  );
};

export default Project;
