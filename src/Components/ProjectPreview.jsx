import { hyphenate } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import '../styles/ProjectPreview.css'

const ProjectPreview = (props) => {
  return (  
    <>
      <div className='card'>
        <img src={props.project.image} alt="screenshot" />
        <section className='info'>
          <p>{props.project.title}</p>
          <Link to={`/projects/${hyphenate(props.project.title)}`} >
            learn more
          </Link>
        </section>
      </div>
    </>
  );
}

export default ProjectPreview;