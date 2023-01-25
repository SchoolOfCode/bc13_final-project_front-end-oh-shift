  import {useState , useEffect} from "react"
  
  export function useGet(url) {

    const [response, setResponse] = useState('')
    const [error, setError] = useState("")
    
    useEffect(()=> {
        try {
            fetch(url, {
                header: {Accept: "application/json" },
            })
            .then((res)=> res.json())
            .then((res)=> setResponse(res.payload))
            .catch((err)=> setError(err));
            
        } catch (error) {
            
        }

    },[url])


    return [response, error]


}