import { Link } from "react-router-dom";

const NavBar = () => {
  return (  
    <>
      <nav><ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
      </ul></nav>
    </>
  );
}

export default NavBar;