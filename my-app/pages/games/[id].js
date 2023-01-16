import React from "react";
import fetchUrl from '../../components/Display/display.js'
import Badge from "../../components/Badge/Badge.js";

// const fetchUrl = 'http://localhost:4000/api/games'

export async function getStaticPaths() {
    const res = await fetch(fetchUrl);
    const data = await res.json();
    const game = data.payload;
    console.log('getStaticPaths called')

  return {
    paths: game.map((game) => ({
      params: { id: game.id.toString() },
    })),
    fallback: false,
  };
}




export async function getStaticProps({ params }) {
  const res = await fetch(`${fetchUrl}/${params.id}`);
  return {
    props: {
      game: await res.json(),
    },
  };
}

export default function Details({ game }) {
    console.log(game)
    const gameInformation = game.payload;
    const gameGenre = gameInformation.genre;
  return (
    <div>
        <title>{gameInformation.title}</title>
      <div className='game-info'>
        <div>
          <img
            className ='game-image'
            src={gameInformation.packaging_image_url}
            alt={gameInformation.title}
          />
        </div>
        <div>
          <h1>{gameInformation.title}</h1>
          <p>{gameInformation.description}</p>
        </div>
      </div>
    </div>
  );
}