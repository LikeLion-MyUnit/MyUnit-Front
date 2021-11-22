import React, { useContext, useEffect, useState } from "react";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import { UserContext } from "../provider/UserProvider";
import { getMessages } from "../service/AuthService";

const Messages = () => {
  const [messages, setMessages] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user)
      getMessages(user.token, user.user_pk).then((e) => {
        setMessages(e);
      });
  }, [user]);

  return (
    <>
      <Navbar />
      {messages ? (
        Object.values(messages).map((e, i) => (
          <Message
            key={i}
            user_pk={Object.keys(messages)[i]}
            lastMessage={e.lastMessage}
            time={e.time}
          />
        ))
      ) : (
        <div>Empty Messages</div>
      )}
    </>
  );
};

export default Messages;
