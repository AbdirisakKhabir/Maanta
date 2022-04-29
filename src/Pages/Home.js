import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TypeWriter from "typewriter-effect";
import "../Pages/Home.css";
function Home() {

  const [state] = useState ({
    title:"Hello, My Name Is",
    titleTwo:"Abdirisak Ahmed",
    titleThree:"And I'm"
    
  })
  
  
  return (

    <div className='home' id='Home'>
    <div className='home-intro'>
   

        <div className='home-content'>
          <div className='title'>{state.title} </div>
          <div className='titleTwo'>{state.titleTwo}</div>
          <div className='titleThree'>{state.titleThree}<span className='typing'>
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
            <div >
           <Link to="/Contact" className='contact-button'>Contact Me</Link>
            </div>

          </div>
          
         
        </div>

        </div>
  )
}

export default Home;