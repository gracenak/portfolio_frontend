import React from 'react'

const Project = (data) => {
    return(
        <div className="content-container">
            <div className="text-container">
                <h2>{data.project.title}</h2>
            </div>
        </div>
    )
}

export default Project