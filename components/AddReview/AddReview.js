import StarRating from "../StarRating/StarRating";
import TextInput from "../TextInput/TextInput.js";
import { useContext } from "react";
import { DarkModeWrapper } from "../../pages/_app";

/**
 * allows the logged in user to add a review for each game, adding stars and a comment
 * @param {string} title - placeholder of input box
 * @param {function} handleRating - it was passed down from the review component to allow user to rate the game clicking on the stars 'radio buttons'
 * @param {function} handleSubmit - it was passed down from the review component to allow user to submit their rating and review showing an allert if the user misses any of those
 * @param {function} handleTextInput - it was passed down from the review component to allow user to input their text in the imput box and store it's value
 * @param {function} handleCancel - it was passed down from the review component to allow user to clear the input box after he write something
 * @param {string} value - text wrote by the user
 * @returns review the game title || starRating component || textInput component || submit and cancel buttons
 */
export default function AddReview({
  title,
  handleRating,
  handleSubmit,
  handleTextInput,
  handleCancel,
  value,
}) {
  let { darkMode, setDarkMode } = useContext(DarkModeWrapper);
  return (
    <>
      <h3
        className={darkMode ? "text-white" : "text-black"}
        style={{ marginBottom: "0.5rem" }}
      >
        <b>Review the game</b>
      </h3>
      <StarRating handleRating={handleRating} />
      <TextInput
        placeholderText={`What did you think of ${title}?`}
        handleTextInput={handleTextInput}
        value={value}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        <button
          style={{
            backgroundColor: "rgba(255,255,255,0)",
            color: "#FF6201",
            border: "solid 0.1rem #FF6201",
            padding: "0.2rem",
          }}
          className="btn-primary rounded w-16 h-8 outline-primary"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          style={{ padding: "0.2rem" }}
          className="btn-primary rounded w-16 h-8"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <h3
        className={darkMode ? "text-white" : "text-black"}
        style={{ marginBottom: "0.5rem" }}
      >
        <b>Reviews</b>
      </h3>
    </>
  );
}
