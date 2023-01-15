import Badge from "../Badge/Badge";

export default function Card({game}){
    return(
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={game.artwork_image_url} alt={game.title} /></figure>
  <div className="card-body">
        {game.genre.map((gameGenre) =>
        (<Badge genre={gameGenre}/>)
        )}
    <h2 className="card-title">{game.title}</h2>
    <p>{game.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href={`/games/${game.id}`}>View</a></button>
    </div>
  </div>
</div>
    )
}

