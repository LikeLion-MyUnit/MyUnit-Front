import React from "react";
import UserInfo from "./../components/UserInfo";

import styles from "./Interest.module.scss";
import Post from "./../components/Post";

const Interest = () => {
  return (
    <>
      <div className={styles.profiles}>
        <p className={styles.title}>관심프로필</p>
        {/* <UserInfo />
        <UserInfo /> */}
      </div>
      <div className={styles.recruitment}>
        <p className={styles.title}>관심모집글</p>
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Interest;
