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
   {/* <div className='flex align-center justify-center content-center'>  */}
      <div className=" flex flex-wrap justify-around m-0 p-0">

        {games.map((game) => (
          <>
          <div >
          <Gamecard game={game} key={game.id} />
          </div>
          </>
        ))}
      </div>
          {/* </div> */}
    </>
  ) : (
    ""
  );
}

export default GameCardList;
