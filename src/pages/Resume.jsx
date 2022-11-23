import '../styles/Resume.css'
import resume from '../assets/resume_jesse_nicolas.pdf'
import Footer from '../Components/Footer';

const Resume = () => {
  return (  
    <>
      <object data={resume} type="application/pdf" width="100%" height="100%">
        <p>This is the alt text for my resume</p>
      </object>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default Resume