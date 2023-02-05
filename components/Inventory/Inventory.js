import Table from "../Table/Table.js";
import { useGet } from "../customHooks/useGet";
import { useState, useEffect } from "react";
import TextInput from "../TextInput/TextInput.js";

export default function Inventory(){
    const [headers, setHeaders] = useState([])
    const [games, setGames] = useState([]);
    const [gamesListUpdated, setGamesListUpdated] = useState(false)
    const [parameters, setParameters] = useState('')
    const [response, error] = useGet(
    `https://stokka.onrender.com/api/games${parameters}`
  );

  useEffect(() => {
    setGames(response);
    console.log('PARAMS>>', parameters)
  }, [response, parameters, gamesListUpdated]);

  function handleDelete(id){
    console.log('handledelete called')
    console.log(id)
    let gameIndex = games.findIndex(game => game.id===id)
    console.log(gameIndex)
    console.log(games.length)
    games.splice(gameIndex, 1)
    console.log(games.length)
    setGamesListUpdated(!gamesListUpdated)
  }

  function handleSave(){
    alert('handle save!')
  }


return (
    <>
    <Table
            headers={[<TextInput key='textInput' handleTextInput={(e)=>setParameters(`?title=${e.target.value}`)} placeholderText={`Search ${games.length} games`}/>, 'Location', 'Quantity', 'Options']}
            games={games}
            handleDelete={handleDelete}
            handleSave={handleSave}
        />
    </>
)

}