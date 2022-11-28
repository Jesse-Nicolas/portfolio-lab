import '../styles/Resume.css'
import resume from '../assets/resume_jesse_nicolas.pdf'

const Resume = () => {
  return (  
    <>
      <object data={resume} type="application/pdf" width="100%" height="100%">
        <p>alt text for resume</p>
      </object>
    </>
  );
}

export default Resume