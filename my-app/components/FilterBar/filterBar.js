import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown.js";
import GameCardList from "../GameCardLIst/gameCardList.js";
import { useGet } from "../customHooks/useGet.js";
import { any } from "prop-types";

function FilterBar() {
  const [games, setGames] = useState([]);
  const [parameters, setParameters] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const [difficultyOptions, setDifficultyOptions] = useState([]);
  const [durationOptions, setDurationOptions] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

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
    setParameters(`?difficulty=${selectedDifficulty}`);
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

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        className="drawer-content"
      >
        <div>
          <label
            htmlFor="my-drawer"
            className="btn btn-secondary drawer-button"
          >
            Filter By
          </label>
          <GameCardList games={games} />
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
              ]}
              dropdownName="No. of Players"
              onChange={(inputValue) => {
                console.log("onChange", inputValue);
              }}
              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={difficultyOptions}
              dropdownName="Difficulty"
              onChange={(inputValue) => {
                setSelectedDifficulty(inputValue.value);
                console.log("This is the value", selectedDifficulty);
              }}
              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={[
                { value: 10, label: "<10" },
                { value: 12, label: "10+" },
                { value: 17, label: "13+" },
                { value: 100, label: "18+" },
              ]}
              dropdownName="Age"
              onChange={(inputValue) => {
                console.log("onChange", inputValue);
              }}
              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={durationOptions}
              dropdownName="Duration"
              onChange={(inputValue) => {
                console.log("onChange", inputValue);
              }}
              isMulti={false}
            />
          </li>
          <li>
            <Dropdown
              options={genreOptions}
              dropdownName="Genre"
              onChange={(inputValue) => {
                console.log("onChange", inputValue);
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
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "10rem",
              gap: "2rem",
            }}
          >
            <button
              className="btn btn-active btn-primary"
              onClick={() => setSearchClicked(!searchClicked)}
              style={{ height: "2rem", width: "8rem" }}
            >
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

export default FilterBar;
