import '../styles/about.css'
import winery from '../assets/winery.jpg'

const About = () => {
  return ( 
    <>
      <h1>About Me</h1>
      <div className="about">
        <div className='branding-statement'>
          <p>I’m a recent grad seeking a challenging software engineering job, and am excited to grow my technical abilities. I enjoy approaching a problem by peeling back layers of complexity to understand how a thing works and why it was designed the way it was, so that improvements can be made.</p><p> I started practicing this with poorly running engines over ten years ago, later on with complex long-form arguments in philosophy essays, and was even recognized for my logical reasoning skills when hired as my university’s Logic Tutor. Software engineering is the professional path that merges the communication and soft skills honed in my philosophy education with the methodical problem solving I’ve practiced for years, and I’m confident I would be a valuable investment in your engineering team.</p>
        </div>
        <div id='photos-container'>
          <img src={winery} alt="at a winery" />
        </div>
      </div>
    </> 
  );
}

export default About