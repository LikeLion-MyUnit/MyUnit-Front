import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./Post.module.scss";

const Post = () => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBackground}>
        <FontAwesomeIcon icon={faUser} className={styles.thumbnail} />
      </div>

      <div className={styles.article}>
        <p className={styles.date}>마감날짜</p>
        <p className={styles.title}>모집글 제목</p>
        <p className={styles.contestTitle}>대회명</p>
      </div>

      <span className={styles.arrow}>{">"}</span>
    </div>
  );
};

export default Post;
