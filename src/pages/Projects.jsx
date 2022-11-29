import '../styles/Projects.css'
import ProjectPreview from '../Components/ProjectPreview';

const Projects = (props) => {
  return (  
    <>
      <h1>Projects</h1>
      <div className='card-container'>
        { props.projectData.map((project) => (
          <ProjectPreview key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects