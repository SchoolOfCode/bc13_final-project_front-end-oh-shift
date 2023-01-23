import React, { useEffect } from "react";
import { useState } from "react";
import NewGameCard from "../NewGameCard/NewGameCard";
import TextInput from "../TextInput/TextInput";

function AddNewGame(){
    const [searchTerm, setSearchTerm] = useState('')
    const [gameInfo, setGameInfo] = useState([])
    const [genres, setGenres] = useState([])
    const [genreList, setGenreList] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(()=>{
        async function getGameBySearch(searchTerm) {
          const response = await fetch(`https://api.boardgameatlas.com/api/search?name=${searchTerm}&pretty=true&client_id=n3dHy4VNyw&fuzzy_match=true`, {method: 'GET', headers: {accept: 'application/JSON'},})
          console.log('this is response', response)
          const data = await response.json() 
          console.log('this is data', data.games[0])
          setGameInfo(data.games[0])
          setGenres(data.games[0].categories);

          const genreresponse = await fetch(`https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=n3dHy4VNyw`, {method: 'GET', headers: {accept: 'application/JSON'},})
          const genredata = await genreresponse.json() 
          setGenreList(genredata.categories)
        }
        getGameBySearch(searchTerm)
      },[searchTerm])

    function getGenre(genreId){
        let id = genreList.find(genreid => genreid.id === genreId);
        let newgenrename = {...id}
        return newgenrename.name;
      }

    function getDifficulty(strategyScore, difficultyScore) {
        let average = (strategyScore+difficultyScore)/2
        if (average >= 4) {
            return 'hard'
        } if (average <= 2) {
            return 'easy'
        } else {
            return 'intermediate'
        }
    }

    function generateLocation(gameName) {
        if (gameName) {
        console.log('gameName', gameName)
        let firstLetter = gameName.charAt(0)
        let randomNumber = Math.floor(Math.random() * 50) + 1;
        return `Shelf ${firstLetter} Number ${randomNumber}`}
        else {
    return 'On the floor somewhere'}
    }

    function handleSubmit(){
        alert('Submit has been clicked!')
        object:
        {title: gameInfo}
    }

    function handleSearch(){
        
    }

    return(
        
        <>
        <h1>
            Add a New Game
        </h1>
        <TextInput placeholderText='Search for a game'onChange={(e)=> {setSearchValue(e.target.value)}}/>
        <button onClick={()=>{setSearchTerm(searchValue)}}>🔍</button>
        <button onClick={()=>{alert(searchValue)}}>🔍</button>
            {(gameInfo) ?
            <>
            <NewGameCard gameInfo={gameInfo} handleSubmit={handleSubmit} genres={genres} getDifficulty={getDifficulty} generateLocation={generateLocation} getGenre={getGenre}/>
            </>
            : 'there is nothing here'}
        </>
    )}


export default AddNewGame
