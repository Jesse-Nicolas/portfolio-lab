import '../styles/Footer.css'
import resume from '../assets/resume_jesse_nicolas.pdf'

const Footer = () => {
  return (  
    <>
      <div className='footer-links'>
        <a className="icon-link" href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-xl"></i></a>
        <a className="icon-link" href={resume} download><i class="fa-solid fa-file"/></a>
        <a className="icon-link" href="https://www.github.com/jesse-nicolas"> <i class="fa-brands fa-github fa-xl"/></a>
      </div>
    </>
  );
}

export default Footer;