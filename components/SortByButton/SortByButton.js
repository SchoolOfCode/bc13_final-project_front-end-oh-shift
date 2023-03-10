import React from "react";

/**
 *
 * @param {function} handleSort - function passed down from '../FilterBar.js', changes the value of the sorted value state to be one of the li's values below
 * @returns a drop-down with sorting options
 */





function SortByButton({ handleSort, sortClicked, handleSortLabelClick }) {
  return (
    <div id="sort-by-dropdown" className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-secondary drawer-button rounded w-40" onClick={handleSortLabelClick}>
            Sort By <span class="material-symbols-outlined">
expand_more
</span>
            </label>


{!sortClicked && 
      <ul
        tabIndex={0}
        className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-40"
      >
        <li
          style={{ marginBottom: "0.3rem" }}
          onClick={() => handleSort("az", "A-Z")}
        >
          A-Z
        </li>
        <li
          style={{ marginBottom: "0.3rem" }}
          onClick={() => handleSort("za", "Z-A")}
        >
          Z-A
        </li>
        <li
          style={{ marginBottom: "0.3rem" }}
          onClick={() => handleSort("new", "Newest")}
        >
          Newest
        </li>
        <li
          style={{ marginBottom: "0.3rem" }}
          onClick={() => handleSort("old", "Oldest")}
        >
          Oldest
        </li>
        <li onClick={() => handleSort("rating", "Top Rated")}>Top Rated</li>
      </ul>
      }
    </div>
  );
}

export default SortByButton;