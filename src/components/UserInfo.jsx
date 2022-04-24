import React from "react";

import styles from "./UserInfo.module.scss";
import UserInfoBtns from "./UserInfoBtns";

const UserInfo = (props) => {
  const { nickname, skill, gender, interest, city, photo } = props;

  const image = `${photo}`;

  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBackground}>
        <img className={styles.photo} src={image} alt=""></img>
      </div>

      <div className={styles.article}>
        <p className={styles.skill}>{skill}</p>
        <p className={styles.nickname}>{nickname}</p>
        <UserInfoBtns gender={gender} interest={interest} city={city} />
      </div>

      <span className={styles.arrow}>{">"}</span>
    </div>
  );
};

export default UserInfo;
