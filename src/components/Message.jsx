import React from "react";

import styles from "./Message.module.scss";

const Message = () => {
  return (
    <div className={styles.container}>
      <img
        src="http://placehold.jp/50x50.png"
        alt=""
        className={styles.profileImg}
      />
      <div className={styles.content}>
        <p className={styles.name}>닉네임1</p>
        <p className={styles.preview}>Lorem ipsum dolor sit amet....</p>
      </div>
      <p className={styles.time}>10:34</p>
    </div>
  );
};

export default Message;
