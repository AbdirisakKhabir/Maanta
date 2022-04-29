import React from 'react'
import { Link } from 'react-router-dom';
import TypeWriter from "typewriter-effect";
import myImage from  "../images/MyPic.jpg";
import "../Pages/about.css";
function About() {
  return (
    <div className='about' id='About'>
         <h2 class="title">About Me</h2>
         <p className='small'>Who I Am</p>
      
         <div className='about-content'>
              <div className="column-left">
      <img src={myImage}  alt="My Picture"/>

              </div>
              <div className='column-right'>
                  <div className='text'> I'm Abdirisak Ahmed and I'm <span>
                  <TypeWriter 
           options={{
             autoStart:true,
             loop:true,
             delay:50,
             strings :[
              "Blogger .",
              "Developer .",
              "Tech Enthusiast .",
              "Youtuber .",
              "Freelancer .",
              "UI/UX Designer"
             ],

           }}
           />
          </span>
                  
          </div>
          <p>

          Hello, My Name is Abdirisak Ahmed Full Stack Software Developer with Computer Programming Exprience and  Many Technologies Such as ReactJS and Redux in Frontend and NodeJS, PHP and ASP.net For Backend, i Have a Great Knowledge about A Basics Such HTML, CSS and JavaScript. Also i Have Knowledge About Version Control System GIT and Github. I'm a Blogger, Freelancer, Technology Enthusiast and UI/UX Designer.

          </p>
          <Link to="/Contact" className='about-button'>Contact Me</Link>
              </div>

         </div>
        </div>
  )
}

export default About;
