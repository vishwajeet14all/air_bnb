import styles from "./Hero.module.css";
import photo from "./photo-grid.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src={photo} className={styles.photo} alt="" />
      <h1 className={styles.header}>Online Experiences</h1>
      <p className={styles.text}>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}
