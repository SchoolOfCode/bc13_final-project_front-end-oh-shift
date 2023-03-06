import React, { useContext, useState } from "react";
import styles from "./Tabs.module.css";
import { DarkModeWrapper } from "../../pages/_app";

/**
 *
 * @param {function} setTab - Function passed down from '../Gamecard/gamecard.js', changes the value of the state Tab in that same document.
 * @returns the ability of clicking/exploring the different pages/Tabs in the cards
 */

function Tabs({ setTab }) {
  let { darkMode, setDarkMode } = useContext(DarkModeWrapper);
  return (
    <>
      <div className={styles.tabs}>
        <button
          className={darkMode ? styles.tabButtonDark : styles.tabButton}
          onClick={() => setTab("Summary")}
        >
          Summary
        </button>

        <button
          className={darkMode ? styles.tabButtonDark : styles.tabButton}
          onClick={() => setTab("About")}
        >
          About
        </button>

        <button
          className={darkMode ? styles.tabButtonDark : styles.tabButton}
          onClick={() => setTab("Review")}
        >
          Reviews
        </button>
      </div>
    </>
  );
}

export default Tabs;
