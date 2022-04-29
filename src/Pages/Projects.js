import React from 'react'
import todo from '../images/todo.jpg';
import '../Pages/projects.css'

function Projects(props) {
  return (
    <div className='project' id='Projects'>
    <h2 className='title'>My Projects</h2>
    <p className='small'>My Performance</p>
   <div className='project-content'>
      {props.MyProjects.map((oneProject) => (
            <div className='card'>
            <div className='card-img'>
               <img src={oneProject.image} alt='TodoList'/>
            </div>
            <div className='text'>{oneProject.name}</div>
       <p>{oneProject.bio}</p>
   
   
         </div>

      ))}
   </div>
   
</div>
)
}
  

export default Projects