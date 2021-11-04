import React from "react";
import styles from "./texttabbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const TextTabBar = ({ tabs, selected, callback }) => {
  //List<String> tabs, function callback(setState)
  return (
    <div className={styles.container}>
      {tabs.map((t) => (
        <span className={styles.btnTab} onClick={() => callback(t)}>
          <span className={t === selected ? styles.textSelected : styles.text}>
            {t}
          </span>
        </span>
      ))}
      <div className={styles.searchGroup}>
        <form>
          <input
            name="keyword"
            type="text"
            placeholder="키워드 검색"
            className={styles.search}
          />
        </form>
        <FontAwesomeIcon icon={faSearch} className={styles.searchBtn} />
      </div>
    </div>
  );
};

export default TextTabBar;
