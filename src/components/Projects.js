import React from 'react';
// import { bonVivant } from '../utils/projects'
import Project from './Project';

const Projects = ({projects}) => {
    const card = projects && projects.map(project => 
        <Project key={project.title}
                 attributes={project}
        />)

    return(
        <div className="projects-container">
            <div className="projects-scroller">
            <div className="content-container">
                <div className="image-container">
                <div className="text-container">
                    {card}
                    {/* {bonVivant} */}
                    <h2>Projects</h2>
                    <p>Bon Vivant</p>
                    <p>Visualize</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )

}

export default Projects
