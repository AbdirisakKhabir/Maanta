import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Skills from './Pages/Skills';
import Team from './Pages/Team';
import Projects from './Pages/Projects';
import Data from './components/Data';
import ProjectData from './components/ProjectData';
import Footer from './Pages/Footer';



function App() {
  const [teamData, setTeamData] = useState(Data);
  const [projectData, setProjectData] = useState(ProjectData);
  return (
    <div className="App">
            
  
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skills />
        <Team MyTeam={teamData} />
        <Projects MyProjects={projectData} />
        <Contact />
        <Footer />
 </div>
   ); 
}
 

export default App;
