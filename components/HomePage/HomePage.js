import React from "react";

import { useState, useEffect, useContext } from "react";
import { useGet } from "../customHooks/useGet";
import Link from "next/link";
import styles from "../../styles/HomePage.module.css";
import Carousel from "../Carousel/Carousel.js";
import { DarkModeWrapper } from "../../pages/_app";
import Footer from "../Footer/footer";
import Header from "../Header/Header";

/**
 * @returns the base structure of the Home Page; all that comes underneath the Header.
 */

function HomePage() {
  let { darkMode, setDarkMode } = useContext(DarkModeWrapper);
  const [games, setGames] = useState([]);
  const [response, error] = useGet(`https://stokka.onrender.com/api/games`);

  useEffect(() => {
    setGames(response);
  }, [response]);

  return (
    <>
      <div
        className={darkMode ? "darkMode" : "lightMode"}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Header />

        <h1
          className=" text-quicksand text-2xl font-bold"
          style={{ color: "#00272B", textAlign: "center", paddingTop: "2rem" }}
        >
          <span className={darkMode ? "text-white" : "text-accent"}>
            What is
          </span>{" "}
          <span className={darkMode ? "text-secondary" : "text-primary"}>
            NEW
          </span>
        </h1>

        <Carousel games={games} />

        <div
          className={darkMode ? "bg-accent" : "bg-white"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            // backgroundColor: "white",
            // marginRight: "2.5rem",
            marginTop: ".5rem",
            padding: "0rem 2rem",
          }}
        >
          <h1
            className="text-quicksand text-3xl font-bold"
            style={{ color: "#50FFB1", paddingTop: "1.5rem" }}
          >
            Welcome to
          </h1>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <input
                className={darkMode ? styles.inputDark : styles.input}
                type="checkbox"
              />
              <div
                className={
                  darkMode ? styles.stokkanimationDark : styles.stokkanimation
                }
              >
                S
              </div>
            </li>
            <li className={styles.li}>
              <input
                className={darkMode ? styles.inputDark : styles.input}
                type="checkbox"
              />
              <div
                className={
                  darkMode ? styles.stokkanimationDark : styles.stokkanimation
                }
              >
                T
              </div>
            </li>
            <li className={styles.li}>
              <input
                className={darkMode ? styles.inputDark : styles.input}
                type="checkbox"
              />
              <div
                className={
                  darkMode ? styles.stokkanimationDark : styles.stokkanimation
                }
              >
                O
              </div>
            </li>
            <li className={styles.li}>
              <input
                className={darkMode ? styles.inputDark : styles.input}
                type="checkbox"
              />
              <div
                className={
                  darkMode ? styles.stokkanimationDark : styles.stokkanimation
                }
              >
                K
              </div>
            </li>
            <li className={styles.li}>
              <input
                className={darkMode ? styles.inputDark : styles.input}
                type="checkbox"
              />
              <div
                className={
                  darkMode ? styles.stokkanimationDark : styles.stokkanimation
                }
              >
                K
              </div>
            </li>
            <li className={styles.li}>
              <input
                className={darkMode ? styles.inputDark : styles.input}
                type="checkbox"
              />
              <div
                className={
                  darkMode ? styles.stokkanimationDark : styles.stokkanimation
                }
              >
                A
              </div>
            </li>
          </ul>
          <h2
            className={
              darkMode
                ? "text-white text-quicksand"
                : "text-accent text-quicksand"
            }
            style={{
              textAlign: "center",
            }}
          >
            Are you looking for a board game to play?
          </h2>
          <h3
            className={
              darkMode
                ? "text-white text-quicksand"
                : "text-accent text-quicksand"
            }
            style={{ textAlign: "center" }}
          >
            Stokka is an online board games library that will help you find the
            perfect match for any occasion!
          </h3>

          <div
            className="viewGames text-quicksand"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "1.5rem",
            }}
          >
            <button
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
              className="btn btn-primary btn-outline rounded"
            >
              <Link href="/Games">View Games</Link>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
