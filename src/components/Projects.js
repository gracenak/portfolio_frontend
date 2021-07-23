import React from 'react';
import { bonVivant } from '../utils/projects'
import Project from './Project';

const Projects = () => {

    return(
        <div className="projects-container">
            <div className="projects-scroller">
            <div className="content-container">
                <div className="image-container">
                <div className="text-container">
                    <h2>Projects</h2>
                    <Project project={bonVivant} />
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
