import React from "react";
import Gamecard from "../Gamecard/gamecard";
import { useState, useEffect } from "react";
import Card from "../Card/Card.js";

function GamecardList({games}) {
console.log('gamCardList', games)

  return (
    <div>
      {games.map((game) => (
        <Card game={game} key={game.id}/>
      ))}

    </div>
  );
}

export default GamecardList;
