import '../styles/home.css'
import reclining from '../assets/reclining.jpg'
import Footer from '../Components/Footer';

const Home = () => {
  return (  
    <>
      <div className='page-content'>
        <div id='intro'>
          <img id="homepicture" src={reclining} alt="reclining in yellowstone" />
          <p className="typewriter">I'm Jesse, a full-stack Software Engineer.</p>
        </div>
        <div className="icon-links">
      <a className="icon-link"href="https://www.linkedin.com">
      <i class="fa-brands fa-linkedin fa-xl"></i>
      </a>
      
      <a className="icon-link" href="https://www.github.com/jesse-nicolas"> <i class="fa-brands fa-github fa-xl"></i></a>
      </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default Home