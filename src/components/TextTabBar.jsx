import React from "react";
import styles from "./texttabbar.module.scss";

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
    </div>
  );
};

export default TextTabBar;
