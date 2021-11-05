import React from "react";
import styles from "./UserInfoBtns.module.scss";

const UserInfoBtns = () => {
  return (
    <div className={styles.infoBtns}>
      <button className={`${styles.btn} btn-main`}>20</button>
      <button className={`${styles.btn} btn-main`}>남</button>
      <button className={`${styles.btn} btn-main`}>부산</button>
      <button className={`${styles.btn} btn-main`}>기획/아이디어</button>
    </div>
  );
};

export default UserInfoBtns;
