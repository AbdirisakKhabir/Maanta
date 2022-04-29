import React from 'react'
import '../Pages/team.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import carousel from 'react-elastic-carousel'

const Team = (props) => {

     //Owl Carousel Settings
     const options = {
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 2200,
      smartSpeed: 450,
      nav: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 3
          }
      }
  };


  return (
    <div className='team' id='Team'>
        <h2 className='title'>My Teams</h2>
        <p className='small'>Who With Me</p>
       
        <div className='carousel owl-carousel' >
     
        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
      {props.MyTeam.length === 0 ?

       <div className='card'>
       <div className='box'>
       <img src={props.MyTeam.image}  alt="Team Image" />
       <div class="text">{props.MyTeam.name}</div>
        <p>{props.MyTeam.bio}</p>
        </div>
        </div>
        
        : props.MyTeam.map((oneTeam) => (
          
           <div className='card'>
               <div className='box'>
               <img src={oneTeam.image}  alt="Team Image" />
               <div class="text">{oneTeam.name}</div>
                <p>{oneTeam.bio}</p>
                
               </div>
           

            </div>
           
        ))}
            
            </OwlCarousel>


        </div>
       
    </div>
  )
}

export default Team;