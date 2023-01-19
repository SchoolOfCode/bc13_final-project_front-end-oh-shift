import React from "react";
import Badge from "../../Badge/Badge";

function About({ image, description, rules, title }) {
  return (
    <div>
      <div
        className="card w-96 bg-base-100 shadow-xl"
        style={{
          marginBottom: "2rem",
          maxWidth: "400px",
          maxHeight: "100%"
        }}
      >
        <figure>
          <img style={{ width: "100%", maxHeight:"11rem"}} src={image} alt="game image" />
        </figure>
        <div style={{padding:"32px"}}>
        <h2 className="card-title" style={{ marginBottom: "1rem" }}>
          {title}
        </h2>
        <h3 style={{ marginBottom: "0.5rem" }}>
          <b>Description</b>
        </h3>
        <p style={{ marginBottom: "1rem" }}>{description}</p>
        <h3 style={{ marginBottom: "0.5rem" }}>
          <b>Rules</b>
        </h3>
        <p>{rules}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
