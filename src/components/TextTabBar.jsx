import React from "react";
import styles from "./TextTabBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const FirstTabBar = ({
  tabs,
  selected,
  callback,
  searchInput,
  setSearchInput,
}) => {
  //List<String> tabs, function callback(setState)
  return (
    <div className={styles.container}>
      {tabs.map((t, i) => (
        <span key={i} className={styles.btnTab} onClick={() => callback(t)}>
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
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder="키워드 검색"
            className={styles.search}
          />
        </form>
        <FontAwesomeIcon icon={faSearch} className={styles.searchBtn} />
      </div>
    </div>
  );
};

export default FirstTabBar;
