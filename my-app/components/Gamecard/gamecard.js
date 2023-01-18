import styles from "./gamecard.module.css";
import Badge from "../Badge/Badge";
function Gamecard({ game }) {
  let description = game.description;

  let wordCount = 20;
  let words = description.split(" ");
  let shortDescription = words.slice(0, wordCount).join(" ") + "...";
  console.log(shortDescription);
  return (
    //SOPHIE CARD
    <div
      className="card w-96 bg-base-100 shadow-xl"
      style={{ marginBottom: "2rem", maxWidth: "400px", maxHeight: "500px"}}
    >
      <figure>
        <img
          style={{ width: "100%" }}
          src={game.artwork_image_url}
          alt="game image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{game.title}</h2>

        <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          <div className="badgecontainer">
            <Badge
              key={game.minimum_players}
              label={`${game.minimum_players}-${game.maximum_players} players`}
            />
            <Badge key={game.difficulty} label={game.difficulty} />
            <Badge key={game.minimum_age} label={`${game.minimum_age}+`} />
            <Badge key={game.duration} label={`${game.duration} mins`} />
            {game.genre?.map((gameGenre) => {
              console.log(game.genre);
              return <Badge key={gameGenre} label={gameGenre} />;
            })}
          </div>
        </div>
        </div>
      </div>
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
