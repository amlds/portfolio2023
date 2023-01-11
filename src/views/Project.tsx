import { useParams } from 'react-router-dom';

interface Props { }

const Project: React.FC<Props> = (props) => {
  const { id } = useParams();
  return (
    <div>
      <h1>Project {id}</h1>
    </div>
  );
}

export default Project;
