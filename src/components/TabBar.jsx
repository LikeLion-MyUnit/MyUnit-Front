import React from "react";
import styles from "./TabBar.module.scss";

const TabBar = ({ tabs, selected, callback }) => {
  //List<String> tabs, function callback(setState)
  return (
    <div className={styles.container}>
      {tabs.map((t, i) => (
        <div
          key={i}
          className={t === selected ? styles.btnTabSelected : styles.btnTab}
          onClick={() => callback(t)}
        >
          <span className={t === selected ? styles.textSelected : styles.text}>
            {t}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
