import resume from '../assets/resume_jesse_nicolas.pdf'

const Resume = () => {
  return (  
    <>
      <h1>Resume</h1>
      <h3><a href={resume} download>Download</a></h3>
    </>
  );
}

export default Resume