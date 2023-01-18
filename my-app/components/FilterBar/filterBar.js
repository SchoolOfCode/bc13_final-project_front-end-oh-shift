import React, { useState, useEffect } from 'react'
import Dropdown from "../Dropdown/Dropdown.js";
import GameCardList from '../GameCardLIst/gameCardList.js';
import { useGet } from '../customHooks/useGet.js';
import capitaliseWord from '../customHooks/capitaliseWord.js';

function FilterBar() {
  const [difficultyOptions, setDifficultyOptions] = useState([])
  const [durationOptions, setDurationOptions] = useState([])
  const [genreOptions, setGenreOptions] = useState([])
  const [response, error] = useGet(`https://stokka.onrender.com/api/games`)
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('')
  const [selectedDifficulty, setselectedDifficulty] = useState('')
  const [selectedDuration, setselectedDuration] = useState('')
  const [selectedAge, setselectedAge] = useState('')
  const [selectedNumber_of_players, setselectedNumber_of_players] = useState('')
  const [searchClicked, setSearchClicked] = useState(false)
  
  useEffect(() => {
    setGames(response)
    setFilteredGames(response)
  }, [response]);

  useEffect(() => {
  function filterGames(games, criteria){
    console.log('games.difficulty', games)
    let filteredOptions = games.filter(
      game => game.difficulty === criteria
    )
    console.log('this is filtered games>>>>', filteredOptions)
      setFilteredGames(filteredOptions)
  } 
  filterGames(games, selectedDifficulty)
}, [searchClicked])

  useEffect(() => {
		async function getFilterOptions(category, state) {
			const response = await fetch(
				`https://stokka.onrender.com/api/games/filters/${category}`,
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
    
          state(options)
        }      
		}
		getFilterOptions('difficulty', setDifficultyOptions);
    getFilterOptions('duration', setDurationOptions);
    getFilterOptions('genre', setGenreOptions);
	}, []);

  // console.log('filterbar component rendering')


  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        className="drawer-content"
      >
      <div>
        <label htmlFor="my-drawer" className="btn btn-secondary drawer-button"
        onClick={()=> setSearchClicked(false)}>
          Filter By
        </label>
        <GameCardList games={filteredGames}/>
      </div>
        
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Dropdown
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
                { value: "6", label: "6" },
                { value: "7", label: "7" },
                { value: "8", label: "8" },
                { value: "9", label: "9" },
                { value: "10", label: "10+" },
              ]}
              dropdownName="No. of Players"
              onChange={(inputValue) => {
                console.log("onChange PLAYER COUNT", inputValue);
              }}
              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={difficultyOptions}
              dropdownName="Difficulty"
              onChange={(inputValue) => {
                setselectedDifficulty(inputValue.value)
                console.log("onChange DIFFICULTY ", inputValue.value);
              }}
              isMulti={false}
            />
          </li>
          <li>
          <Dropdown
              options={[{value: 10, label: '<10'},
              {value: 12, label: '10+'},
              {value: 17, label: '13+'},
              {value: 100, label: '18+'}]}
              dropdownName="Age"
              onChange={(inputValue) => {
                console.log("onChange AGE", inputValue);
              }}
              isMulti={false}
            />
          </li>
          <li>
          <Dropdown
              options={durationOptions}
              dropdownName="Duration"
              onChange={(inputValue) => {
                console.log("onChange DURATION", inputValue);
              }}
              isMulti={false}
            />
          </li>
          <li>
          <Dropdown
              options={genreOptions}
              dropdownName="Genre"
              onChange={(inputValue) => {
                console.log("onChange GENRE", inputValue);
              }}
              isMulti={false}
            />          </li>
          <li>
            <a>Review</a>
          </li>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "10rem",
              gap: "2rem",
            }}
          >
            <button
              className="btn btn-active btn-primary"
              style={{ height: "2rem", width: "8rem" }}
              onClick={()=> setSearchClicked(true)}>
              Search
            </button>
            <button
              style={{ height: "2rem", width: "8rem", marginRight: "1rem" }}
              className="btn btn-neutral btn-outline btn-primary"
            >
              Clear
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default FilterBar