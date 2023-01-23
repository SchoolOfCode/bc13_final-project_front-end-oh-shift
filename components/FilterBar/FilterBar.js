import React, { useState, useEffect, useContext } from "react";
import Dropdown from "../Dropdown/Dropdown.js";
import GameCardList from "../GameCardLIst/gameCardList.js";
import { useGet } from "../customHooks/useGet.js";
import { any } from "prop-types";
import { DarkModeWrapper } from "../../pages/_app";
import capitaliseWord from "../../functions/capitaliseWord";
import SearchBar from "../Searchbar/SearchBar.js";
import SortByButton from "../SortByButton/SortByButton.js";
import Badge from "../Badge/Badge.js";

function FilterBar() {
  /**States related to light mode, darkmode theme */
  let { darkMode, setDarkMode } = useContext(DarkModeWrapper);
  const [games, setGames] = useState([]);
  const [parameters, setParameters] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [clearClicked, setClearClicked] = useState(false);

  /** States related to filtering values & options */
  const [difficultyOptions, setDifficultyOptions] = useState([]);
  const [durationOptions, setDurationOptions] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState({value: '', label: ''});
  const [selectedAge, setSelectedAge] = useState({value: '', label: ''});
  const [selectedDuration, setSelectedDuration] = useState({value: '', label: ''});
  const [selectedGenre, setSelectedGenre] = useState({value: '', label: ''});
  const [selectedPlayers, setSelectedPlayers] = useState({value: '', label: ''});
  const [selectedSort, setSelectedSort] = useState({value: '', label: ''});

  /**States related to searching the game list/ collection */
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState("");

  /** Adds on whatever selected difficulty filter value is */
  const [response, error] = useGet(
    `https://stokka.onrender.com/api/games${parameters}`
  );

  useEffect(() => {
    setGames(response);
    console.log('this is set games', games)
  }, [response]);


  /**Function to handle userInput */
  function handleUserInput(e) {
    setUserInput(e.target.value.toLowerCase());
    setSearchClicked(!searchClicked);
  }

  //if userInput- then set search value to '' (empty string)

  /** Function to take in search value & re-render the game collection page */

  //Function to change URl
  //line 17- change to deafault URL
  // old URL + added placeholders
  // changes URL
  // dependent on onClick function
  
  useEffect(() => {
    setParameters(
      `?difficulty=${selectedDifficulty.value}&age=${selectedAge.value}&duration=${selectedDuration.value}&genre=${selectedGenre.value}&number_of_players=${selectedPlayers.value}&title=${userInput}&sort_by=${selectedSort.value}`
    );
  }, [searchClicked]);

  useEffect(() => {
    async function getFilterOptions(category, state) {
      const response = await fetch(
        `https://stokka.onrender.com/api/games/filters/${category}`,
        { method: "GET", headers: { accept: "application/JSON" } }
      );

      const data = await response.json();
      let filters = data.payload;
      let options = [{ value: "", label: "All" }];
      for (let i = 0; i < filters.length; i++) {
        let value = filters[i][category];
        let capitalisedValue = capitaliseWord(value);
        options.push({ value: value, label: capitalisedValue });

        state(options);
      }
    }
    getFilterOptions("difficulty", setDifficultyOptions);
    getFilterOptions("duration", setDurationOptions);
    getFilterOptions("genre", setGenreOptions);
  }, []);

  function handleSearch() {
    document.getElementById("my-drawer").click();
    setSearchClicked(!searchClicked);

  }

  function handleSort(value, label) {
    setSelectedSort({value: value, label: label});
    setSearchClicked(!searchClicked)
  }

  return (
    <>

<a id='top'>

<div
  style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent:'center',
    gap:'2.5rem',
    marginTop: '1rem'
  }} className='w-49 justify-center content-center'>
  


  <label
    style={{ marginBottom: "2rem", height: "auto"}}
    htmlFor="my-drawer"
    className="btn btn-secondary drawer-button rounded "
  >
    Filter By
  </label>
  
  <SortByButton handleSort={handleSort} />
</div></a>

<SearchBar
  userInput={userInput}
  handleUserInput={handleUserInput}
  setUserInput={setUserInput}
  setSearchClicked={setSearchClicked}
  searchClicked={searchClicked}
