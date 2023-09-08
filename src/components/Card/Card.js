import star from "./star.png";
import styles from "./Card.module.css"


export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }
  return (
    
    <div className={styles.card} >
      {badgeText && <div className={styles.badge}>{badgeText}</div>}
      <img
        className={styles.image}
        src={`../images/${props.coverImg}`}
        alt="pic"
      />
      <div className={styles.stats}>
        <img src={star} alt="" className={styles.star} />
        <span>{props.stats.rating}</span>
        <span className={styles.gray}>({props.reviewCount}) • </span>
        <span className={styles.gray}>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className={styles.bold}> From ${props.price} </span>/ person
      </p>
    </div>
  );
}
