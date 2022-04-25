import React, { useContext, useEffect, useState } from "react";
import Message from "../components/Message";
import styles from "./Messages.module.scss";
import { UserContext } from "../provider/UserProvider";
import { getMessages } from "../service/AuthService";
import Navbar from "../components/Navbar";

const Messages = React.memo(({ independentPage = false }) => {
  const [messages, setMessages] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    function initMessages() {
      getMessages(user.token, user.user_pk).then((e) => {
        setMessages(e);
      });
    }
    let interval_id;
    if (user) {
      interval_id = setInterval(initMessages, 2000);
    }
    return () => {
      if (user) clearInterval(interval_id);
    };
  }, [user]);

  return (
    <>
      {independentPage === true ? <Navbar /> : <div></div>}
      <div className={styles.container}>
        {messages !== null && messages !== undefined ? (
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
          <div className={styles.commentBox}>메시지가 없습니다.</div>
        )}
      </div>
    </>
  );
});

export default Messages;
