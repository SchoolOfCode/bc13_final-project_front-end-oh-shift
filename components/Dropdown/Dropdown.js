import React, { useContext } from "react";
import Select from "react-select";
import styles from "./Dropdown.module.css";
import { DarkModeWrapper } from "../../pages/_app";

/**
 * It creates a dropdown component for each of the displayed categories allowing the user to select from the different options of each category and allowing him to clear the choosen option if needed
 * @param {object} options - it is passed down from the FilterBar component (from the Dropdown), where each Dropdown option contains a value and a label string
 * @param {string} dropdownName - it is passed down from the FilterBar component (from the Dropdown), to display the relative name for each category
 * @param {function} onChange - it is passed down from the FilterBar component (from the Dropdown). It sets the selected category value to be the one that the user selected (changing the state) OR to be empty by default if the user doesn't choose anything
 * @param {boolean} isMulti - it is passed down from the FilterBar component (from the Dropdown). It allows or deny the multiselection for each category selection
 * @param {string || number || date} defaultValue - it is passed from the add-game pages where the defaultValue it is sets to be the correspondent value of each games property (ex.  for a label of maximum_players: <input type='number' defaultValue={gameInfo.max_players}></input>)
 * @returns the dropdown component with dropdown names and relative options for each one (where you can multiselect and clear each field)
 */
function Dropdown({ options, dropdownName, onChange, isMulti, defaultValue }) {
  let { darkMode, setDarkMode } = useContext(DarkModeWrapper);
  return (
    <div className={styles.dropdown} id="dropdown">
      <label
        htmlFor={dropdownName}
        id="dropdownLabel"
        className={darkMode ? styles.dropdownLabelDark : styles.dropdownLabel}
      >
        {dropdownName}
      </label>
      <Select
        isMulti={isMulti}
        className={styles.dropdownSelect}
        id={dropdownName}
        options={options}
        name={dropdownName}
        onChange={onChange}
        isClearable={true}
        value={defaultValue}
      />
    </div>
  );
}

export default Dropdown;
