import '../styles/ProjectsList.css'
import ProjectPreview from './ProjectPreview';

const ProjectsList = (props) => {
  return ( 
    <div>
      { props.projectData.map((project) => (
        <ProjectPreview key={project.title} project={project} />
      ))}
    </div>
  );
}

export default ProjectsList;