import resume from '../assets/resume_jesse_nicolas.pdf'
import Footer from '../Components/Footer';

const Resume = () => {
  return (  
    <>
      <h1>Resume</h1>
      <h3><a href={resume} download>Download</a></h3>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default Resume