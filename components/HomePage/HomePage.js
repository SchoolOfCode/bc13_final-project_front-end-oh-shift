import React from "react";
import { useState, useEffect } from "react";
import { useGet } from "../customHooks/useGet";
import Link from "next/link";
import styles from "../../styles/HomePage.module.css";
import Carousel from '../Carousel/Carousel.js'

function HomePage() {
  const [games, setGames] = useState([]);
  const [response, error] = useGet(
    `https://stokka.onrender.com/api/games`
  );

  useEffect(() => {
    setGames(response);
  }, [response]);

  console.log('this is games on homepage', games)
  return(
  <>
    <Carousel games={games}/>

      <div
        className="styles.textContent"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h1
          className="text-3xl font-bold"
          style={{ color: "#50FFB1", fontFamily: "opensans" }}
        >
          Welcome to Stokka
        </h1>
        <h2 style={{ color: "#00272B", fontFamily: "opensans" }}>
          Are you looking for a board game to play?
        </h2>
        <h3 style={{ fontFamily: "montserrat", textAlign: "center" }}>
          Stokka is an online board games library that will help you find the
          perfect match for each occasion!
        </h3>
      </div>
       {/* <button className={styles.viewGames}> */}
      <div
        className="viewGames"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button style={{marginTop:"20px"}}
          className={true ? "btn btn-active btn-primary rounded" : 'btn btn-active btn-primary rounded'}
        >
          <Link href="/Games">View Games</Link>
        </button>
      </div>
    </>
  );
}

export default HomePage;
