import React from "react";
import { Link } from "react-router-dom";
import MultiUserInfoBtn from "../components/MultiUserInfoBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "../components/ProfileSettings.module.scss";


const UserDetail = (props) => {
    const {nickname,city,gender,interest,mycomment,photo,portfolio,skill,user,user_pk} = props.location.state

  return (
    <div className={styles.container}>
      <div className={styles.profileBox}>
        <img
          src="http://placehold.jp/50x50.png"
          alt=""
          className={styles.profileImg}
        />
        <p className={styles.name}>{nickname}</p>
        <div className={styles.interest}>
          <FontAwesomeIcon icon={faHeart} className={styles.heart} />
          <span className={styles.heartCount}>100</span>
        </div>
      </div>
      <div className={styles.btnsContainer}>
        <MultiUserInfoBtn city={city} gender={gender} interest={interest}/>
      </div>
      <div className={styles.inputContainer}>
        <h1>자기소개</h1>
        <div className={styles.intro}>
            {mycomment}
        </div>
        <h1>가능한 역할/기술</h1>
        <div className={styles.stack}>{skill}</div>
        <h1>수상/자격증/어학실적</h1>
        <div className={styles.certificate}>
          <button>이름</button>
          <button>등급/점수</button>
        </div>
        <h1>포트폴리오</h1>
        <div className={styles.portfolio}>
          {portfolio}
        </div>
      </div>
      <Link to={{
              pathname:`/chat`,
              state:{
                nickname:nickname,
                photo:photo,
                receiver_user:user,
                receiver_user_pk:user_pk
              }
              }}>
                <button className={`${styles.btnEdit} btn-main`}>쪽지보내기</button>
              </Link>
    </div>
  );
};

export default UserDetail;
