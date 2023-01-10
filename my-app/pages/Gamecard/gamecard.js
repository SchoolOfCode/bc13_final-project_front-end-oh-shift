import styles from "./gamecard.module.css";
function Gamecard() {
  return (
    <div className={styles.gameCharacteristics}>

      <div className={styles.gameHead}>
        <p className={styles.tags}>difficulty: easy </p>
        <p className={styles.tags}>duration: 30 mins</p>
        <p className={styles.tags}>genre: ____</p>
        <p className={styles.tags}>no of players: ___</p>
        <p className={styles.tags}>age: ___</p>
      <button>:</button>
      </div>

      <div>
        <br></br>
        <h1 className="gameTitle">Monopoly</h1>
      </div>
    </div>
  );
}

export default Gamecard;
