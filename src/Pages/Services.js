import React from 'react'
import "../Pages/services.css";
function Services() {
  return (
    <div className='services' id='Services'>
        <h2 class="title">My services</h2>
        <p className='small'>What I Provide</p>
      <div className='services-content'>
    
      <div className='card'>
        <div className='box'>
        <i class="fas fa-paint-brush"></i>
        <div className='text'>
        Web Design
        </div>
        <p>I'm  UI/UX Designer With Figma, Adobe XD,Photoshop and HTML and CSS </p>

        </div>
        
      </div>

    

      <div className='card'>
        <div className='box'>
        <i className="fas fa-code"></i>
        <div className='text'>Web Development</div>
        <p>I'm a Full Stack Web Developer With ReactJS in Frontend and NodeJS With Backend .</p>

        </div>


      </div>

      <div className='card'> 
      <div className='box'>
    
      <i class="fa fa-mobile" aria-hidden="true"></i>
      <div className='text'>Mobile Apps</div>
      <p>I'm a Full Stack Mobile App Developer With React Native and Flutter.</p>
      </div>


      </div>
      </div>
        </div>
  )
}

export default Services