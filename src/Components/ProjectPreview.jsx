import { hyphenate } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  return (  
    <>
      <div className='card'>
        <img src={props.project.image} alt="screenshot" />
        <section>
          <h4>{props.project.title}</h4>
          <Link to={`/projects/${hyphenate(props.project.title)}`} >
            learn more
          </Link>
        </section>
      </div>
    </>
  );
}

export default ProjectPreview;