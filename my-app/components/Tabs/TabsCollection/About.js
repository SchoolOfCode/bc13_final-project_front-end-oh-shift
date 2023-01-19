import React from "react";
import Badge from "../../Badge/Badge";

function About({ image, description, rules, title }) {
  return (
    <div>
      <div
        className="card w-96 bg-base-100 shadow-xl bg-zinc-200"
        style={{
          marginBottom: "2rem",
          maxWidth: "400px",
          maxHeight: "30rem",
          overflow: 'auto',
          borderTopLeftRadius: "0px"
        }}
      >
        <div style={{padding:"32px"}}>
        <h2 className="card-title" style={{ marginBottom: "1rem" }}>
          {title}
        </h2>
        <figure>
          <img style={{ width: "100%", maxHeight:"14rem", marginBottom:"1rem"}} src={image} alt="game image" />
        </figure>
        <h3 style={{ marginBottom: "0.5rem" }}>
          <b>Description</b>
        </h3>
        <p style={{ marginBottom: "1rem" }}>{description}</p>
        <h3 style={{ marginBottom: "0.5rem" }}>
          <b>Rules</b>
        </h3>
        <p style={{overflow: 'scroll'}}>{rules}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
