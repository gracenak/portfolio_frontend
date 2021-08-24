import React from 'react';
// import { bonVivant } from '../utils/projects'
import Project from './Project';
import '../styles/Projects.css'

const Projects = ({projects}) => {
    const card = projects && projects.map(project => 
        <Project key={project.title}
                 attributes={project}
        />)



    return(
        
        // <div className="projects-container">
        //      <div className="projects-scroller">
        //          <div className="image-container">
        //          <img src="https://i.pinimg.com/originals/3e/7a/08/3e7a08b130a6eb6ef1c923fbe13dbdf5.jpg" width = "300" height = "300" alt='Home'/>
        //          <div className="content-container">
        //          <div className="text-title">
        //             <p>Bon Vivant</p>
        //             <p>Visualize</p>
        //          </div>

            
        //              {card}
        //              <h2>Projects</h2>

                   
        //          </div>
        //      </div>
        //      </div>
        //  </div>
        <div class="w3-container">
  <h2>Projects</h2>

  <div class="w3-card-4" >
    <img src="https://i.pinimg.com/originals/3e/7a/08/3e7a08b130a6eb6ef1c923fbe13dbdf5.jpg" alt="bon-vivant" width="300" height="300"  />
    <div class="w3-container w3-center">
      <p>Bon Vivant</p>
    </div>
</div>

    <div class="w3-card-4" >
    <img src="https://media.giphy.com/media/tP7n5MgP1y5dC/giphy.gif" alt="visualize" width="300" height="300"  />
    <div class="w3-container w3-center">
      <p>Visualize</p>
    </div>

  
</div>
</div>
    )

}

export default Projects
