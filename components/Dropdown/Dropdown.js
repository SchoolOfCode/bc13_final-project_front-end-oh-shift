import React from "react";
import Select from "react-select";

function Dropdown({ options, dropdownName, onChange, isMulti }) {
	return (
		<div className='dropdown' id='dropdown'>
			<label htmlFor={dropdownName} id='dropdownLabel' className='dropdownLabel'>
				{dropdownName}
			</label>
			<Select
				isMulti={isMulti}
				className='dropdownSelect'
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