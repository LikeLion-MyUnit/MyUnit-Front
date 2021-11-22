import React, { useContext, useEffect, useState } from "react";
import Message from "../components/Message";
import { UserContext } from '../provider/UserProvider';
import { getMessages } from "../service/AuthService";
import { serverURL } from '../service/ServerConst';

const Messages = () => {
  const [messages, setMessages] = useState({});
  const { user } = useContext(UserContext);
  
  useEffect(() => {
    if (user)
    getMessages(user.token, user.user_pk).then((e) => {
      setMessages(e);
    });
  }, [user]);

  return (
    <>
      {Object.values(messages).map((e, i) => (
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
