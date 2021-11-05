import React from "react";

import styles from "./SignupDetail.module.scss";

const SignupDetail = ({ history }) => {
  return (
    <div className={styles.container}>
      <p className={styles.alert}>
        프로필을 자세히 쓸수록 모집 / 초대 확률이 높아져요
      </p>
      <div className={styles.profileBox}>
        <img
          src="http://placehold.jp/50x50.png"
          alt=""
          className={styles.profileImg}
        />
        <button className={`${styles.btnWhite} btn-white`}>닉네임 변경</button>
      </div>
      <div className={styles.selectContainer}>
        <div>
          <select className={styles.select} name="age">
            <option value="" selected>
              나이
            </option>
            {/* 나이 셀렉트 */}
          </select>
          <select className={styles.select} name="gender">
            <option value="" selected>
              성별
            </option>
            {/* 성별 셀렉트 */}
          </select>
        </div>
        <div>
          <select className={styles.select} name="area">
            <option value="" selected>
              지역
            </option>
            {/* 지역 셀렉트 */}
          </select>
          <select className={styles.select} name="interest">
            <option value="" selected>
              관심 분야
            </option>
            {/* 관심 분야 셀렉트 */}
          </select>
        </div>
      </div>
      <div className="input-container">
        <div className={styles.inputBox}>
          <p>자기소개</p>
          <hr />
          <textarea name="intro" cols="30" rows="10"></textarea>
        </div>
        <div className={styles.inputBox}>
          <p>가능한 역할 / 기술</p>
          <hr />
          <textarea name="stack" cols="30" rows="10"></textarea>
        </div>
        <div className={styles.inputBox}>
          <p>포트폴리오</p>
          <hr />
          <textarea name="portfolio" cols="30" rows="10"></textarea>
        </div>
        <div className={styles.inputBox}>
          <p>수상/자격증/어학</p>
          <hr />
          <div className={styles.addBtnContainer}>
            <button className={`${styles.btnWhite} btn-white`}>추가</button>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.rowBtns}>
        <button
          className={`${styles.btnGreyBottom} btn-gray`}
          onClick={() => history.push("/welcome")}
        >
          나중에 할게요
        </button>
        <button className="btn-main">작성완료</button>
      </div>
    </div>
  );
};

export default SignupDetail;
