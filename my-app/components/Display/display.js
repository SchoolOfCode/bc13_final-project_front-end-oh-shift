import React from 'react'
import axios from "axios"
import FilterBar from "../FilterBar/filterBar"
import { useState, useEffect } from 'react';
import GameCardList from "../GameCardLIst/gameCardList"
// function Display() {

  // const [games, setGames] = useState();
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
  function Display(){
// function getData(){
// const [ games, setGames ] = useState ("")
const axiosTest = () => {
 axios.get ("https://oh-shift.onrender.com/api/games/").then((res) => {
setGames (res.data.payload)
 });
};
useEffect(()=> {
  axiosTest();
}, [])
  return (
    (games) ? 
  <>
  
    <div><FilterBar/></div>
    <GameCardList games={games}></GameCardList>
    
</>
: <p>Sorry, no results found. Lower your standards and reduce your filter options!</p>
  )
}
  

export default Display