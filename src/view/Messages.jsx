import React, { useContext, useEffect, useState } from "react";
import Message from "../components/Message";
import styles from "./Messages.module.scss";
import { UserContext } from "../provider/UserProvider";
import { getMessages } from "../service/AuthService";

const Messages = () => {
  const [messages, setMessages] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user)
      getMessages(user.token, user.user_pk).then((e) => {
        setMessages(e);
      });
  }, [user]);

  return (
    <div className={styles.container}>
      {messages.length > 0 ? (
        Object.values(messages).map((e, i) => (
          <Message
            key={i}
            user_pk={Object.keys(messages)[i]}
            lastMessage={e.lastMessage}
            time={e.time}
          />
        ))
      ) : messages === null ? (
        <div className={styles.commentBox}>Loading..</div>
      ) : (
        // <div>Empty Messages</div>
        <div>메시지가 없습니다.</div>
      )}
    </div>
  );
};

export default Messages;
