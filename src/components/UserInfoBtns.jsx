import React from "react";
import styles from "./UserInfoBtns.module.scss";

<<<<<<< HEAD
const UserInfoBtns = (props) => {
  const {gender,interest,city} = props
  return (
    <div className={styles.infoBtns}>
      <button className={`${styles.btn} btn-main`}>{gender}</button>
      <button className={`${styles.btn} btn-main`}>{city}</button>
      <button className={`${styles.btn} btn-main`}>{interest}</button>
=======
const UserInfoBtns = ({details}) => {
  return (
    <div className={styles.infoBtns}>
      <button className={`${styles.btn} btn-main`}>{details.gender}</button>
      <button className={`${styles.btn} btn-main`}>{details.city}</button>
      <button className={`${styles.btn} btn-main`}>{details.interest}</button>
>>>>>>> f6bb803f676384efac54f0c530d36e12b7c3f44d
    </div>
  );
};

export default UserInfoBtns;
