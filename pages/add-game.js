import React, { useEffect } from "react";
import { useState } from "react";


function addGame(){
    const [searchTerm, setSearchTerm] = useState('')
    const [gameInfo, setGameInfo] = useState([])
    const [genres, setGenres] = useState([])
    const [genreList, setGenreList] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(()=>{
        async function getGameBySearch() {
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
        getGameBySearch()
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
    }


    return(
        <>
        <h1>
            Add a New Game
        </h1>
        <input
			type='text'
			placeholder='search for a game'
			className='search-bar'
			id='search-bar'
            onChange={(e)=> {setSearchValue(e.target.value)}}
		></input>
        <button onClick={()=>{setSearchTerm(searchValue)}}>🔍</button>
            {(gameInfo) ?
            <>
            <form onSubmit={handleSubmit}>
            <label>title:</label>
            <input value={gameInfo.name}></input>
            <br></br>
            <label>year_published:</label>
            <input value={gameInfo.year_published}></input>
            <br></br>
            <label>quantity:</label>
            <input type='number' placeholder='enter stock quantity'></input>
            <br></br>
            <label>minimum_players:</label>
            <input type='number' defaultValue={gameInfo.min_players}></input>
            <br></br>
            <label>maximum_players: </label>
            <input type='number' defaultValue={gameInfo.max_players}></input>
            <br></br>
            <label>genre:</label>
            {genres.map((genre)=> 
                <>
                <input type='text'
                 defaultValue={getGenre(genre.id)} ></input>
                </>
            )}
            <br></br>
            <label>duration:</label>
            <input type='number' defaultValue={gameInfo.max_playtime}></input>
            <br></br>
            <label>difficulty:</label>
            <select defaultValue={getDifficulty(gameInfo.average_learning_complexity, gameInfo.average_strategy_complexity)}>
                <option value='easy'>Easy</option>
                <option value='intermediate'>Intermediate</option>
                <option value='hard'>Hard</option>

            </select>
            <br></br>
            <label>minimum_age:</label><input type='number' defaultValue={gameInfo.min_age}></input>
            <br></br>
            <label>description: </label>
            <textarea style={{width:'95vw', height: '20vw', backgroundColor:'lightgray' }} defaultValue={gameInfo.description_preview} ></textarea>
            <br></br>
            <label>packaging_image_url:
            </label>
            <img src={gameInfo.image_url}/>
            <br></br>
            <label>artwork_image_url:
            </label>
            <img src={gameInfo.image_url}/>
            <br></br>
            <label>rules:</label>
            <a href={gameInfo.rules_url}>view rules</a>
            <br></br>
            <label>barcode:</label>
            <input defaultValue={gameInfo.upc}></input>
            <br></br>
            <label>location:</label>
            <input defaultValue={generateLocation(gameInfo.name)}></input>
            <br></br>
            <label>video_rules:</label>
            <a href={`https://www.youtube.com/results?search_query=how+to+play+${gameInfo.name}`}>link</a>
            <br></br>
            <button onClick={handleSubmit}>ADD TO DATABASE</button>
            </form>
            </>
            : 'there is nothing here'}
        </>
    )
}

export default addGame