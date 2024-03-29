import '../styles/home.css'
import reclining from '../assets/reclining.jpg'
import ProjectPreview from '../Components/ProjectPreview';
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from 'react-perfect-scrollbar'

const Home = (props) => {
  const projectsContainer = {
    width: '100vw',
    overflow: 'hidden',
  }
  return (  
    <>
        <div id='intro'>
          <img id="homepicture" src={reclining} alt="reclining in yellowstone" />
          <div id='welcome'>
            <p>I'm Jesse,</p>
            <p className="typewriter">Full-Stack Software Engineer.</p>
          </div>
        </div>
        <div className='projects'>
          <h3>Portfolio</h3>
          <hr/>
          <PerfectScrollbar 
          style={projectsContainer}
          options={{ 
            useBothWheelAxes: true,
          }}
          onXReachEnd={ ref => {window.scrollBy(0, 200)}}
          onXReachStart={ ref => {window.scrollBy(0, -200)}}
          >
          <div className='card-container'>
            { props.projectData.map((project) => (
              <ProjectPreview key={project.title} project={project} />
            ))}
          </div>
          </PerfectScrollbar>
        </div>
    </>
  );
}

export default Home