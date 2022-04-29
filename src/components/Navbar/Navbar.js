import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "../Navbar/navbar.css"
function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    
        <nav className='navbar'>
       
       <div className='nav-container'>
           <NavLink exact to="/" className="nav-logo">
           <i className="fas fa-code"></i>
        Abdirisak <span>Ahmed</span>
        
                 </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"} >

            <li className='nav-item'>
                <Link smooth
                to="#Home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
                    Home

                </Link>
                </li>    

                  <li className='nav-item'>
                <Link  
               smooth 
               to='#About'
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
                    About

                </Link>
                </li> 

                  <li className='nav-item'>
                <Link smooth
                to="#Services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
                Services 

                </Link>
                </li>  

                <li className='nav-item'>
                <Link smooth
                to="#Skills"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
                Skills 

                </Link>
                </li>

                <li className='nav-item'>
                <Link smooth
                to="#Team"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
                    Team

                </Link>
                </li>

                <li className='nav-item'>
                <Link smooth
                to="#Projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
                Projects 

                </Link>
                </li>

                <li className='nav-item'>
                <Link smooth
                to="#Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
                    Contact

                </Link>
                </li> 

                


        </ul>
        <div className='nav-icon' onClick={handleClick}> 
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div> 

       </div>
        </nav>

  
  )
}

export default Navbar;