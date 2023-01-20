import React from "react";
import Link from "next/link";
import styles from "../../styles/HomePage.module.css";

function HomePage() {
  return (
    <div
      className="landing-content"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0263/6460/8590/products/monopoly_BoxVisual_Liverpool_2019_MP03-HR_1024x1024@2x.jpg?v=1580313804"
            className="rounded-box"
            width="200"
            height="300"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0593/9049/2827/products/ptbm2q5rc4t_428x352.jpg?v=1656326753"
            className="rounded-box"
            width="180"
            height="250"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRVNX5nzFC4RMTGs6reUPXVzr_UhgIrNpATlfd4cHKSYHOkctoY_Qsi2EWFi1G_HQ9Ayyp3YlXQUhQON3Hbo6f300Szme09smaJ884KCg&usqp=CAc"
            className="rounded-box"
            width="180"
            height="250"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSa5WS6EJlkYQL5u2iPH-wpSMWJfuel-KOZJf6HeDa4BklGkOftXCroh7wBZl0vLMqZTvEOoowdnA&usqp=CAc"
            className="rounded-box"
            width="180"
            height="250"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTB2OBLmxMhGIh_wn76Q4BEHMnycziiYST6no_S0w65ZcrdmcFKcriKoSys594D9zqZdgb3bmsfq3k&usqp=CAc"
            className="rounded-box"
            width="180"
            height="250"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3alp00Uo2IGJTp6z-tWJjs8s-vF3f2SIgA&usqp=CAU"
            className="rounded-box"
            width="180"
            height="250"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/I/91sMYOj2NDL._AC_SX425_.jpg"
            className="rounded-box"
            width="180"
            height="250"
          />
        </div>
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
          className="text-quicksand text-3xl font-bold"
          style={{ color: "#50FFB1", fontFamily: "opensans" }}
        >
          Welcome to Stokka
        </h1>
        <h2 className="text-quicksand" style={{ color: "#00272B", fontFamily: "opensans", textAlign: "center" }}>
          Are you looking for a board game to play?
        </h2>
        <h3 className="text-quicksand" style={{ fontFamily: "montserrat", textAlign: "center" }}>
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
        </div>
      </div>
    </div>
  );
}

export default HomePage;
