import React from "react";

import styles from "./ReceivedMessage.module.scss";

const ReceivedMessage = (props) => {
  const {message} = props
  return (
    <div className={styles.message}>
      <p>{props.time.split('T')[0]} : { props.time.split('T')[1].split('.')[0]}</p>
      {message}
    </div>
  );
};

export default ReceivedMessage;
