import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./PostDetail.module.scss";
import "../common/Common.scss";
import { serverURL } from "../service/ServerConst";
import { getUserProfile } from "../service/AuthService";
import { UserContext } from "../provider/UserProvider";

function PostDetail(props) {
  const { history, location } = props;
  const image = `${serverURL}/board${location.state.image}`;
  const [imageClick, setImageClick] = useState(false);
  const { user } = useContext(UserContext);
  const [writer, setWriter] = useState({ nickname: "" });

  useEffect(() => {
    if (user !== null)
      getUserProfile(user.token, location.state.author).then((e) => {
        setWriter(e);
        console.log(user);
      });
  }, [location.state.author, user]);

  const handleImageToggle = () => {
    setImageClick(!imageClick);
  };

  const directionMessage = () => {
    history.push({
      pathname: "/chat",
      state: { nickname: writer.nickname, receiver_user: writer.user_pk },
    });
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.header}>
        <div className="">대회명:{location.state.title}</div>
        <div className="">작성자: {writer.nickname}</div>

        <hr />
      </div>
      <div className="content">{location.state.content}</div>
      <hr />
      <img
        src={image}
        alt=""
        className={imageClick ? styles.imageOnClick : styles.image}
        onClick={handleImageToggle}
      />
      <div className={styles.button_container}>
        <button onClick={directionMessage} className="btn-main">
          메세지 보내기
        </button>
      </div>
    </div>
  );
}

export default PostDetail;
