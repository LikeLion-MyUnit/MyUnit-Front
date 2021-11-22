import React from "react";

import styles from "./SentMessage.module.scss";

const SentMessage = (props) => {
  const {message} = props
  return (
    <div className={styles.sentMessageBox}>
      <div className={styles.sentMessage}>
        <p>{props.time.split('T')[0]} : { props.time.split('T')[1].split('.')[0]}</p>
        {message}
      </div>
    </div>
  );
};

export default SentMessage;
