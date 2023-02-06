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
    const [newGame, setNewGame] = useState({title: '', year_published: '', quantity: '', minimum_players: '', maximum_players: '', genre: [], duration: '', difficulty: '', minimum_age: '', description: '', packaging_image_url: '', artwork_image_url: '', rules: '', barcode: '', location: '', video_rules: ''})


    useEffect(()=>{
        console.log('this is search term', searchTerm)
        async function getGameBySearch(searchTerm) {
          const response = await fetch(`https://api.boardgameatlas.com/api/search?name=${searchTerm}&pretty=true&client_id=n3dHy4VNyw&fuzzy_match=true`, {method: 'GET', headers: {accept: 'application/JSON'},})
          console.log('this is response', response)
          const data = await response.json() 
          console.log('this is data', data.games)
          setGameInfo(data.games)
          setGenres(data.games.categories);

          const genreresponse = await fetch(`https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=n3dHy4VNyw`, {method: 'GET', headers: {accept: 'application/JSON'},})
          const genredata = await genreresponse.json() 
          setGenreList(genredata.categories)
        }
        getGameBySearch(searchTerm)
      },[searchTerm])


    useEffect(()=>{
        async function postGame(newGame){
            if (newGame.title.length > 1) {
          await fetch('https://stokka.onrender.com/api/games', {
            method: 'POST',
            headers: {Accept: "application/json",
                    'Content-Type': 'application/json'},
            body: JSON.stringify(newGame)
          })
}
      }
    postGame(newGame)
    },[newGame])

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

    function handleSubmit(e){
let genreArray = []

console.log('handlesubmit function e', e)
        gameInfo.categories?.map((gameGenre) => {
            genreArray.push(getGenre(gameGenre.id).toLowerCase())
          })
        setNewGame({title: gameInfo.name, year_published: gameInfo.year_published, quantity: 1, minimum_players: gameInfo.min_players, maximum_players: gameInfo.max_players, genre: genreArray, duration: gameInfo.max_playtime, difficulty: getDifficulty(gameInfo.average_learning_complexity, gameInfo.average_strategy_complexity), minimum_age: gameInfo.min_age, description: gameInfo.description_preview, packaging_image_url: gameInfo.thumb_url, artwork_image_url: gameInfo.thumb_url, rules: gameInfo.rules_url, barcode: gameInfo.upc, location: generateLocation(gameInfo.name), video_rules: `https://www.youtube.com/results?search_query=how+to+play+${gameInfo.name}`})
    
    console.log('this is new game', newGame)

    }

    function handleTextInput(e){
        console.log(e.target.value)
            setSearchValue(e.target.value)
    }

    return(
        
        <>
        <h1>
            Add a New Game
        </h1>
        <TextInput placeholderText='Search for a game' handleTextInput={handleTextInput}/>
        {/* <button onClick={()=>{setSearchTerm(searchValue)}}>🔍</button> */}
        <button onClick={()=>console.log('searching!')}>🔍</button>
            {gameInfo.length > 0 ?
            
             gameInfo?.map((game)=>
             <>
            <NewGameCard key={game.upc} gameInfo={game} handleSubmit={handleSubmit} genres={genres} getDifficulty={getDifficulty} generateLocation={generateLocation} getGenre={getGenre}/>          
            </>)
            :
            <>
            <p>there is nothing here</p>
            </>
            }
        </>
    )}


export default AddNewGame
