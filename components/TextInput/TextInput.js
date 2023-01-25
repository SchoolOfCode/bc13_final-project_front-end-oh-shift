import React from "react";

/**
 *
 * @param {*} placeholderText - Creates a placeholder text and adds the game name at the end, param passem down from '../AddReview/AddReview.js'
 * @param {*} handleTextInput - passed down from '../Tabs/TabsCollection/Review.js', stores the input from the user
 * @param {*} value - the text wrote by the user
 * @returns an input element that allows the user to type in a comment about the game played, when logged in.
 */

export default function TextInput({ placeholderText, handleTextInput, value }) {
  return (
    <div
      style={{
        margin: "1rem 0rem",
      }}
    >
      <input
        type="text"
        placeholder={placeholderText ? placeholderText : "Type here..."}
        className="input input-bordered input-secondary w-full max-w-xs h-8"
        onChange={handleTextInput}
        value={value}
      />
    </div>
  );
}
