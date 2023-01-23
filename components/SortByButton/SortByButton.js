function SortByButton({handleSort}) {
  return (
    <div className="dropdown dropdown-end">
      {/* <label tabIndex={0} className="btn btn-secondary drawer-button rounded">
            </label> */}
      <button className="btn btn-secondary drawer-button rounded">
        Sort By
      </button>

      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-30"
      >
        <li onClick={()=>handleSort('az')}>A-Z</li>
        <li onClick={()=>handleSort('za')}>Z-A</li>
        <li onClick={()=>handleSort('new')}>Newest</li>
        <li onClick={()=>handleSort('old')}>Oldest</li>
      </ul>
    </div>
  );
}

export default SortByButton;
