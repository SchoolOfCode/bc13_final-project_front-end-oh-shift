import { stringify } from "postcss";
import { React, useState, useEffect } from "react";
import FilterBar from "../FilterBar/filterBar";
import GameCardList from "../GameCardLIst/gameCardList";
import dummydata from "../dummydata.json";
function Display() {


const [games, setGames] = useState([]);
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
async function getData(){
  const res = await fetch("https://stokka.onrender.com/api/games/");
  const data = await res.json()
  setGames(data.payload)
  console.log("get data function running", data.payload)
}

useEffect(() => {
  getData();
  console.log(games)
}, []);
// function Display() {
//   const games = dummydata.payload
//   console.log("Dummy Data: " + dummydata.payload[0].minimum_age);

  return (
    <>
      <div>
        <FilterBar games={games}/>
      </div>
    </>
  )
  ;
}

export default Display;
