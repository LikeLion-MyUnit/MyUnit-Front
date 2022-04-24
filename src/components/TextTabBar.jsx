import React from "react";
import styles from "./TextTabBar.module.scss";

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
    </div>
  );
};

export default FirstTabBar;
