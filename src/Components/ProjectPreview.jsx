import { hyphenate } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import '../styles/ProjectPreview.css'

const ProjectPreview = (props) => {
  return (  
    <>
      <div className='card'>
        <p>{props.project.title}</p>
        <img src={props.project.image} alt="screenshot"></img>
        <Link to={`/projects/${hyphenate(props.project.title)}`}>
          learn more
        </Link>
      </div>
    </>
  );
}

export default ProjectPreview;