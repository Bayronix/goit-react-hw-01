import React from "react";
import styles from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.card}>
      <div className={styles.options}>
        <img className={styles.img} src={image} alt="User avatar" />
        <p className={styles.text}>{name}</p>
        <p className={styles.text}>{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <span className={styles.span}>Followers</span>
          <span className={styles.span}>{followers}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.span}>Views</span>
          <span className={styles.span}>{views}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.span}>Likes</span>
          <span className={styles.span}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
