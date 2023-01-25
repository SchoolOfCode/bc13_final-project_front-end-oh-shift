import React, { useState, useContext } from "react";
import Badge from "../../Badge/Badge";
import { DarkModeWrapper } from "../../../pages/_app";
import Stars from "../../Stars/Stars";

/**
 *
 * @param {Object} game - database response fetched in '../../GameCardLIst'
 * @param {string} game.packaging_image_url - property from game returning an URL formated as a string
 * @param {string} game.title - property from game returning a string
 * @param {number} game.minimum_players - property from game returning the minumum number of players able to play that game
 * @param {number} game.maximum_players - property from game returning the maximum number of players able to play that game
 * @param {string} game.difficulty - property from game returning the difficulty level string
 * @param {number} game.minumum_age - property from game returning the minumum age of the players able to play that game
 * @param {number} game.duration - property from game returning the maximum duration of the game as a number type
 * @param {string} game.genre - property from game returning the genre string
 * @param {string} game.location - property from game returning the location in the store string
 * @returns the base of the Summary page in the cards. An image of the game box, title of the game, characteristics and location
 */

function Summary({ game }) {
  let { darkMode, setDarkMode } = useContext(DarkModeWrapper);

  console.log(typeof game);

  return (
    <div className="cardWrapper mx-auto" style={{ position: "relative" }}>
      <div
        className={
          darkMode
            ? "card w-96 bg-base-100 shadow-xl bg-accent"
            : "card w-96 bg-base-100 shadow-xl bg-zinc-200"
        }
        style={{
          marginBottom: "2rem",
          maxWidth: "400px",
          maxHeight: "500px",
          borderTopLeftRadius: "0px",
          marginRight: "0px",
          marginLeft: "0px",
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
          <h2
            className={
              darkMode
                ? "card-title text-quicksand text-white"
                : "card-title text-quicksand text-accent"
            }
          >
            {game.title}
          </h2>
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

          <h3
            className={
              darkMode
                ? "text-quicksand text-white"
                : "text-quicksand text-accent"
            }
            style={{ marginTop: "2rem" }}
          >
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
