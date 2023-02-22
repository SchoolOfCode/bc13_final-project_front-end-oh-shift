import React, {useContext} from "react";
import Select from "react-select";
import styles from "./Dropdown.module.css"
import { DarkModeWrapper } from "../../pages/_app";

function Dropdown({ options, dropdownName, onChange, isMulti }) {
	let {darkMode,setDarkMode}= useContext(DarkModeWrapper)
	
	return (
		<div className={styles.dropdown} id='dropdown'>
			<label htmlFor={dropdownName} id='dropdownLabel' className={darkMode? styles.dropdownLabelDark : styles.dropdownLabel}>
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
							/>
		</div>
	);
}

export default Dropdown;