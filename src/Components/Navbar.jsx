import { Link } from "react-router-dom";

const NavBar = () => {
  return (  
    <>
      <nav>
        <Link className='navlink' id='home-link' to='/'>Jesse Nicolas</Link>
        <Link className='navlink' to='/contact'>Contact</Link>
        <Link className='navlink' to='/about'>About</Link>
        <Link className='navlink' to='/resume'>Resume</Link>
      </nav>
    </>
  );
}

export default NavBar;