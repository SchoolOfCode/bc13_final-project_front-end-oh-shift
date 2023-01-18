import styles from "./gamecard.module.css";
import Badge from "../Badge/Badge";
function Gamecard({ game }) {
  //console.log(game)
  return (
    //SOPHIE CARD
    <div>
      <div className="cardcontainer" style={{ marginBottom: "2rem" }}>
        <div className="card w-96 shadow-xl image-full">
          <figure>
            <img src={game.artwork_image_url} alt={game?.title} />
          </figure>
          <div className="card-body">
            <div className="badges">
              <Badge
                key={game.minimum_players}
                label={`${game.minimum_players}-${game.maximum_players} players`}
              />
              <Badge key={game.difficulty} label={game.difficulty} />
              <Badge key={game.minimum_age} label={`${game.minimum_age}+`} />
              <Badge key={game.duration} label={`${game.duration} mins`} />
              {game.genre?.map((gameGenre) => {
                //console.log(game.genre)
                return <Badge key={gameGenre} label={gameGenre} />;
              })}
            </div>
            <h2 className="card-title">{game.title}</h2>
            <p>{game.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href={`/games/${game.id}`}>Read More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gamecard;
