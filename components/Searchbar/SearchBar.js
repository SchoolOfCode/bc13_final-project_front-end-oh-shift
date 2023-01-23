import React from "react";

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
    <div>
      <input
        onChange={handleUserInput}
        placeholder="Search by Title"
        value={userInput}
        className="input w-full max-w-xs h-8"
      ></input>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
