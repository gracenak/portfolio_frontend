import React from 'react'

const Project = (data) => {
    return(
        <div className="project-card">
            <div className="text-container">
                <h2>{data.title}</h2>
            </div>
        </div>
    )
}

export default Project