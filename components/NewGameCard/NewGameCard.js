import Badge from '../Badge/Badge.js'

export default function NewGameCard({gameInfo, handleSubmit, getDifficulty, generateLocation, getGenre}){

    
    return <>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={gameInfo.image_url} alt={gameInfo.name} /></figure>
  <div className="card-body">
  <h2 className="card-title">{gameInfo.name}!</h2>
  {/* <div> <label>quantity:</label>
            <input type='number' placeholder='enter stock quantity' defaultValue = '1' min='0'></input> */}
            <button className="btn btn-primary" onClick={handleSubmit}>Add to Library</button>
            </div>
 

  <div className="first badges">
  <Badge label={`${gameInfo?.min_players}-${gameInfo?.max_players} players`}/>
            <Badge label={getDifficulty(gameInfo.average_learning_complexity, gameInfo.average_strategy_complexity)} />
            <Badge label={`${gameInfo?.min_age}+`} />
            <Badge label={`${gameInfo?.max_playtime} mins`} />
            </div>
            <div className='genre badges'>
            {gameInfo.categories?.map((gameGenre) => {
              return <Badge key={getGenre(gameGenre.id)} label={getGenre(gameGenre.id)} />;
            })}
            </div>
          </div>


   
    <p>Year Published: {gameInfo.year_published}</p>
    <a className="link link-accent" href={gameInfo.rules_url}>View rules</a>
    <p>Barcode: {gameInfo.upc}</p>
    <p>Location: {generateLocation(gameInfo.name)}</p>
    <a className="link link-accent" href={`https://www.youtube.com/results?search_query=how+to+play+${gameInfo.name}`}>Video: How to play</a>
    <p>Game Description: {gameInfo.description_preview}</p>
  </div>
</>
}