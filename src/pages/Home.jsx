import '../styles/home.css'
import reclining from '../assets/reclining.jpg'

const Home = () => {
  return (  
    <>
      <div className='page-content'>
        <h2 id='greeting'>hello, world!</h2>
        <img src={reclining} alt="reclining in yellowstone" />
        <h1 id='intro'>I'm Jesse Nicolas, <br />your new Software Engineer.</h1>
      </div>
    </>
  );
}

export default Home