import React, {useState, useContext} from "react";
import Badge from "../../Badge/Badge";
import {DarkModeWrapper} from '../../../pages/_app'
import Stars from "../../Stars/Stars";

function Summary({ game }) {
  let {darkMode,setDarkMode}= useContext(DarkModeWrapper)
  //   let description = game.description;

  // let wordCount = 20;
  // let words = description.split(" ");
  // let shortDescription = words.slice(0, wordCount).join(" ") + "...";

  return (

    <div className="cardWrapper mx-auto" style={{position:"relative"}}>
      <div 
        className= {darkMode ? "card w-96 bg-base-100 shadow-xl bg-accent" : "card w-96 bg-base-100 shadow-xl bg-zinc-200" }
        style={{
          marginBottom: "2rem",
          maxWidth: "400px",
          maxHeight: "500px",
          borderTopLeftRadius: "0px",
          marginRight: '0px',
          marginLeft: '0px'
        }}
      >
        <figure>
          <img
            className="w-full"

            src={game.packaging_image_url}
            alt="game image"
          />
        </figure>
        <div className="card-body">
          <h2 className= {darkMode? "card-title text-quicksand text-white" :"card-title text-quicksand text-accent" }>{game.title}</h2>
          
          {/* <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          <div className="badgecontainer"> */}
          <div

            className="badgeFamily flex flex-wrap"
            style={{
              // display: "flex",
              flexDirection: "Row",
              // flexWrap: "wrap",

              gap: "0.2rem",
            }}
          >
            <Badge
              key={game.minimum_players}
              label={`${game.minimum_players}-${game.maximum_players} players`}
            />
            <Badge key={game.difficulty} label={game.difficulty} />
            <Badge key={game.minimum_age} label={`Age ${game.minimum_age}+`} />
            <Badge key={game.duration} label={`${game.duration} mins`} />
            {game.genre?.map((gameGenre) => {
              return <Badge key={gameGenre} label={gameGenre} />;
            })}
            
          </div>

          <h3 className={darkMode? "text-quicksand text-white" :"text-quicksand text-accent" } style={{ marginTop: "2rem" }}>
            <b>Location</b>
          </h3>
          <div className="location">
            <p
              className="bg-orange-500 text-center p-2 rounded-md"
              style={{
                border: "solid 1px white",
                borderRadius: "5px",
                width: "10.1rem",
                height: "2rem",
                textAlign: "center",
                position: "relative",
                top: "50%",
                left: "49%",
                transform: "translate(-100%, -10%)",
                paddingTop: "0.2rem",
              }}
            >
              {game.location}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Summary;
