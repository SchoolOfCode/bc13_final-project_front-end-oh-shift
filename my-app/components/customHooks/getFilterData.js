const [difficultyFilter, setDifficultyFilter] = useState([{value: "easy", label: "easy"}, {value: "intermediate", label: "intermediate"}, {value: "hard", label: "hard"}])

async function getFilterData(category){
    const res = await fetch(`https://stokka.onrender.com/api/games/filters/${category}`);
    const data = await res.json()
    // setDifficultyFilter(data.payload)

 

      for each difficulty in the data, create {value: difficulty[0], label: difficulty[0]} push to new array


      setDifficultyFilter(newarray)


  }


