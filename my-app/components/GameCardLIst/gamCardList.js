import React from "react";
import Gamecard from "../Gamecard/gamecard";
import { useState, useEffect } from "react";

function GamecardList() {
  const [games, setGames] = useState([]);

  async function getData() {
    const res = await fetch("");
    const data = await res.json();
    setGames(data.payload);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {games.map((game) => (
        <Gamecard game={game} />
      ))}
    </div>
  );
}

export default GamecardList;
