import React, {useContext, useState} from "react";
import styles from "./Tabs.module.css";
import {DarkModeWrapper} from '../../pages/_app'

function Tabs({ setTab }) {
  let {darkMode,setDarkMode}= useContext(DarkModeWrapper)
  return (
    <>
      {/* <div className={styles.tabs}>
        <input type="radio" checked className={styles.input} id={styles.summary} />
        <label className={styles.label} onClick={() => setTab("Summary")} for={styles.summary}>
         Summary 
        </label>
        <input type="radio" className={styles.input} id={styles.about} />{" "}
        <label className={styles.label} onClick={() => setTab("About")} for={styles.about}>
          About
        </label>
        <input type="radio" className={styles.input} id={styles.review} />{" "}
        <label className={styles.label} onClick={() => setTab("Review")} for={styles.review}>
          Reviews
        </label>
      </div> */}
      <div className={styles.tabs}>
  
        <button className= {darkMode ? styles.tabButtonDark: styles.tabButton} onClick={() => setTab("Summary")} >
         Summary 
        </button>
        
        <button className= {darkMode ? styles.tabButtonDark: styles.tabButton} onClick={() => setTab("About")} >
          About
        </button>
       
        <button className= {darkMode ? styles.tabButtonDark: styles.tabButton} onClick={() => setTab("Review")} >
          Reviews
        </button>
      </div>
    </>
  );
}

export default Tabs;
