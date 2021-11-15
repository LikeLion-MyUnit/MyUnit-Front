import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBackground}>
        <FontAwesomeIcon icon={faUser} className={styles.thumbnail} />
      </div>

      <div className={styles.article}>
        <p className={styles.date}>{props.end_date}</p>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.contestTitle}>{props.contest}</p>
      </div>

      <span className={styles.arrow}>{">"}</span>
    </div>
  );
};

export default Post;
