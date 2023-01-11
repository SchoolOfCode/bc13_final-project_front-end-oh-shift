import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Gamecard from "../components/Gamecard/gamecard.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.cardComponentSection}>
        <Gamecard />
        <Gamecard />
        <Gamecard />
        <Gamecard />
      </div>
    </main>
  );
}
