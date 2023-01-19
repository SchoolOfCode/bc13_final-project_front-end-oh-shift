import React from 'react'
import Badge from '../../Badge/Badge'

function About({description, location, title}) {
  return (
    <div>
    <div
      className="card w-96 bg-base-100 shadow-xl"
      style={{ marginBottom: "2rem", maxWidth: "400px", maxHeight: "500px", padding:"32px"}}
    >
    <h2 className="card-title" style={{marginBottom:"1rem"}}>{title}</h2>
    <h3 style={{marginBottom:"0.5rem"}}><b>Description</b></h3>
    <p style={{marginBottom:"1rem"}}>{description}</p>
    <h3 style={{marginBottom:"0.5rem"}}><b>Location</b></h3>
    <Badge 
              key={location}
              label={location}
            />
    </div>
    </div>
  )
}

export default About