></SearchBar>


    <div
      className={darkMode ? "darkMode drawer" : "lightMode drawer"}
      style={{ width: "100vw", height: "100vh" }}
    >

      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          float: "end",
        }}
        className="drawer-content"
      >

      
        <div>
          {/* <label style={{marginBottom:"2rem", width:"8rem"}}/> */}
          

          <div className="flex flex-wrap w-96">

          {selectedPlayers.label && 
            <label htmlFor="my-drawer">
              <Badge label={`${selectedPlayers.label} players`}/>
              </label>}

          {selectedDifficulty.label && 
            <label htmlFor="my-drawer">
            <Badge label={capitaliseWord(selectedDifficulty.label)}/>
            </label>}

          {selectedAge.label &&
            <label htmlFor="my-drawer">
            <Badge label={`${selectedAge.label}`}/>
            </label>}

          {selectedDuration.label &&
            <label htmlFor="my-drawer">
            <Badge label={`${selectedDuration.label} mins`}/>
            </label>}

          {selectedGenre.label &&
            <label htmlFor="my-drawer">
            <Badge label={capitaliseWord(selectedGenre.label)}/>
            </label>}

          {selectedSort.label && 
          <Badge label={selectedSort.label}
            onClick={()=> setSelectedSort({value:'', label: ''})}
          />}
          </div>
          


{!games &&
  (<div
              style={{ marginTop: "2rem" }}
              className="flex justify-center items-center"
            >
              <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>)}

{(games && games.length< 1) &&(
  <>
  <div className="alert alert-error shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Nothing from our library matches your filters.</span>
  </div>
</div>
</>)
}

                {games &&
            <GameCardList games={games} />
          }

          

          <div style={{ position: "fixed", bottom: "6vh", left: " 80vw" }}>
            <a href="#top">
              <button
                style={{ position: "sticky", width: "6vh", height: "2vh" }}
                className="btn btn-primary rounded border hover:bg-primary focus:outline-none font-medium text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-primary"
              >
                {" "}
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.972 19.0894V5.08936"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.97198 12.0894L12.972 5.08936L19.972 12.0894"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </a>
          </div>


        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul
          className={
            darkMode
              ? "menu p-4 w-80 bg-base-100 text-base-content bg-accent"
              : "menu p-4 w-80 bg-base-100 text-base-content"
          }
        >
          <li>
            <Dropdown
              options={[
                { value: "", label: "All" },
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
                if (!inputValue) {
                  setSelectedPlayers({value: '', label: ''});
                } else {
                  setSelectedPlayers(inputValue);

                }
              }}
              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={difficultyOptions}
              dropdownName="Difficulty"
              onChange={(inputValue) => {
                if (!inputValue) {
                  setSelectedDifficulty({value: '', label: ''});
                } else {
                  setSelectedDifficulty(inputValue);
                }
              }}
              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={[
                { value: "", label: "All" },
                { value: 10, label: "<10" },
                { value: 12, label: "10+" },
                { value: 17, label: "13+" },
                { value: 100, label: "18+" },
              ]}
              dropdownName="Age"
              onChange={(inputValue) => {
                if (!inputValue) {
                  setSelectedAge({value: '', label: ''});
                } else {
                  setSelectedAge(inputValue);
                }
              }}
              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={durationOptions}
              dropdownName="Duration"
              onChange={(inputValue) => {
                if (!inputValue) {
                  setSelectedDuration({value: '', label: ''});
                } else {
                  setSelectedDuration(inputValue);
                }
              }}
              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={genreOptions}
              dropdownName="Genre"
              onChange={(inputValue) => {
                if (!inputValue) {
                  setSelectedGenre({value: '', label: ''});
                } else {
                  setSelectedGenre(inputValue);
                }
              }}
              isMulti={false}
            />
          </li>
          <li>
            <a>Review</a>
          </li>
          <div
            style={{
              display: "flex",
              // flexDirection: "row",
              justifyContent: "center",
              paddingTop: "6rem",
              // gap: "2rem",
            }}
          >
            <button
              className="btn btn-active btn-primary rounded text-quicksand"
              onClick={handleSearch}
              style={{ height: "auto", width: "90%" }}
            >
              Search
            </button>

            {/* <button
              style={{ height: "2rem", width: "8rem", marginRight: "1rem" }}
              className="btn btn-neutral btn-outline btn-primary"
            >
              Clear
            </button> */}
          </div>
        </ul>
      </div>
    </div>
    </>);
}

export default FilterBar;
