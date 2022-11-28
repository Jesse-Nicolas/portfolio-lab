import ProjectsList from "../Components/ProjectsList";

const Projects = (props) => {
  return (  
    <>
      <h1>Projects</h1>
      <ProjectsList projectData={props.projectData} />
    </>
  );
}

export default Projects