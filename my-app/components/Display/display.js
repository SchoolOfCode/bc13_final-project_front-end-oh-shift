import React from 'react'
import FilterBar from '../FilterBar/fiterBar'
import { useState, useEffect } from 'react';
import GamecardList from '../GameCardLIst/gamCardList'

function Display() {

  const [games, setGames] = useState();
  const [genreFilter, setGenreFilter] = useState('');
  const [numberOfPlayersFilter, setNumberOfPlayersFilter] = useState('');

  const fetchUrl = 'https://oh-shift.onrender.com/api/games/'

  async function getData() {
    const res = await fetch(`${fetchUrl}?genre=${genreFilter}&number_of_players=${numberOfPlayersFilter}`);
    const data = await res.json();
    setGames(data.payload);
    console.log('getData called')
    console.log(games)
    console.log(`${fetchUrl}?genre=${genreFilter}&number_of_players=${numberOfPlayersFilter}`)
  }
  
  useEffect(() => {
    getData();
  }, []);


  return (
    (games) ? 
  <>
  
    <div><FilterBar/></div>
    <GamecardList games={games}></GamecardList>
    
</>
: <p>Sorry, no results found. Lower your standards and reduce your filter options!</p>
  )
}

export default Display