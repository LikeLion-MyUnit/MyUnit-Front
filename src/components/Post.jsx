import React from "react";

import styles from "./Post.module.scss";
import { serverURL } from "../service/ServerConst";

const Post = (props) => {
  const image = `${serverURL}/board${props.poster}`;
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBackground}>
        <img className={styles.poster} src={image} alt=""></img>
      </div>

      <div className={styles.article}>
        <p className={styles.date}>마감일 : {props.end_date}</p>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.contestTitle}>{props.contest}</p>
      </div>

      <span className={styles.arrow}>{">"}</span>
    </div>
  );
};

export default Post;
