import React from "react";
import { useState, useEffect, useContext } from "react";
import { useGet } from "../customHooks/useGet";
import Link from "next/link";
import styles from "../../styles/HomePage.module.css";
import Carousel from "../Carousel/Carousel.js";
import { DarkModeWrapper } from "../../pages/_app";

function HomePage() {
  let {darkMode,setDarkMode}= useContext(DarkModeWrapper)
  const [games, setGames] = useState([]);
  const [response, error] = useGet(`https://stokka.onrender.com/api/games`);

  useEffect(() => {
    setGames(response);
  }, [response]);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Carousel games={games} />
      </div>

      <div
        className="styles.textContent"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          backgroundColor: "white",
          marginRight: "2.5rem",
          marginTop: "3rem",
          padding: "2rem",
          fontFamily: "Raleway, sans-serif",
        }}
      >
        <h1
            className={`text-3xl font-bold ${darkMode?"bg-primary":"bg-secondary"}`}
          style={{ color: "#50FFB1", fontFamily: "opensans" }}
        >
          Welcome to Stokka
        </h1>
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
            className={
              true
                ? "btn btn-active btn-primary rounded"
                : "btn btn-active btn-primary rounded"
            }
          >
            <Link href="/Games">View Games</Link>
          </button>
          <button className={darkMode?"bg-primary":"bg-secondary"}
        onClick={()=>setDarkMode(!darkMode)}
        >
          Toggle</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
