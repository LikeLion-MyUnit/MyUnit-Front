import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./PostDetail.module.scss";
import "../common/Common.scss";
import { serverURL } from "../service/ServerConst";
import axios from "axios";

function PostDetail(props) {
  const { history, location } = props;
  const image = `${serverURL}/board${location.state.image}`;
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="">대회명:{location.state.title}</div>
          <div className="">작성자: {location.state.author}</div>
          <div className="">대회명:{location.state.contest}</div>
          <hr />
        </div>
        <div className="content">{location.state.content}</div>
        <hr />
        <div className={styles.image_container}>
          <div className={styles.image}>
            <img src={image} />
          </div>
        </div>
        <div className={styles.button_container}>
          <button className="btn-main">메세지 보내기</button>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
