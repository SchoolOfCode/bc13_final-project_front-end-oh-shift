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
      <div>
        {games.map((game) => (
          <Gamecard game={game} key={game.id} />
        ))}
      </div>
    </>
  ) : (
    ""
  );
}

export default GameCardList;
