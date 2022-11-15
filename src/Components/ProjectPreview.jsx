const ProjectPreview = (props) => {
  return (  
    <>
      <div className='card'>
        <img src={props.project.image} alt="screenshot" />
        <section>
          <h4>{props.project.title}</h4>
          <button>learn more</button>
        </section>
      </div>
    </>
  );
}

export default ProjectPreview;