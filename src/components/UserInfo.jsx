import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./UserInfo.module.scss";
import UserInfoBtns from "./UserInfoBtns";
import MultiUserInfoBtn from "./MultiUserInfoBtn";
import { serverURL } from "../service/ServerConst";

const UserInfo = (props) => {
  const { nickname, skill, gender, interest, city, photo } = props;
  const image = `${serverURL}/board${photo}`;
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBackground}>
        <img className={styles.photo} src={image} alt=""></img>
      </div>

      <div className={styles.article}>
        <p className={styles.skill}>{skill}</p>
        <p className={styles.nickname}>{nickname}</p>
        <MultiUserInfoBtn gender={gender} interest={interest} city={city} />
      </div>

      <span className={styles.arrow}>{">"}</span>
    </div>
  );
};

export default UserInfo;
