import React from "react";
import UserInfoBtns from "./UserInfoBtns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProfileSettings.module.scss";

const ProfileSettings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileBox}>
        <img
          src="http://placehold.jp/50x50.png"
          alt=""
          className={styles.profileImg}
        />
        <p className={styles.name}>김OO</p>
        <div className={styles.interest}>
          <FontAwesomeIcon icon={faHeart} className={styles.heart} />
          <span className={styles.heartCount}>100</span>
        </div>
      </div>
      <div className={styles.btnsContainer}>
        <UserInfoBtns />
      </div>
      <div className={styles.inputContainer}>
        <h1>자기소개</h1>
        <div className={styles.intro}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          ipsum.
        </div>
        <h1>가능한 역할/기술</h1>
        <div className={styles.stack}>Lorem ipsum dolor sit amet.</div>
        <h1>수상/자격증/어학실적</h1>
        <div className={styles.certificate}>
          <button>이름</button>
          <button>등급/점수</button>
        </div>
        <h1>포트폴리오</h1>
        <div className={styles.portfolio}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          harum molestias nulla provident eius quo perspiciatis autem vel sunt?
          Vero, magni quaerat.
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
