import React from "react";
import styles from "./UserInfoBtns.module.scss";

const UserInfoBtns = ({details}) => {
  return (
    <div className={styles.infoBtns}>
      <button className={`${styles.btn} btn-main`}>{details.gender}</button>
      <button className={`${styles.btn} btn-main`}>{details.city}</button>
      <button className={`${styles.btn} btn-main`}>{details.interest}</button>
    </div>
  );
};

export default UserInfoBtns;
