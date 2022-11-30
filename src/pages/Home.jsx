import '../styles/home.css'
import reclining from '../assets/reclining.jpg'

const Home = () => {
  return (  
    <>
      <div className='page-content'>
        <div id='intro'>
          <img id="homepicture" src={reclining} alt="reclining in yellowstone" />
          <div id='welcome'>
            <p>I'm Jesse,</p>
            <p className="typewriter">full-stack Software Engineer.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home