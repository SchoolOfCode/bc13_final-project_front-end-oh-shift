import React from "react";

// Pass down props (text input/ handleuser input/ handleclick)
// create input/ button element
// Input = takes handleUser Input prop
// Button = takes in handleClick function as a prop

export default function SearchBar(props) {
  const { handleUserInput } = props;

  return (
    <>
      <input onChange={handleUserInput}></input>
    </>
  );
}
