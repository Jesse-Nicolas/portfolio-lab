const Projects = (props) => {
  return (  
    <div>
      { props.projectData.map((project) => (
        <div key={project.title}>
          <p>{project.title}</p>
          {console.log(project.image)}
          <img src={project.image} alt="screenshot" />
        </div>
      ))}
    </div>
  );
}

export default Projects