import React from "react";
import styles from "./UserInfoBtns.module.scss";


const MultiUserInfoBtn = (props) => {
  return (
    <div className={styles.infoBtns}>
      <button className={`${styles.btn} btn-main`}>{props.gender}</button>
      <button className={`${styles.btn} btn-main`}>{props.city}</button>
      <button className={`${styles.btn} btn-main`}>{props.interest}</button>
    </div>
  );
};

export default MultiUserInfoBtn
