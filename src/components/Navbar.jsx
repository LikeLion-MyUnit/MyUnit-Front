import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";
import { UserContext } from "../provider/UserProvider";
import { useHistory } from "react-router";

const Navbar = () => {
  const { details, logout, isLoggedIn } = useContext(UserContext);
  const history = useHistory();

  function onClickProfileBtn() {
    history.push("/mypage");
  }
  function onClickLogo() {
    history.push("/");
  }

  return (
    <nav className={styles.navbar}>
      <img
        src="img/logo_short.png"
        alt=""
        className={styles.logo}
        onClick={onClickLogo}
      />

      <div className={styles.btnGroup}>
        <button className={styles.btnAlarm}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className={styles.btnSettings} onClick={onClickProfileBtn}>
          <FontAwesomeIcon icon={faUserCog} />
        </button>
        {isLoggedIn ? (
          <div>
            <span className={styles.nickname}>{details.nickname}님</span>
            <button
              className={styles.btnLogout}
              onClick={() => {
                logout();
              }}
            >
              <span>로그아웃</span>
            </button>
          </div>
        ) : (
          <button
            className={styles.btnLogout}
            onClick={() => {
              history.push("/login");
            }}
          >
            <span>로그인</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
