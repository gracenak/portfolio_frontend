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
          <h2>
            <a href={bonVivant.link}>{bonVivant.title}</a>
          </h2>
          <h5>{bonVivant.description}</h5>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="w3-card-4">
        <img
          src="https://media.giphy.com/media/tP7n5MgP1y5dC/giphy.gif"
          alt="visualize"
          width="300"
          height="300"
        />
        <div className="w3-container w3-center">
          <p>{visualize && visualize.title}</p>
          <h4>
            A collaborative vision board application that allows users to share
            their aspirations and motivations{visualize && visualize.summary}
          </h4>
          <a href={visualize.link}>{visualize.title}</a>
          <li>{visualize}</li>
          <li>Employed PostgreSQL & serializers</li>
          <li>
            Integrated ES6+, Object-oriented JavaScript classes & functions to
            encapsulate related data and behavior
          </li>
          <li>Utilized Bootstrap & custom CSS to style frontend</li>
        </div>
      </div>
    </div> */
}
//   );
// };

export default Projects;

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
