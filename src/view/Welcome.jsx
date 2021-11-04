import React from "react";
import styles from "./Welcome.module.scss";

const Welcome = ({ history }) => {
  return (
    <div className={styles.container}>
      <img src="img/logo_short.png" alt="" className={styles.logo} />
      <h1 className={styles.welcome}> 환영합니다!</h1>
      <button className="btn-main" onClick={() => history.push("/recruit")}>
        팀원 찾기
      </button>
    </div>
  );
};

export default Welcome;
