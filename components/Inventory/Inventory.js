import Table from "../Table/Table.js";
import { useGet } from "../customHooks/useGet";
import { useState, useEffect } from "react";
import TextInput from "../TextInput/TextInput.js";

export default function Inventory(){
    const [headers, setHeaders] = useState([])
    const [games, setGames] = useState([]);
    const [parameters, setParameters] = useState('')
    const [response, error] = useGet(
    `https://stokka.onrender.com/api/games${parameters}`
  );

  useEffect(() => {
    setGames(response);
    console.log('PARAMS>>', parameters)
  }, [response, parameters]);


return (
    <>
    <Table
            headers={[<TextInput key='textInput' handleTextInput={(e)=>setParameters(`?title=${e.target.value}`)} placeholderText={'Search game library'}/>, 'Location', 'Quantity', 'Options']}
            games={games}
        />
    </>
)

}