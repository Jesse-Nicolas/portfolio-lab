import { find } from "../utilities/findProject";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const title = useParams()
  const project = find(title.projectDetails)


  return (  
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="project screenshot" />
      <br/><a href={project.repositoryLink}>Github Repo</a> 
      <br/><a href={project.deploymentLink}>Deployed site</a>
    </>
  );
}

export default ProjectDetails;