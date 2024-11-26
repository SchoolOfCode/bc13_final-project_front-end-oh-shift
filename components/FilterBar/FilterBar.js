import React, { useState, useEffect, useContext } from "react";
import Dropdown, {Input} from "../Dropdown/Dropdown.js";
import GameCardList from "../GameCardLIst/gameCardList.js";
import { useGet } from "../customHooks/useGet.js";
import { DarkModeWrapper } from "../../pages/_app";
import capitaliseWord from "../../functions/capitaliseWord";
import SearchBar from "../Searchbar/SearchBar.js";
import SortByButton from "../SortByButton/SortByButton.js";
import Badge from "../Badge/Badge.js";
import convertMinsHours from "../../functions/convertMinsHours.js";
/**
 * it manages all the states and data inside the game page:
 *
 * - games > set the games to the response when fetching data from the backend and it makes data flexible by adding an interpolation at the end of the url to allow flexibility of fetching the data based on some parameters.
 * Depending if games is available or not are conditionally rendered game || is loading animation || an error badge.
 * - parameters > it is interpolated in the url to match the user's parameters.  setParameters allows setting the state to whatever the user: sort by or filter by and/or input in the search bar.
 * - searchClicked >  It is false by default and turns true when the user starts inputting in the searchBar. It also calls the function to set the parameters when clicking the search button in the filter bar.
 * Thanks to the handleChange function, it also allows us to search or clear the filter selection and (setting searchClicked to true) without clicking in the search button inside the filter bar, but just clicking everywhere else on the screen to close the filter bar component.
 * Thanks to the handleSort function (that sets the searchClicked to true) it allows data displayed when the user click on one of the sorted options.
 * - Options > getFilterOption function explanation needed
 * - userInput and Search > set value of search to be the userInput to lower case. Is had been included in the parameters interpolation. It has been passed down to the search bar component.
 * @returns this function even if it's called FilterBar contains and returns everything that is displayed in the 'games' page.
 *  * It returns a drawer and inside it > 
 * - Header component
 * - Filter by button
 * - Sort by component
 * - Search Bar
 * - Badges components
 * - animated spinner and error badge if games don't exist
 * - gameCardList component
 * - Footer component
 * - Dropdowns components
 * - Search button
 */
