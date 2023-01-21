import React from "react";

import { useState, useEffect, useContext } from "react";
import { useGet } from "../customHooks/useGet";
import Link from "next/link";
import styles from "../../styles/HomePage.module.css";
import Carousel from "../Carousel/Carousel.js";
import {DarkModeWrapper} from '../../pages/_app'
// import DarkModeToggle from '../ToggleMode/togglebutton'


function HomePage() {
  let {darkMode,setDarkMode}= useContext(DarkModeWrapper)
  const [games, setGames] = useState([]);
  const [response, error] = useGet(`https://stokka.onrender.com/api/games`);
  
//----START toggle background image
  // useEffect(()=> {
  //   function changeBackground(){
  //     document.querySelector("html").style.backgroundImage = "url(https://i.imgur.com/Ub2hwAr.png)";
  //   }
  //   changeBackground();
  // }, [])
//-----END toggle background image

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
    <button className={darkMode?"btn btn-primary":"btn btn-secondary"}
        onClick={()=>setDarkMode(!darkMode)} changeBackground={()=>changeBackground}
        >
          Toggle</button>
    <h1
          className="text-quicksand text-2xl font-bold"

          style={{ color: "#00272B", textAlign:"center", marginTop:"2rem" }}
        >
      <span className={darkMode ? "text-white":"text-accent"}>What is</span> <span style={{color:"#50FFB1"}}>NEW</span> 
        </h1>
       
        <Carousel  games={games} />
      

      <div
        className={darkMode ? "bg-accent":"bg-white"}

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

          style={{ color: "#50FFB1", paddingTop:"1.5rem" }}
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
          className= {darkMode ? "text-white text-quicksand":"text-accent text-quicksand"}
          style={{
            textAlign: "center",
          }}
        >
          Are you looking for a board game to play?
        </h2>
        <h3
          className={darkMode ? "text-white text-quicksand":"text-accent text-quicksand"}
          style={{ textAlign: "center"}}
        >
          Stokka is an online board games library that will help you find the
          perfect match for each occasion!
        </h3>

        <div
          className="viewGames text-quicksand"
          style={{ display: "flex", justifyContent: "center", paddingBottom:"1.5rem" }}
        >
          <button
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
            className=
            
               "btn btn-primary btn-outline rounded"
            
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
