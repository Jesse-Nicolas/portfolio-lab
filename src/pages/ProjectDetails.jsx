import '../styles/ProjectDetails.css'
import { find } from "../utilities/findProject";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const title = useParams()
  const project = find(title.projectDetails)


  return (  
    <>
      <div className='details'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <img className='big-image' src={project.image} alt="project screenshot" />
      </div>
      <div className='details-links'>
        <a className='link' href={project.repositoryLink}>Github Repo</a> 
        <a className='link' href={project.deploymentLink}>Deployed site</a>
      </div>
    </>
  );
}

export default ProjectDetails;