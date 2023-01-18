import { useState } from "react";
import styles from "./gamecard.module.css";
import Badge from "../Badge/Badge";
import Tabs from "../Tabs/tabs";
import Summary from "../Tabs/TabsCollection/Summary";
import About from "../Tabs/TabsCollection/About";
import Review from "../Tabs/TabsCollection/Review";

function Gamecard({ game }) {
const [tab, setTab] = useState("Summary")

  
  return (
    <>
    <div>
<Tabs setTab={setTab}/>
</div>
{tab === 'Summary' ? <Summary game={game}/> : (tab ==='About'? <About description={game.description} location={game.location} title={game.title}/> : <Review/>)}
    
      </>
  );
}

{
  /* <div >
<div className="cardcontainer" style={{marginBottom:"2rem"}}>
  <div className="card w-96 shadow-xl image-full">
  <figure>
  <img src={game.artwork_image_url} alt={game?.title} /></figure>
  <div className="card-body">
  <div className="badges">
        <Badge key={game.minimum_players} label={`${game.minimum_players}-${game.maximum_players} players`}/>
        <Badge key={game.difficulty} label={game.difficulty}/>
        <Badge key={game.minimum_age} label={`${game.minimum_age}+`}/>
        <Badge key={game.duration} label={`${game.duration} mins`}/>
        {game.genre?.map((gameGenre) => {
        console.log(game.genre)
        return (<Badge key={gameGenre} label={gameGenre}/>)}
        )}
        </div>
    <h2 className="card-title">{game.title}</h2>
    <p>{game.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href={`/games/${game.id}`}>Read More</a></button>
    </div> */
}

//   </div>
// </div>
// </div>
// </div>

export default Gamecard;
