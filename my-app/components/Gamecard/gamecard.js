import styles from "./gamecard.module.css";
import { useState } from "react";






function Gamecard(props) {
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

    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className={styles.readMoreButton}>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
}

export default Gamecard;
