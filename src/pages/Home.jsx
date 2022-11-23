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
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default Home