import React from "react";
import styles from './SearchBar'
// Pass down props (text input/ handleuser input/ handleclick)
// create input/ button element
// Input = takes handleUser Input prop
// Button = takes in handleClick function as a prop

export default function SearchBar({
  handleUserInput,
  userInput,
  setUserInput,
  setSearchClicked,
  searchClicked,
}) {
  //const { handleUserInput } = props;

  /**Function- reset userInput state back to empty string
   * This clears the search bar and returns the data back to all games
   */
  const handleClear = () => {
    // 👇️ clear input value
    setUserInput("");
    setSearchClicked(!searchClicked);
  };

  return (
    <div className="w-49 justify-center content-center searchInput mb-6" style={{display:'flex', flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
      <input
        onChange={handleUserInput}
        placeholder="Search by Title"
        value={userInput}
        className="input input-bordered input-secondary w-full max-w-xs h-8"
      ></input>
      <button style={{height:'2rem', color:'black', padding:'0.2rem' ,backgroundColor:'#E7E7E7'}} className=" btn-secondary btn-outline rounded bg-white w-16 border-secondary" onClick={handleClear}>Clear</button>
    </div>
  );
}
