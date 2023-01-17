import React from "react";
import Gamecard from "../Gamecard/gamecard";

function GameCardList({games}) {
console.log('gamCardList', games)

  return (
    <div>
      {games.map((game) => (
        <Gamecard game={game} key={game.id}/>
      ))}

    </div>
  );
}

export default GameCardList;
