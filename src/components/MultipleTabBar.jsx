import React from "react";
import styles from "./multipleTabBar.module.scss";

const MultipleTabBar = ({ tabs, selected, callback }) => {
  tabs = tabs.filter((e) => !selected.includes(e));

  return (
    <div className={styles.container}>
      {selected.map((t) => (
        <span className={styles.btnSelected} onClick={() => callback(t)}>
          {t}
        </span>
      ))}
      {tabs.map((t) => (
        <span className={styles.btn} onClick={() => callback(t)}>
          {t}
        </span>
      ))}
    </div>
  );
};

export default MultipleTabBar;
