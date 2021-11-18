import React, { useContext, useEffect, useState } from "react";
import UserInfoBtns from "./UserInfoBtns";
import { UserContext } from "../provider/UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProfileSettings.module.scss";
import { useHistory } from "react-router";

const ProfileSettings = () => {
  const { user, details, updateProfile } = useContext(UserContext);
  
  const history = useHistory();
  function onClickProfileBtn() {
    history.push('/signup_detail');
  }

  return user && details ? (
    <div className={styles.container}>
      <div className={styles.profileBox}>
        <img
          src="http://placehold.jp/50x50.png"
          alt=""
          className={styles.profileImg}
        />
        <p className={styles.name}>{user.nickname}</p>
        {/* <div className={styles.interest}>
          <FontAwesomeIcon icon={faHeart} className={styles.heart} />
          <span className={styles.heartCount}>100</span>
        </div> */}
      </div>
      <div className={styles.btnsContainer}>
        <UserInfoBtns details={details}/>
      </div>
      <div className={styles.inputContainer}>
        <h1>자기소개</h1>
        <div className={styles.intro}>
         {details.mycomment}
        </div>
        <h1>가능한 역할/기술</h1>
        <div className={styles.stack}>{details.skill}</div>
        {/* <h1>수상/자격증/어학실적</h1>
        <div className={styles.certificate}>
          <button>이름</button>
          <button>등급/점수</button> */}
        {/* </div> */}
        <h1>포트폴리오</h1>
        <div className={styles.portfolio}>
         {details.portfolio}
        </div>
      </div>
      <button  className={`${styles.btnEdit} btn-main`} onClick={onClickProfileBtn}>수정하기</button>
    </div>
  ) : (<div></div>);
};

export default ProfileSettings;
