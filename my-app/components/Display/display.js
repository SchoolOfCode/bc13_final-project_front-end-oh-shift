import { stringify } from "postcss";
import { React, useState } from "react";
import FilterBar from "../FilterBar/filterBar";
import GameCardList from "../GameCardLIst/gameCardList";
import dummydata from "../dummydata.json";
// function Display() {

//const [games, setGames] = useState([]);
// const [genreFilter, setGenreFilter] = useState('');
// const [numberOfPlayersFilter, setNumberOfPlayersFilter] = useState('');

// const fetchUrl = 'https://oh-shift.onrender.com/api/games/'

// async function getData() {
//   const res = await fetch(`${fetchUrl}?genre=${genreFilter}&number_of_players=${numberOfPlayersFilter}`);
//   const data = await res.json();
//   setGames(data.payload);
//   console.log('getData called')
//   console.log("this is", games)
//   console.log(`${fetchUrl}?genre=${genreFilter}&number_of_players=${numberOfPlayersFilter}`)
// }

// async function getData(){
//   const res = await fetch("https://oh-shift.onrender.com/api/games/");
//   const data = res.json()
//   setGames(data.payload)
// }

// useEffect(() => {
//   getData();
// }, []);
function Display() {
  const games = dummydata.payload
  console.log("Dummy Data: " + dummydata.payload[0].minimum_age);

  return (games) ? 
    (<>
      <div>
        <FilterBar />
      </div>
      <GameCardList games={games}></GameCardList>
    </>)
     : <p>Sorry, no results found. Lower your standards and reduce your filter options!</p>
  ;
}

export default Display;
