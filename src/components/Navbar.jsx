import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBellSlash,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";
import { UserContext } from "../provider/UserProvider";
import { useHistory } from "react-router";
import { getUserProfile } from "../service/AuthService";

const Navbar = () => {
  const { user, logout, isLoggedIn } = useContext(UserContext);
  const history = useHistory();
  console.log(user);

  // function onClickProfileBtn() {
  //   getUserProfile(user.token, user.user_pk);
  // }

  return (
    <nav className={styles.navbar}>
      <img src="img/logo_short.png" alt="" className={styles.logo} />

      <div className={styles.btnGroup}>
        <button className={styles.btnAlarm}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className={styles.btnSettings}>
          <FontAwesomeIcon icon={faUserCog} />
        </button>
        {isLoggedIn ? (
          <div>
            <span className={styles.nickname}>{user.nickname}님</span>
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
