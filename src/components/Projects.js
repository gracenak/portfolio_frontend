import React from 'react';
import projects from '../utils/projects'

const Projects = ({projects}) => {

    const card = projects && projects.map(project => {

    })

    return(
        {projects.map()}
        <div className="projects-container">
            <div className="projects-scroller">
            <div className="content-container">
                <div className="image-container">
                <div className="text-container">
                    <h2>Projects</h2>
                    <p>{bonVivant.title}</p>
                </div>
                </div>
            </div> 
            </div>
        </div>
    )

}

export default Projects
