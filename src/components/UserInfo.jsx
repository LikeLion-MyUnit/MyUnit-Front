import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBackground}>
        <FontAwesomeIcon icon={faUser} className={styles.thumbnail} />
      </div>

      <div className={styles.article}>
        <p className={styles.nickname}>닉네임</p>
        <p className={styles.title}>가능한 역할</p>
        <div className={styles.infoBtns}>
          <button className={`${styles.btn} btn-main`}>20</button>
          <button className={`${styles.btn} btn-main`}>남</button>
          <button className={`${styles.btn} btn-main`}>부산</button>
          <button className={`${styles.btn} btn-main`}>기획/아이디어</button>
        </div>
      </div>

      <span className={styles.arrow}>{">"}</span>
    </div>
  );
};

export default UserInfo;
