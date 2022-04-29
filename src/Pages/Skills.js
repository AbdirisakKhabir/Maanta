import React from 'react'
import {Link } from 'react-router-dom';
import "../Pages/skills.css"

function Skills() {
  return (
    <div className='skills' id='Skills'>
         <h2 class="title">My skills</h2>
        <p className='small'>What I Know</p>
        <div className='skills-content'>
          <div className='column left'>
              <div className='text'> My Creative Skills & Experiences. </div>
              <p>Thinking about software development as a creative career can be something hard to visualize, especially when talking about a field that requires technical knowledge.
                  So i Have alot of Creative Skills and Experiences such As HTML, CSS, JavaScript and ReactJS Library for Using Frontend Technology. Also I Have alot Of Knowledge and Skills about NodeJS and PHP for Backend Technology and Alot of Knowledge and Skills About the MySQL For Database Technology
              </p>
              <Link to="/Contact" className='contact-button'>Contact Me</Link>
              
          </div>
              <div className='column right'>
              <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>75%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>React Js</span>
                            <span>75%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Node Js</span>
                            <span>70%</span>
                        </div>
                        <div class="line node"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>PHP</span>
                            <span>60%</span>
                        </div>
                        <div class="line php"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>70%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>

            </div>
        </div>
        </div>
  )
}

export default Skills;