import '../styles/Resume.css'
import resume from '../assets/resume_jesse_nicolas.pdf'
import resumePng from '../assets/Resume.png'

const Resume = () => {
  return (  
    <>
      <div className='resume-content'>
        <object data={resume} type="application/pdf" width="100%" height="100%">
          <img className='resume-img' src={resumePng} alt="resume" />
        </object>
      </div>
    </>
  );
}

export default Resume