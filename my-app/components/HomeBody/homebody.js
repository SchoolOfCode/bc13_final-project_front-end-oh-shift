import React from "react";
import Link from "next/link";
import styles from "../../styles/Homebody.module.css";

function Homebody() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a
        arcu quam. Vestibulum id convallis nulla, in varius felis. Nunc purus
        magna, faucibus vel efficitur sit amet, rhoncus nec ex. Donec sit amet
        ultrices risus. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Quisque eget ligula diam.
      </p>
      {/* <button className={styles.viewGames}> */}
      <button
        className="btn btn-active btn-primary"
      >
        <Link href="/Games">View Games</Link>
      </button>
    </div>
  );
}

export default Homebody;
