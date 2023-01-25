import capitaliseWord from "../../functions/capitaliseWord.js";
import Stars from "../Stars/Stars";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useContext } from "react";
import { DarkModeWrapper } from "../../pages/_app";

/**
 * @param {Object} review - contains all the logged in user information
 * @param {string} review.user_picture - GET the logged in user picture
 * @param {string} review.user_given_name -  GET the logged in user name
 * @param {number} review.rating -  GET the logged in user star rating review of the game
 * @param {string} review.review_text - GET the logged in user comment review of the game
 * @param {string} review.user_id -  GET the logged in user ID
 * @param {function} handleDelete - DELETE the review from the page and the database
 * @returns The review "card" as a whole - displays the user information, the star rating and comment review, and if the user is logged in, they're able to delete the comment pressing a button.
 */

export default function IndividualReview({ review, handleDelete }) {
  let { darkMode, setDarkMode } = useContext(DarkModeWrapper);
  const { user } = useUser();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
        className={darkMode ? " text-white" : "text-black"}
      >
        <div className="avatar">
          <div className="w-8 mask mask-hexagon">
            <img src={review?.user_picture} alt={review.user_given_name} />
          </div>
        </div>
        <h5 style={{ paddingTop: "0.1rem" }}>
          {capitaliseWord(review.user_given_name)}
        </h5>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Stars rating={review.rating} />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <p
          className={darkMode ? " text-white" : "text-black"}
          style={{ marginBottom: "1rem" }}
        >
          {review.review_text}
        </p>
        {user?.sub == review.user_id && (
          <button className="rounded btn-xs" onClick={handleDelete}>
            <span
              style={{ display: "flex", justifyContent: "flex-end" }}
              className="material-symbols-outlined"
            >
              Delete
            </span>
          </button>
        )}
      </div>

      <div className="divider"></div>
    </div>
  );
}
