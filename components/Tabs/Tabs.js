import React from "react";
import styles from "./Tabs.module.css";

function Tabs({ setTab }) {
  return (
    <>
      <div className={styles.tabs}>
        <input type="radio" className={styles.inputClass} id={styles.summary} />
        <label className={styles.label} onClick={() => setTab("Summary")} for={styles.summary}>
         Summary 
        </label>
        <input type="radio" className={styles.inputClass} id={styles.about} />{" "}
        <label className={styles.label} onClick={() => setTab("About")} for={styles.about}>
          About
        </label>
        <input type="radio" className={styles.inputClass} id={styles.review} />{" "}
        <label className={styles.label} onClick={() => setTab("Review")} for={styles.review}>
          Reviews
        </label>
      </div>
    </>
  );
}

export default Tabs;
