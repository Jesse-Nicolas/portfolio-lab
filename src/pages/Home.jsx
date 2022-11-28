import '../styles/home.css'
import reclining from '../assets/reclining.jpg'

const Home = () => {
  return (  
    <>
      <div className='page-content'>
        <div id='intro'>
          <img id="homepicture" src={reclining} alt="reclining in yellowstone" />
          <p className="typewriter">I'm Jesse, a full-stack Software Engineer.</p>
        </div>
      </div>
    </>
  );
}

export default Home