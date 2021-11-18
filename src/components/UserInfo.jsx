import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./UserInfo.module.scss";
import UserInfoBtns from "./UserInfoBtns";

const UserInfo = (props) => {
  const {nickname,skill,gender,interest,city} = props;
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBackground}>
        <FontAwesomeIcon icon={faUser} className={styles.thumbnail} />
      </div>

      <div className={styles.article}>
        <p className={styles.nickname}>{nickname}</p>
        <p className={styles.title}>{skill}</p>
        <UserInfoBtns gender={gender} interest={interest} city={city}/>
      </div>

      <span className={styles.arrow}>{">"}</span>
    </div>
  );
};

export default UserInfo;
