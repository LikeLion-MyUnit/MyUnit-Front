import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ReceivedMessage from "../components/ReceivedMessage";
import SentMessage from "../components/SentMessage";
import { UserContext } from "../provider/UserProvider";
import styles from "./Chat.module.scss";
import axios from "axios";
import { serverURL } from "../service/ServerConst";
import $ from "jquery";

const onSubmit = () => {};

const Chat = (props) => {
  const { nickname, receiver_user } = props.location.state;
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);
  const changeInput = (e) => {
    setMessage(e.target.value);
  };
  async function SendMessage(e) {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: `${serverURL}/chat/messages/`,
        xstfCookieName: "csrftoken",
        xsrfHeaderName: "X-CSRFToken",
        headers: {
          Authorization: `Token ${user.token}`,
        },
        data: {
          receiver: receiver_user,
          sender: user.user_id,
          message: message,
        },
      });
      getMessage();
      setMessage("");
    } catch (e) {
      console.log(e.response.data);
    }
  }

  async function getMessage() {
    try {
      let response = await axios({
        method: "get",
        url: `${serverURL}/chat/messages/${user.user_id}/${receiver_user}`,
        xstfCookieName: "csrftoken",
        xsrfHeaderName: "X-CSRFToken",
        headers: {
          Authorization: `Token ${user.token}`,
        },
        data: {
          receiver: receiver_user,
          sender: user.user_id,
        },
      });
      $("#chatContent").scrollTop($("#chatContent")[0].scrollHeight);
      return setList(response.data);
    } catch (e) {
      console.log(e.response.data);
    }
  }
  useEffect(() => {
    getMessage();
    const interval_id = setInterval(getMessage, 2000);
    return () => {
      clearInterval(interval_id);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>메세지</h1>
      <p>{nickname}</p>
      <div id="chatContent" className={styles.chatBox}>
        {list.map((list, i) =>
          list.sender === user.user_id ? (
            <SentMessage key={i} message={list.message} />
          ) : (
            <ReceivedMessage key={i} message={list.message} />
          )
        )}
      </div>
      <form onSubmit={onSubmit} className={styles.inputBox}>
        <input
          value={message}
          name="message"
          type="text"
          placeholder="메세지..."
          onChange={changeInput}
        />
        <button className="btn-main" onClick={SendMessage}>
          보내기
        </button>
      </form>
    </div>
  );
};

export default Chat;
