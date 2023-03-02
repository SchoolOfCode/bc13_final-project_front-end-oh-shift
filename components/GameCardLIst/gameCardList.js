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
      <div className="overflow-auto flex flex-wrap justify-around ">
        {games.map((game) => (
          <>
          <div >
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
