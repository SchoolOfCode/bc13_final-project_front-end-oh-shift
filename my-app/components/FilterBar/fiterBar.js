import React from 'react';
import Dropdown from '../Select/Select.js'

function FiterBar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-secondary drawer-button">
          Filter By
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Dropdown options={[
              { value: '1', label: '1' },
              { value: '2', label: '2' },
              { value: '3', label: '3' }]}
              dropdownName='No. of Players'
              onChange={(inputValue)=>{console.log('onChange', inputValue)}}
              isMulti={false}
            />
          </li>
          <li>
          <Dropdown options={[
              { value: 'easy', label: 'Easy' },
              { value: 'intermediate', label: 'Intermediate' },
              { value: 'expert', label: 'Expert' }]}
              dropdownName='Difficulty'
              onChange={(inputValue)=>{console.log('onChange', inputValue)}}
              isMulti={true}
              />
          </li>
          <li>
            <a>Age</a>
          </li>
          <li>
            <a>Duration</a>
          </li>
          <li>
            <a>Genre</a>
          </li>
          <li>
            <a>Review</a>
          </li>
        <button className="btn btn-active btn-primary">
          Search
        </button>
        <button className="btn btn-neutral">Clear</button>
        </ul>
      </div>
    </div>
  );
}

export default FiterBar