import '../styles/Footer.css'
import resume from '../assets/resume_jesse_nicolas.pdf'

const Footer = () => {
  return (  
    <>
      <div className='footer-links'>
        <a className="icon-link"href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-xl"></i></a>
        <h5><a href={resume} download>resume</a></h5>
        <a className="icon-link" href="https://www.github.com/jesse-nicolas"> <i class="fa-brands fa-github fa-xl"></i></a>
      </div>
    </>
  );
}

export default Footer;