import styles from "./Gamecard.module.css";
import Badge
 from "../Badge/Badge";
function Gamecard({game}) {
  //CARD ANIMATION - T TRY LATER
  // const [selectedId, setSelectedId] = useState(null);

  // {
  //   items.map((item) => (
  //     <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
  //       <motion.h5>{item.subtitle}</motion.h5>
  //       <motion.h2>{item.title}</motion.h2>
  //     </motion.div>
  //   ));
  // }

  // <AnimatePresence>
  //   {selectedId && (
  //     <motion.div layoutId={selectedId}>
  //       <motion.h5>{item.subtitle}</motion.h5>
  //       <motion.h2>{item.title}</motion.h2>
  //       <motion.button onClick={() => setSelectedId(null)} />
  //     </motion.div>
  //   )}
  // </AnimatePresence>;
  //CARD ANIMATION - TO TRY LATER
  console.log(game)
  return (

    //IKRAM AND ISAAC CARD
    // <div className={styles.card}>
    //   <div className={styles.tagsButtonContainer}>
    //     {/* <img src={props.game.artwork_image_url}></img> */}
    //     <p className={styles.descriptors}>{props.game.difficulty} </p>
    //     <p className={styles.descriptors}>{props.game.duration}</p>
    //     <p className={styles.descriptors}>{props.game.genre}</p>
    //     <p className={styles.descriptors}>{props.game.number_of_players}</p>
    //     <p className={styles.descriptors}>{props.game.age}</p>
    //     <p className={styles.descriptors}>{props.game.rating}</p>
    //   </div>

    //   <div className={styles.gameTitle}>
    //     <h1>{props.game.title}</h1>
    //   </div>
    //   <div className={styles.gameInformation}>
    //     <p>{props.game.description}</p>
    // </div>
      // <div className={styles.readMoreButton}>
      //   <button className={styles.button}>Read More</button>
      // </div>

      //SOPHIE CARD
      <div className={styles.background} >
<div className="figure" style={{marginBottom:"2rem"}}>
  {/* <div className="card w-96 shadow-xl image-full"> */}

  <figure className={styles.figure}>
  <img className="img" src={game.artwork_image_url} alt={game?.title} /></figure>
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
    </div>
   
  </div>
</div>
</div>
// </div>
  );
}

export default Gamecard;
