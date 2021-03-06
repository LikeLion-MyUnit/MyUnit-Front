import React from "react";
import styles from "./MultipleTabBar.module.scss";

const MultipleTabBar = ({ tabs, selected, callback }) => {
  tabs = tabs.filter((e) => !selected.includes(e));

  return (
    <div className={styles.container}>
      {selected.map((t, i) => (
        <span
          key={i}
          className={styles.btnSelected}
          onClick={() => callback(t)}
        >
          {t}
        </span>
      ))}
      {tabs.map((t, i) => (
        <span key={i} className={styles.btn} onClick={() => callback(t)}>
          {t}
        </span>
      ))}
    </div>
  );
};

export default MultipleTabBar;
