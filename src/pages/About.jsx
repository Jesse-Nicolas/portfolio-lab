import '../styles/about.css'
import winery from '../assets/winery.jpg'
import tahoe from '../assets/tahoe.jpg'

const About = () => {
  return ( 
    <>
      <h1>About Me</h1>
      <div className='branding-statement'>
        <p>I am a dedicated problem solver and lover of fixing things, seeking a role as a software engineer. I enjoy working with and communicating complex ideas to build practical, user-focused products. My experience in education, logic, and ethics has allowed me to develop the skills to be an effective engineer and teammate. I have a deep appreciation for elegant solutions and designs, and I strive to create in a way that reflects such minimalism and utility.</p>
      </div>
      <div id='photos-container'>
        <img src={tahoe} alt="tahoe fire lookout" />
        <img src={winery} alt="at a winery" />
      </div>
    </> 
  );
}

export default About