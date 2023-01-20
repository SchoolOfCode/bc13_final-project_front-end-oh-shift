import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown.js";
import GameCardList from "../GameCardLIst/gameCardList.js";
import { useGet } from "../customHooks/useGet.js";
import { any } from "prop-types";

function FilterBar() {
  const [games, setGames] = useState([]);
  const [parameters, setParameters] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [clearClicked, setClearClicked] = useState(false)


  const [difficultyOptions, setDifficultyOptions] = useState([]);
  const [durationOptions, setDurationOptions] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlayers, setSelectedPlayers] = useState("");

  /** Adds on whatever selected difficulty filter value is */
  const [response, error] = useGet(
    `https://stokka.onrender.com/api/games${parameters}`
  );

  useEffect(() => {
    setGames(response);
  }, [response]);

  //Function to change URl
  //line 17- change to deafault URL
  // old URL + added placeholders
  // changes URL
  // dependent on onClick function

  useEffect(() => {
    setParameters(`?difficulty=${selectedDifficulty}&age=${selectedAge}&duration=${selectedDuration}&genre=${selectedGenre}&number_of_players=${selectedPlayers}`);
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

  function capitaliseWord(word) {
    if (typeof word == "string") {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  }


  function handleSearch(){
    document.getElementById('my-drawer').click()
    setSearchClicked(!searchClicked)
  }

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        className="drawer-content"
      >
        <div>

          <label style={{marginBottom:"2rem", width:"8rem"}}/>

          <label
            htmlFor="my-drawer"
            className="btn btn-secondary drawer-button"
          >
            Filter By
          </label>
          {(games.length>0)? 

          <GameCardList games={games} /> :
          <div class="flex justify-center items-center">
  <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>}
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
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
                  setSelectedPlayers('')
                } else{
                setSelectedPlayers(inputValue.value)
                console.log("This is the players", selectedPlayers)};

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
                  setSelectedDifficulty('')
                } else{
                  setSelectedDifficulty(inputValue.value);
                console.log("This is the value", selectedDifficulty);
              }}}

              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={[
                { value: '', label: "All" },
                { value: 10, label: "<10" },
                { value: 12, label: "10+" },
                { value: 17, label: "13+" },
                { value: 100, label: "18+" },
              ]}
              dropdownName="Age"
              onChange={(inputValue) => {

                if (!inputValue) {
                  setSelectedAge('')
                } else {
                setSelectedAge(inputValue.value);
                console.log("This is the age", selectedAge);
              }}}

              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={durationOptions}
              dropdownName="Duration"
              onChange={(inputValue) => {

                if (!inputValue) {
                  setSelectedDuration('')
                } else {
                setSelectedDuration(inputValue.value);
                console.log("This is the duration", selectedDuration);
              }}}

              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={genreOptions}
              dropdownName="Genre"
              onChange={(inputValue) => {

                if (!inputValue) {
                  setSelectedGenre('')
                } else {
                setSelectedGenre(inputValue.value)
                console.log("This is the genre", selectedGenre);
              }}}

              isMulti={false}
            />
          </li>
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

              onClick={handleSearch}
              style={{ height: "2rem", width: "8rem" }}
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
  );
}

export default FilterBar;
