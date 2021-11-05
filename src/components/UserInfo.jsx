import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./UserInfo.module.scss";
import UserInfoBtns from "./UserInfoBtns";

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBackground}>
        <FontAwesomeIcon icon={faUser} className={styles.thumbnail} />
      </div>

      <div className={styles.article}>
        <p className={styles.nickname}>닉네임</p>
        <p className={styles.title}>가능한 역할</p>
        <UserInfoBtns />
      </div>

      <span className={styles.arrow}>{">"}</span>
    </div>
  );
};

export default UserInfo;
