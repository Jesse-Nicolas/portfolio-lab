import '../styles/contact.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'

const Contact = () => {
  return (  
    <>
      <h1>Contact</h1>
      <div className='page-content'>
        <ContactForm />
        <div className='links'>
          <a href="https://github.com/Jesse-Nicolas">
            <div className='img-container' style={{backgroundImage: `url(${github})`}}>
              <h2 id='light'>github</h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/jesse-nicolas/">
            <div className='img-container' style={{backgroundImage: `url(${linkedin})`}}>
              <h2 id='dark'>LinkedIn</h2>
            </div>
          </a>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default Contact