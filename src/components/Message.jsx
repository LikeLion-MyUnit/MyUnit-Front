import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../provider/UserProvider";
import { getUserProfile } from "../service/AuthService";

import styles from "./Message.module.scss";

const Message = React.memo(({ user_pk, lastMessage, time }) => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [counterpartUser, setCounterpartUser] = useState(null);
  const image = counterpartUser !== null ? `${counterpartUser.photo}` : null;

  useEffect(() => {
    if (user !== null)
      getUserProfile(user.token, user_pk).then((e) => {
        setCounterpartUser(e);
      });
  }, [user, user_pk]);

  const directionMessage = () => {
    history.push({
      pathname: "/chat",
      state: {
        nickname: counterpartUser.nickname,
        receiver_user: counterpartUser.user_pk,
      },
    });
  };

  return (
    <div className={styles.container} onClick={directionMessage}>
      <img
        src={image ?? "http://placehold.jp/50x50.png"}
        alt=""
        className={styles.profileImg}
      />
      <div className={styles.content}>
        <p className={styles.name}>
          {counterpartUser && counterpartUser.nickname}
        </p>
        <p className={styles.preview}>{lastMessage ?? ""}</p>
      </div>
      <p className={styles.time}>
        {time.split("T")[0]} {time.split("T")[1].split(".")[0]}
      </p>
    </div>
  );
});

export default Message;
