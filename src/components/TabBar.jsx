import React from "react";
import styles from "./Tabbar.module.scss";

const TabBar = ({ tabs, selected, callback }) => {
  //List<String> tabs, function callback(setState)
  return (
    <div className={styles.container}>
      {tabs.map((t) => (
        <div
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
