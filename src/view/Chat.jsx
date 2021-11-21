import React from "react";
import Navbar from "../components/Navbar";
import ReceivedMessage from "../components/ReceivedMessage";
import SentMessage from "../components/SentMessage";

import styles from "./Chat.module.scss";

const onSubmit = () => {};
const onChange = () => {};

const Chat = (props) => {
  const {nickname,photo,user,user_pk} = props.location.state
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>메세지</h1>
      <p>{nickname}</p>
      <div className={styles.chatBox}>
        <ReceivedMessage />
        <SentMessage />
        <SentMessage />
        <ReceivedMessage />
        <ReceivedMessage />
        <ReceivedMessage />
        <SentMessage />
      </div>
      <form onSubmit={onSubmit} className={styles.inputBox}>
        <input
          //   value={message}
          //   name="message"
          type="text"
          placeholder="메세지..."
          //   onChange={changeInput}
        />
        <button className="btn-main">보내기</button>
      </form>
    </div>
  );
};

export default Chat;
