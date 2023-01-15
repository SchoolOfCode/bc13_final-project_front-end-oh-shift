import React from 'react'

function FiterBar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        className="drawer-content"
      >
        <label htmlFor="my-drawer" className="btn btn-secondary drawer-button">
          Filter By
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <a>No. of Players</a>
          </li>
          <li>
            <a>Difficulty</a>
          </li>
          <li>
            <a>Age</a>
          </li>
          <li>
            <a>Duration</a>
          </li>
          <li>
            <a>Genre</a>
          </li>
          <li>
            <a>Review</a>
          </li>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"center", paddingTop:"10rem", gap:"2rem"}}>
            <button className="btn btn-active btn-primary" style={{height:"2rem", width:"8rem"}}>Search</button>
            <button style={{height:"2rem", width:"8rem", marginRight:"1rem"}} className="btn btn-neutral btn-outline btn-primary">Clear</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default FiterBar