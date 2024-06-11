import React from "react";
import styles from "./FriendList.module.css";

export default function FriendList({ friend }) {
  return (
    <div className={styles.friendList}>
      {friend.map(({ id, avatar, name, isOnline }) => (
        <div key={id} className={styles.friend}>
          <img src={avatar} alt="Avatar" className={styles.avatar} />
          <p className={styles.name}>{name}</p>
          <p className={isOnline ? styles.online : styles.offline}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      ))}
    </div>
  );
}
