import { hyphenate } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import '../styles/ProjectPreview.css'

const ProjectPreview = (props) => {
  return (  
    <>
      <div className='card'>
        <div>
          <img className='project-img' src={props.project.image} alt="screenshot"></img>
        </div>
        <div className="info">
          <h3>{props.project.title}</h3>
          <p>{props.project.description}</p>
          <div id='tech-stack'>
            {props.project.techStack.map(icon => (
              <img src={icon} className='techIcon' alt='technology icon'></img>
            ))}
          </div>
          <div id='details-link'>
            <Link to={`/projects/${hyphenate(props.project.title)}`}>
              learn more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPreview;