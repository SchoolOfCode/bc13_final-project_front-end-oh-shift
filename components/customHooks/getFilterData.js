//const [difficultyFilter, setDifficultyFilter] = useState([{value: "easy", label: "easy"}, {value: "intermediate", label: "intermediate"}, {value: "hard", label: "hard"}])

//async function getFilterData(category){
    //const res = await fetch(`https://stokka.onrender.com/api/games/filters/${category}`);
    //const data = await res.json()
    // setDifficultyFilter(data.payload)

 

      //for each difficulty in the data, create {value: difficulty[0], label: difficulty[0]} push to new array


      //setDifficultyFilter(newarray)


  //}

//it goes to the database for the filepath category
// it need to have distinct category
// function that takes in the category
// maps distinct value
//create empty options array and map through the data response and push the to the option array
/*
useEffect(() => {
  async function getFilterOptions(category, state) {
    const response = await fetch(
      `OUR BASE URL HERE${category}`,
      { method: "GET", headers: { accept: "application/JSON" } }
    );
    const data = await response.json();
      let filters = data.payload;
      let options = []
      for (let i = 0; i < filters.length; i++){
          let value = filters[i][category]
          let capitalisedValue = capitaliseWord(value)
          options.push({value: value, label: capitalisedValue
          })
  
        SETSTATEWHATEVER(options)
      }      
  }
*/
