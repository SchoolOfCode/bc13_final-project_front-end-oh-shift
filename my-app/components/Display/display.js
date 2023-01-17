import { React, useState, useEffect } from "react";
import { useGet } from "../customHooks/useGet";
import FilterBar from "../FilterBar/filterBar";

function Display() {
const [response, error] = useGet('https://stokka.onrender.com/api/games/')
const [games, setGames] = useState([]);

useEffect(() => {
  setGames(response)
}, [response]);

console.log('this is games', games)

  return (games) ? (
    <>
      <div>
        <FilterBar games={response}/>
      </div>
    </>) : (<p>Sorry, no games found</p>
  )
  ;
}

export default Display;
