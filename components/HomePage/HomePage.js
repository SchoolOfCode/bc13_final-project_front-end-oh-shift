import React from "react";

import { useState, useEffect } from "react";
import { useGet } from "../customHooks/useGet";
import Link from "next/link";
import styles from "../../styles/HomePage.module.css";
import Carousel from "../Carousel/Carousel.js";

function HomePage() {
  const [games, setGames] = useState([]);
  const [response, error] = useGet(`https://stokka.onrender.com/api/games`);

  useEffect(() => {
    setGames(response);
  }, [response]);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
      {/* <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.span} >
          <i className={styles.i}>WHAT</i>
          IS
          <i className={styles.i}>NEW</i>
        </span>
        <span >
          <i className={styles.i}>WHAT</i>
          IS
          <i className={styles.i}>NEW</i>
        </span>
        <span >
          <i className={styles.i}>WHAT</i>
          IS
          <i className={styles.i}>NEW</i>
        </span>
        <span >
          <i className={styles.i}>WHAT</i>
          IS
          <i className={styles.i}>NEW</i>
        </span>
        <span >
          <i className={styles.i}>WHAT</i>
          IS
          <i className={styles.i}>NEW</i>
        </span>
        <span >
          <i className={styles.i}>WHAT</i>
          IS
          <i className={styles.i}>NEW</i>
        </span>
        <span >
          <i className={styles.i}>WHAT</i>
          IS
          <i className={styles.i}>NEW</i>
        </span>
        <span >
          <i className={styles.i}>WHAT</i>
          IS
          <i className={styles.i}>NEW</i>
        </span>
        <span >
          <i className={styles.i}>WHAT</i>
          IS
          <i className={styles.i}>NEW</i>
        </span>
        <span >
          <i className={styles.i}>WHAT</i>
          IS
          <i className={styles.i}>NEW</i>
        </span>
      </div>
    </div> */}
        <Carousel  games={games} />
      

      <div
        className="styles.textContent"

        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          backgroundColor: "white",
          // marginRight: "2.5rem",
          marginTop: "3rem",
          padding: "2rem",
          fontFamily: "Raleway, sans-serif",
        }}
      >
        <h1
          className="text-quicksand text-3xl font-bold"

          style={{ color: "#50FFB1", fontFamily: "opensans" }}
        >
          Welcome to
        </h1>
        <ul className={styles.ul}>
  <li className={styles.li}>
    <input className={styles.input} type="checkbox" />
    <div className={styles.stokkanimation}>S</div>
  </li>
  <li className={styles.li}>
    <input className={styles.input} type="checkbox" />
    <div className={styles.stokkanimation}>T</div>
  </li>
  <li className={styles.li}>
    <input className={styles.input} type="checkbox" />
    <div className={styles.stokkanimation}>O</div>
  </li>
  <li className={styles.li}>
    <input className={styles.input} type="checkbox" />
    <div className={styles.stokkanimation}>K</div>
  </li>
  <li className={styles.li}>
    <input className={styles.input} type="checkbox" />
    <div className={styles.stokkanimation}>K</div>
  </li>
  <li className={styles.li}>
    <input className={styles.input} type="checkbox" />
    <div className={styles.stokkanimation}>A</div>
  </li>
</ul>
        <h2
          className="text-quicksand"
          style={{
            color: "#00272B",
            fontFamily: "opensans",
            textAlign: "center",
          }}
        >
          Are you looking for a board game to play?
        </h2>
        <h3
          className="text-quicksand"
          style={{ fontFamily: "montserrat", textAlign: "center" }}
        >
          Stokka is an online board games library that will help you find the
          perfect match for each occasion!
        </h3>

        <div
          className="viewGames text-quicksand"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
            className=
            
               "btn btn-primary rounded"
            
          >
            <Link href="/Games">View Games</Link>
          </button>
        </div>
      </div>
      </div>
    </>

  );
}

export default HomePage;
