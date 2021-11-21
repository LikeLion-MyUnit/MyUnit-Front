import React from "react";

import styles from "./ReceivedMessage.module.scss";

const ReceivedMessage = (props) => {
  const {message} = props
  return (
    <div className={styles.message}>
      {message}
    </div>
  );
};

export default ReceivedMessage;
