import styles from "./gamecard.module.css";
function Gamecard(props) {
  return (
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
    <div>–
      <div className={styles.readMoreButton}>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
}

export default Gamecard;
