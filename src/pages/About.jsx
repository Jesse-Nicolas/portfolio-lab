import '../styles/about.css'
import winery from '../assets/winery.jpg'

const About = () => {
  return ( 
    <>
      <h1>About Me</h1>
      <div className="about">
        <div className='branding-statement'>
          <p>Hi, I'm Jesse. I use tech like JavaScript, React, Node, Python, and Django to build full stack applications with SQL and noSQL databases. My background studying and tutoring Philosophy/Logic has proven my critical thinking, communication, and analytic skills; and developed my deep understanding of ethics and empathy. Fixing and tuning engines for over a decade has given me a unique sense for adaptation and resourcefulness, and a creative approach to problem solving. </p>
        </div>
        <div id='photos-container'>
          <img src={winery} alt="at a winery" />
        </div>
      </div>
    </> 
  );
}

export default About