import React from "react";
import styles from "./UserInfoBtns.module.scss";

const UserInfoBtns = ({ gender, city, interest }) => {
  return (
    <div className={styles.infoBtns}>
      <button className={`${styles.btn} btn-main`}>{gender}</button>
      <button className={`${styles.btn} btn-main`}>{city}</button>
      <button className={`${styles.btn} btn-main`}>{interest}</button>
    </div>
  );
};

export default UserInfoBtns;
