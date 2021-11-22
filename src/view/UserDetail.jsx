import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import MultiUserInfoBtn from "../components/MultiUserInfoBtn";
import styles from "../components/ProfileSettings.module.scss";
import { UserContext } from '../provider/UserProvider';
import { serverURL } from "../service/ServerConst";

const UserDetail = (props) => {
  const {
    nickname,
    city,
    gender,
    interest,
    mycomment,
    photo,
    portfolio,
    skill,
    otherUser,
    user_pk, //oponent's pk value
    my_user_pk, 
  } = props.location.state;
  const { isLoggedIn } = useContext(UserContext);

  const image = `${serverURL}/board${photo}`;
  return (
    <div className={styles.container}>
      <div className={styles.profileBox}>
        <img
          src={image ?? "http://placehold.jp/50x50.png"}
          alt=""
          className={styles.profileImg}
        />
        <p className={styles.name}>{nickname}</p>
      </div>
      <div className={styles.btnsContainer}>
        <MultiUserInfoBtn city={city} gender={gender} interest={interest} />
      </div>
      <div className={styles.inputContainer}>
        <h1>자기소개</h1>
        <div className={styles.intro}>{mycomment}</div>
        <h1>가능한 역할/기술</h1>
        <div className={styles.stack}>{skill}</div>
        <h1>포트폴리오</h1>
        <div className={styles.portfolio}>
          {portfolio.split("|").map((e, i) => (
            <div key={i}>{e}</div>
          ))}
        </div>
      </div>
      <Link to={isLoggedIn? {
              pathname:`/chat`,
              state:{
                nickname:nickname,
                photo:photo,
                receiver_user:user_pk,
              }
              }: {pathname:'/login'}}>
                
                {my_user_pk !== user_pk && (<button className={`${styles.btnEdit} btn-main`}>쪽지보내기</button>)}
              </Link>
    </div>
  );
};

export default UserDetail;
