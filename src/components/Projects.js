import React from "react";
// import { bonVivant } from '../utils/projects'
import Project from "./Project";
import "../styles/Projects.css";
import {
  bonVivant,
  visualize,
  freelanceApp,
  freelanceExpense,
  concertCli,
} from "../utils/projects";

const Projects = () => {
  return (
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
    <div className="w3-container">
      <h2>Projects</h2>

      <div className="w3-card-4">
        <img
          src="https://i.pinimg.com/originals/3e/7a/08/3e7a08b130a6eb6ef1c923fbe13dbdf5.jpg"
          alt="bon-vivant"
          width="300"
          height="300"
        />
        <div className="w3-container w3-center">
          <h2>{bonVivant && bonVivant.title}</h2>
          <h4>{bonVivant.description}</h4>
          <a href="https://github.com/gracenak/bon_vivant_frontend.git">
            {bonVivant && bonVivant.title}
          </a>
        </div>
      </div>

      <div className="w3-card-4">
        <img
          src="https://media.giphy.com/media/tP7n5MgP1y5dC/giphy.gif"
          alt="visualize"
          width="300"
          height="300"
        />
        <div className="w3-container w3-center">
          <p>Visualize</p>
          <h4>
            A collaborative vision board application that allows users to share
            their aspirations and motivations{" "}
          </h4>
          <a href="https://github.com/gracenak/visualize_frontend.git">
            Visualize
          </a>
          <li>
            Built MVP SPA using JavaScript frontend and Rails API backend,
            demonstrating client server communication
          </li>
          <li>Employed PostgreSQL & serializers</li>
          <li>
            Integrated ES6+, Object-oriented JavaScript classes & functions to
            encapsulate related data and behavior
          </li>
          <li>Utilized Bootstrap & custom CSS to style frontend</li>
        </div>
      </div>
    </div>
  );
};

export default Projects;
