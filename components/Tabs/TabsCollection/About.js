import React from "react";
import Badge from "../../Badge/Badge";
import YouTube from "react-youtube";
import { useState, useEffect, useContext } from "react";
import { DarkModeWrapper } from "../../../pages/_app";

/**
 *
 * @param {string} image - Property from the database. The '../../GameCardLIst/gameCardList.js' passes down to '../../Gamecard/gamecard.js', passes down to this element the image elements of our games database
 * @param {string} description  - Property from the database. The '../../GameCardLIst/gameCardList.js' passes down to '../../Gamecard/gamecard.js', passes down to this element the image elements of our games database
 * @param {string} rules  - Property from the database. The '../../GameCardLIst/gameCardList.js' passes down to '../../Gamecard/gamecard.js', passes down to this element the image elements of our games database
 * @param {string} title  - Property from the database. The '../../GameCardLIst/gameCardList.js' passes down to '../../Gamecard/gamecard.js', passes down to this element the image elements of our games database
 * @param {string} video -  - Property from the database. The '../../GameCardLIst/gameCardList.js' passes down to '../../Gamecard/gamecard.js', passes down to this element the image elements of our games database
 * @returns the base of the About page in the cards. Returns an image of the game, a desfription, rules, and a youtube video showing how to play.
 */

function About({ image, description, rules, title, video }) {
  let { darkMode, setDarkMode } = useContext(DarkModeWrapper);

  const [videoId, setVideoId] = useState("");

  let videoIdGenerated = video.substring(video.length - 11);

  useEffect(() => {
    setVideoId(videoIdGenerated);
  }, [videoIdGenerated]);
  return (
    <div>
      <div
        className={
          darkMode
            ? "card w-96 bg-base-100 shadow-xl bg-accent"
            : "card w-96 bg-base-100 shadow-xl bg-zinc-200"
        }
        style={{
          marginBottom: "4rem",
          maxWidth: "400px",
          maxHeight: "30rem",
          overflow: "auto",
          borderTopLeftRadius: "0px",
        }}
      >
        <div style={{ padding: "32px" }}>
          <h2
            className={darkMode ? "card-title text-white" : "card-title"}
            style={{ marginBottom: "1rem" }}
          >
            {title}
          </h2>
          <figure>
            <img
              style={{
                width: "100%",
                maxHeight: "14rem",
                marginBottom: "1.5rem",
              }}
              src={image}
              alt="game image"
            />
          </figure>
          <h3
            className={darkMode ? "card-title text-white" : "card-title"}
            style={{ marginBottom: "0.5rem" }}
          >
            <b>Description</b>
          </h3>
          <p
            className={darkMode ? " text-white" : "text-accent"}
            style={{ marginBottom: "1.8rem" }}
          >
            {description}
          </p>
          <h3
            className={darkMode ? "card-title text-white" : "card-title"}
            style={{ marginBottom: "0.5rem" }}
          >
            <b>Rules</b>
          </h3>
          <p
            className={darkMode ? " text-white" : "text-accent"}
            style={{ overflow: "scroll", marginBottom: "1.8rem" }}
          >
            {rules}
          </p>
          <h3
            className={darkMode ? "card-title text-white" : "card-title"}
            style={{ marginBottom: "0.5rem" }}
          >
            <b>Video Tutorial</b>
          </h3>
          <YouTube
            videoId={videoId}
            opts={{
              height: "50%",
              width: "100%",
              playerVars: {
                autoplay: 0,
                rel: 0,
                controls: 0,
              },
            }}
          />
          {/* <iframe src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: "100%", height:"auto" }}>Video Tutorial</iframe> */}
        </div>
      </div>
    </div>
  );
}

export default About;
