import React, { useContext } from "react";
import UserInfoBtns from "./UserInfoBtns";
import { UserContext } from "../provider/UserProvider";
import styles from "./ProfileSettings.module.scss";
import { useHistory } from "react-router";

const ProfileSettings = () => {
  const { user, details } = useContext(UserContext);
  const history = useHistory();
  function onClickProfileBtn() {
    history.push("/signup_detail");
  }
  // ? `${serverURL}/board/media${details.photo.split("/media")[1]}`
  const image = details !== null ? `${details.photo}` : null;

  return user && details ? (
    <>
      <Profile
        image={image}
        nickname={details.nickname}
        city={details.city}
        gender={details.gender}
        interest={details.interest}
        mycomment={details.mycomment}
        skill={details.skill}
        portfolio={details.portfolio}
      />
      <button
        className={`${styles.btnEdit} btn-main`}
        onClick={onClickProfileBtn}
      >
        수정하기
      </button>
    </>
  ) : (
    <div></div>
  );
};

export default ProfileSettings;

export const Profile = ({
  image,
  nickname,
  city,
  gender,
  interest,
  mycomment,
  skill,
  portfolio,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileBox}>
        <span className={styles.thumbnailBackground}>
          <img
            src={image ?? "http://placehold.jp/50x50.png"}
            alt=""
            className={styles.profileImg}
          />
        </span>
        <p className={styles.name}>{nickname}</p>
      </div>
      <div className={styles.btnsContainer}>
        <UserInfoBtns city={city} gender={gender} interest={interest} />
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
        </div>{" "}
      </div>
    </div>
  );
};
