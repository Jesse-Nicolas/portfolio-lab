import ProjectsList from "../Components/ProjectsList";

const Projects = (props) => {
  return (  
    <ProjectsList projectData={props.projectData} />
  );
}

export default Projects