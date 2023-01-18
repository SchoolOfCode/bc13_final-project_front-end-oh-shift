import {useState , useEffect} from "react"
import capitaliseWord from './capitaliseWord.js'


export async function getFilterData(category){

    const [response, setResponse] = useState('')
    const [error, setError] = useState("")

    useEffect(()=> {
        
        fetch(`https://stokka.onrender.com/api/games/filters/${category}`, {
            header: {Accept: "application/json" },
        })
        .then((res)=> res.json())
        .then((res)=> setResponse(res.payload))
        .catch((err)=> setError(err));

    },[category])


    console.log('getFilterData called', options)
      return [response, error]
  }


