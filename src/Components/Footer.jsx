import '../styles/Footer.css'
import resume from '../assets/jesse_nicolas_resume.pdf'

const Footer = () => {
  return (  
    <>
      <div className='footer-links'>
        <a className="icon-link" href="https://www.linkedin.com" title='Linkedin'><i className="fa-brands fa-linkedin fa-xl"></i></a>
        <a className="icon-link" href={resume} title='Resume' download><i className="fa-solid fa-file fa-xl"/></a>
        <a className="icon-link" href="https://www.github.com/jesse-nicolas" title='Github'> <i className="fa-brands fa-github fa-xl"/></a>
      </div>
    </>
  );
}

export default Footer;