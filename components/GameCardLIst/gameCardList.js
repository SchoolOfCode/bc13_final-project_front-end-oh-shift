import React from "react";
import Gamecard from "../Gamecard/gamecard";

/**
 *
 * @param {Object} games
 * @param {number} games.id
 * @returns a list of games from the GameCard component
 */

function GameCardList({ games }) {
  return games ? (
    <>
      <div className="bg-error flex flex-wrap content-center">

        {games.map((game) => (
          <>
          <div className="bg-info " >
          <Gamecard game={game} key={game.id} />
          </div>
          </>
        ))}
      </div>
    </>
  ) : (
    ""
  );
}

export default GameCardList;
