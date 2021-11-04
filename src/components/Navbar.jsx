import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBellSlash,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";

const Navbar = () => {
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
        <button className={styles.btnLogout}>
          <span>로그아웃</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
