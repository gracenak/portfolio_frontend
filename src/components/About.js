import React from 'react'
import Headshot from '../images/Headshot.jpg'

class About extends React.Component {
    render() {
        return(
            <div>
                <div className="headshot">
                    <img src={Headshot} alt="Grace Yuiko Nakano" />
                </div>
                <p>
                    I am a Fullstack Software Engineer with a professional background as a classical violinist, 
                    serving as the Assistant Concertmaster of the Tucson Symphony Orchestra.
                </p>
                <p>
                    A recent graduate from the Flatiron School, I am passionate about integrating my skills and
                    interests into software development. 
                </p>
                <p>
                    Technical skills include React, Ruby on Rails, JavaScript ES6+, HTML & CSS, Sinatra
                    and usage of PostgreSQL and SQLite databases.
                </p>
                <p>
                    My aspiration to helps others and impact positive change; socially, economically, environmentally,
                    led me towards the career path as a software enginner. I want to help build creative solutions to 
                    problems on a larger scale through web development. 
                </p>
                <p>
                    Other passions include travel, food, hiking, yoga, and running. I am currently training
                    for my first marathon!(🙈 🤩) I love connecting with others, sharing ideas and collaborating
                    on projects.
                </p>
                <p>
                    "If you were born with 
                    the weakness to fail
                    you were born 
                    the strength to rise"
                    - Rupi Kaur
                </p>  
            </div>
        )
    }
}

export default About