import './styles/App.css';
import { projectData } from "./data/projects.js";
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Footer from './Components/Footer';

function App() {
return (
  <>
    <main>
      <NavBar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projects' element={<Projects projectData={projectData} />} />
      </Routes>
      <div className='footer'>
        <Footer />
      </div>
    </main>
  </>
  );
}

export default App;
