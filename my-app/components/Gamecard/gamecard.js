import styles from "./gamecard.module.css";
function Gamecard() {
  return (
    <div className={styles.card}>
      <div className={styles.tagsButtonContainer}>
        <p className={styles.descriptors}>difficulty: easy </p>
        <p className={styles.descriptors}>duration: 30 mins</p>
        <p className={styles.descriptors}>genre: ____</p>
        <p className={styles.descriptors}>no of players: ___</p>
        <p className={styles.descriptors}>age: ___</p>
      </div>

      <div className={styles.gameTitle}>
        <h1>Monopoly</h1>
      </div>
      <div className={styles.gameInformation}>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a arcu quam. Vestibulum id convallis nulla, in varius felis. Nunc purus magna, faucibus vel efficitur sit amet, rhoncus nec ex. Donec sit amet ultrices risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget ligula diam."</p>
      </div>
      <div className={styles.readMoreButton}>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
}

export default Gamecard;
