import '../styles/ProjectPreview.css'

const ProjectPreview = (props) => {
  return (  
    <>
      <div className='card'>
        <div id='img-container'>
          <img className='project-img' src={props.project.image} alt="screenshot"></img>
        </div>
        <div className="info">
          <div className='preview-header'>
            <h2>{props.project.title}</h2>
            <div>
              <a href={props.project.repositoryLink} className='preview-link' title='Github repo'>
                <i className="fa-brands fa-github fa-xl"/>         
              </a>
              <a href={props.project.deploymentLink} className='preview-link' title='Deployed website'>
                <i className="fa-solid fa-link fa-xl"/>
              </a>
            </div>
          </div>
          <p>{props.project.description}</p>
          <div id='tech-stack'>
            {props.project.techStack.map(icon => (
              <img src={icon.image} className='tech-icon' alt='technology icon' key={icon.name}></img>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPreview;