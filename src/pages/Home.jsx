import '../styles/home.css'
import reclining from '../assets/reclining.jpg'

const Home = () => {
  return (  
    <>
      <h1>hello, world!</h1>
      <img src={reclining} alt="reclining in yellowstone" />
      <h2>I'm Jesse Nicolas, a Software Engineer.</h2>
    </>
  );
}

export default Home