function FilterBar() {
  let { darkMode, setDarkMode } = useContext(DarkModeWrapper);
  const [games, setGames] = useState([]);
  const [parameters, setParameters] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  // States related to filtering options and sort by options
  const [difficultyOptions, setDifficultyOptions] = useState([]);
  const [durationOptions, setDurationOptions] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState({
    value: "",
    label: "",
  });
  const [selectedAge, setSelectedAge] = useState({ value: "", label: "" });
  const [selectedDuration, setSelectedDuration] = useState({
    value: "",
    label: "",
  });
  const [selectedGenre, setSelectedGenre] = useState({ value: "", label: "" });
  const [selectedPlayers, setSelectedPlayers] = useState({
    value: "",
    label: "",
  });
  const [selectedSort, setSelectedSort] = useState({ value: "", label: "" });
  const [sortClicked, setSortClicked] = useState(true)

  // States related to searching the game by title
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState("");

  // Adds on whatever selected filter values are
  const [response, error] = useGet(
    `https://stokka.onrender.com/api/games${parameters}`
  );

  //set games to the reponse every time the response change
  useEffect(() => {

    response &&
    response.map((game, index)=>{
      if (game.average_rating==null) {
        console.log(response[index].average_rating)
        response[index].average_rating='0'
        console.log(response[index].average_rating)
      }
    })

    /**
     * Orders games in order of star rating when needed, as un-rated items come from database as 'null'
     * @param {*} a 
     * @param {*} b 
     * @returns 
     */
    function compare( a, b ) {
      if ( a.average_rating > b.average_rating ){
        return -1;
      }
      if ( a.average_rating < b.average_rating ){
        return 1;
      }
      return 0;
    }
    
    (response && selectedSort.value=='rating') && response.sort( compare );

    setGames(response);
    console.log("this is set games", games);
  }, [response]);

  // Function to handle userInput text
  function handleUserInput(e) {
    setUserInput(e.target.value.toLowerCase());
    console.log("what is" + searchClicked);
    setSearchClicked(!searchClicked);
  }

//function to take in all filtered/searched/sorted values and re-render the games page.
//applied every time the user click on search clicked OR input in search bar OR exit the filter bar 
  useEffect(() => {
    setParameters(
      `?difficulty=${selectedDifficulty.value}&age=${selectedAge.value}&duration=${selectedDuration.value}&genre=${selectedGenre.value}&number_of_players=${selectedPlayers.value}&title=${userInput}&sort_by=${selectedSort.value}`
    );
  }, [searchClicked]);

  //function that takes in a category and a state to re-render the games page to match the applied category by changing the url thanks to the interpolation 
  //NEED MORE INFO
  useEffect(() => {
    async function getFilterOptions(category, state) {
      const response = await fetch(
        `https://stokka.onrender.com/api/games/filters/${category}`,
        { method: "GET", headers: { accept: "application/JSON" } }
      );

      const data = await response.json();
      let filters = data.payload;
      let options = [{ value: "", label: "All" }];
      let value;
      let capitalisedValue;
      let newLabel;
      for (let i = 0; i < filters.length; i++) {
         value = filters[i][category];
         capitalisedValue = capitaliseWord(value);
         console.log('this is category', category)
         newLabel = (category=='duration') ? convertMinsHours(value): capitalisedValue;
        options.push({ value: value, label: newLabel });
      }

      console.log('checking convert function', convertMinsHours(120))
      // if (state=='setDurationOptions') {
      //   options.map((option, index)=> {option[index].label = convertMinsHours(option.value)})
      // }
      console.log('this is options!!', options)

      state(options);

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
    setSelectedSort({ value: value, label: label });
    setSortClicked(true)
    console.log('sortclicked?', sortClicked)
    setSearchClicked(!searchClicked);
  }

 

  return (
    <>
      <div
        className={darkMode ? "darkMode drawer" : "lightMode drawer"}
        style={{ width: "100vw", height: "100vh" }}
      >
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // marginTop: "2rem",
            float: "end",
            width: "100vw",
            height: "100vh",
          }}
          className="drawer-content"
        >
          <div className="w-screen h-screen overflow-auto">
          
            <div className='flex flex-col sm:flex-row gap-10 justify-center content-center h-24 items-center mt-8 mb-8 '>
              <a id="top">
                <div className='w-49 flex flex-row justify-center gap-16 items-center'>
                  <label
                    style={{  height: "auto" }}
                    htmlFor="my-drawer"
                    className="btn btn-secondary drawer-button rounded w-40"
                  >
                    Filter By 
                  </label>

                  <SortByButton handleSortLabelClick={()=>setSortClicked(!sortClicked)} handleSort={handleSort} sortClicked={sortClicked}/>
                </div>
              </a>

              <SearchBar
                userInput={userInput}
                handleUserInput={handleUserInput}
                setUserInput={setUserInput}
                setSearchClicked={setSearchClicked}
                searchClicked={searchClicked}
              ></SearchBar>
            </div>

            <div id='filter-tags' className="flex flex-row flex-wrap justify-center gap-2 mt-12 align-middle w-auto" >
              {selectedPlayers.label && (
                <label htmlFor="my-drawer">
                  <Badge label={`${selectedPlayers.label} players`} />
                </label>
              )}

              {selectedDifficulty.label && (
                <label htmlFor="my-drawer">
                  <Badge label={capitaliseWord(selectedDifficulty.label)} />
                </label>
              )}

              {selectedAge.label && (
                <label htmlFor="my-drawer">
                  <Badge label={`${selectedAge.label}`} />
                </label>
              )}

              {selectedDuration.label && (
                <label htmlFor="my-drawer">
                  <Badge label={selectedDuration.label} />
                </label>
              )}

              {selectedGenre.label && (
                <label htmlFor="my-drawer">
                  <Badge label={capitaliseWord(selectedGenre.label)} />
                </label>
              )}

              {selectedSort.label && (
                <Badge
                  label={selectedSort.label}
                  onClick={() => setSelectedSort({ value: "", label: "" })}
                />
              )}
            </div>

            {!games && (
              <div
                style={{ marginTop: "2rem" }}
                className="flex justify-center items-center"
              >
                <div
                  className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full"
                  role="status"
                  style={{ borderColor: "orange", marginBottom: "8rem" }}
                >
                  <span className="visually-hidden"></span>
                </div>
              </div>
            )}

            {games && games.length < 1 && (
              <>
                <div className="mt-2 mb-64 h-8 rounded bg-error">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.5rem",
                      padding: "0.2rem",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Nothing from our library matches your filters.
                  </div>
                </div>
              </>
            )}

            {games && <GameCardList games={games} />}
           
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
              <h1 className={darkMode ? "text-white" : "text-black"}>
                <b>Filters</b>
              </h1>
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
                    setSelectedPlayers({ value: "", label: "" });
                  } else {
                    setSelectedPlayers(inputValue);
                  }
                }}
                isMulti={false}
                components={{Input}}
              />
            </li>
            <li>
              <Dropdown
                options={difficultyOptions}
                dropdownName="Difficulty"
                onChange={(inputValue) => {
                  if (!inputValue) {
                    setSelectedDifficulty({ value: "", label: "" });
                  } else {
                    setSelectedDifficulty(inputValue);
                  }
                }}
                isMulti={false}
                components={{Input}}
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
                    setSelectedAge({ value: "", label: "" });
                  } else {
                    setSelectedAge(inputValue);
                  }
                }}
                isMulti={false}
                components={{Input}}
              />
            </li>
            <li>
              <Dropdown
                options={durationOptions}
                dropdownName="Duration"
                onChange={(inputValue) => {
                  if (!inputValue) {
                    setSelectedDuration({ value: "", label: "" });
                  } else {
                    setSelectedDuration(inputValue);
                  }
                }}
                isMulti={false}
                components={{Input}}
              />
            </li>
            <li>
              <Dropdown
                options={genreOptions}
                dropdownName="Genre"
                onChange={(inputValue) => {
                  if (!inputValue) {
                    setSelectedGenre({ value: "", label: "" });
                  } else {
                    setSelectedGenre(inputValue);
                  }
                }}
                isMulti={false}
                components={{Input}}
              />
            </li>
            {/* <li>
              <a>Review</a>
            </li> */}
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
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FilterBar;
