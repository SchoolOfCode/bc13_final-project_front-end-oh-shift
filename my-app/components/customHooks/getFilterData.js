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

    let options = []

    for (let i = 0; i < response.length; i++){
        let value = response[i][category]
        options.push({value: value, label: capitaliseWord(value)
        })
    }
    console.log('getFilterData called', options)
      return options
  }


