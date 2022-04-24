import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./PostDetail.module.scss";
import "../common/Common.scss";
import { getUserProfile } from "../service/AuthService";
import { UserContext } from "../provider/UserProvider";

function PostDetail(props) {
  const { history, location } = props;
  const image = `${location.state.image}`;
  const [imageClick, setImageClick] = useState(false);
  const { user, isLoggedIn } = useContext(UserContext);
  const [writer, setWriter] = useState({ nickname: "" });
  const [checkMyPost, setCheckMyPost] = useState(false);

  useEffect(() => {
    if (user !== null)
      getUserProfile(user.token, location.state.author).then((e) => {
        setWriter(e);
        setCheckMyPost(e.user_pk !== user.user_pk);
      });
  }, [location.state.author, user]);

  const handleImageToggle = () => {
    setImageClick(!imageClick);
  };

  const directionMessage = () => {
    history.push(
      isLoggedIn
        ? {
            pathname: "/chat",
            state: { nickname: writer.nickname, receiver_user: writer.user_pk },
          }
        : { pathname: "/login" }
    );
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <article className={styles.article_container}>
        <div className={styles.header}>
          <p id={styles.title}>{location.state.title}</p>
          <p id={styles.writer}>작성자: {writer.nickname}</p>

          <hr />
        </div>
        <div id={styles.content}>{location.state.content}</div>

        <img
          src={image}
          alt=""
          className={imageClick ? styles.imageOnClick : styles.image}
          onClick={handleImageToggle}
        />

        {checkMyPost && (
          <div className={styles.button_container}>
            <button onClick={directionMessage} className="btn-main">
              메세지 보내기
            </button>
          </div>
        )}
      </article>
    </div>
  );
}

export default PostDetail;
