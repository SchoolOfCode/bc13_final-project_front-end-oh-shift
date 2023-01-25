  import {useState , useEffect} from "react"
  
  /**
   * useGet custom hook aim is to fetch data to the backend to being able to display them and it sets the response to res.payload (alias games), and set the error if it's not able to access the data
   * @param {string} url - this is defined both in the homepage and in the games page allowing to fetch data from the database based on our queries
   * @returns a response and an error
   */
  export function useGet(url) {

    const [response, setResponse] = useState('')
    const [error, setError] = useState("")
    
    useEffect(()=> {
        
        fetch(url, {
            header: {Accept: "application/json" },
        })
        .then((res)=> res.json())
        .then((res)=> setResponse(res.payload))
        .catch((err)=> setError(err));

    },[url])


    return [response, error]


}