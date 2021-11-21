import React, { useEffect, useState } from "react";
import Message from "../components/Message";
import { getMessages } from "../service/AuthService";

const Messages = () => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    getMessages().then((e) => {
      setMessages(e);
    });
  }, []);

  return (
    <>
      {messages.map((e, i) => (
        <Message
          user_pk={Object.keys(e)[i]}
          lastMessage={e.lastMessage}
          time={e.time}
        />
      ))}
    </>
  );
};

export default Messages;
