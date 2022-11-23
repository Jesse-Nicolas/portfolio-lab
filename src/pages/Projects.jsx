import ProjectsList from "../Components/ProjectsList";
import Footer from "../Components/Footer";

const Projects = (props) => {
  return (  
    <>
      <h1>Projects</h1>
      <ProjectsList projectData={props.projectData} />
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default Projects