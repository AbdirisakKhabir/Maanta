import React, { useState } from 'react'
import { Route, Switch} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import Projects from '../Pages/Projects';
import Team from '../Pages/Team';
import Data from './Data';
import ProjectData from './ProjectData'

function Body() {
  const [teamData, setTeamData] = useState(Data);
  const [projectData, setProjectData] = useState(ProjectData)
  return (
    <div>
     



      
    </div>
 
    
  )
}

export default Body