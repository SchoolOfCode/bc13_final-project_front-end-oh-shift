import React from "react";
import Select from "react-select";
import styles from "./Dropdown.module.css"

function Dropdown({ options, dropdownName, onChange, isMulti }) {
	return (
		<div className={styles.dropdown} id='dropdown'>
			<label htmlFor={dropdownName} id='dropdownLabel' className={styles.dropdownLabel}>
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