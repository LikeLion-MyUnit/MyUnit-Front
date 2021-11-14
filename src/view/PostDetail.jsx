import React from 'react'
import Navbar from "../components/Navbar";
import styles from "./PostDetail.module.scss";
import "../common/Common.scss";


function PostDetail() {

    return (
        <div>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className="">팀원을 모집합니다</div>
                    <div className="">작성자: 닉네임</div>
                    <div className="">대회명</div>
                    <hr/>
                </div>
                <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident obcaecati sapiente, rerum libero veritatis repellendus, repudiandae, laborum quaerat porro quibusdam! Labore ducimus totam cupiditate consectetur sunt qui dignissimos porro!
                </div>
                <hr/>
                <div className={styles.image_container}>
                    <div className={styles.image}>
                    </div>
                </div>
                <div className={styles.button_container}>
                <button className="btn-main">메세지 보내기</button>
                </div>
            </div>
        </div>
    )
}

export default PostDetail
