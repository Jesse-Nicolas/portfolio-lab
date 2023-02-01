import '../styles/Projects.css'
import ProjectPreview from '../Components/ProjectPreview';
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from 'react-perfect-scrollbar'


const Projects = (props) => {
  const projectsContainer = {
    width: '100vw',
    overflow: 'hidden',
  }
  return (  
    <>
      <h1>Projects</h1>
        <PerfectScrollbar 
      style={projectsContainer}
        >
          <div className='card-container'>
            { props.projectData.map((project) => (
              <ProjectPreview key={project.title} project={project} />
            ))}
          </div>
        </PerfectScrollbar>
    </>
  );
}

export default Projects