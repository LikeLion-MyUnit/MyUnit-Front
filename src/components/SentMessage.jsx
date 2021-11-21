import React from "react";

import styles from "./SentMessage.module.scss";

const SentMessage = (props) => {
  const {message} = props
  return (
    <div className={styles.sentMessageBox}>
      <div className={styles.sentMessage}>
        {message}
      </div>
    </div>
  );
};

export default SentMessage;
