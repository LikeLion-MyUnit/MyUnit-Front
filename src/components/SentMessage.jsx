import React from "react";

import styles from "./SentMessage.module.scss";

const SentMessage = () => {
  return (
    <div className={styles.sentMessageBox}>
      <div className={styles.sentMessage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        quas.
      </div>
    </div>
  );
};

export default SentMessage;
