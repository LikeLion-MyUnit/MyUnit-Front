import React from "react";

import styles from "./signupDetail.module.scss";

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
        <button className="btn-white">닉네임 변경</button>
      </div>
      <div className="select-container">
        <select name="age">
          <option value="" disabled>
            나이
          </option>
          {/* 나이 셀렉트 */}
        </select>
        <select name="gender">
          <option value="" disabled>
            성별
          </option>
          {/* 성별 셀렉트 */}
        </select>
        <select name="area">
          <option value="" disabled>
            지역
          </option>
          {/* 지역 셀렉트 */}
        </select>
        <select name="interest">
          <option value="" disabled>
            관심 분야
          </option>
          {/* 관심 분야 셀렉트 */}
        </select>
      </div>
      <div className="input-container">
        <div className="input-box">
          <p>자기소개</p>
          <hr />
          <textarea name="intro" cols="30" rows="10"></textarea>
        </div>
        <div className="input-box">
          <p>가능한 역할 / 기술</p>
          <hr />
          <textarea name="stack" cols="30" rows="10"></textarea>
        </div>
        <div className="input-box">
          <p>포트폴리오</p>
          <hr />
          <textarea name="portfolio" cols="30" rows="10"></textarea>
        </div>
        <div className="add-box">
          <p>수상/자격증/어학</p>
          <hr />
          <button className="btn-white">추가</button>
        </div>
      </div>
      <hr />
      <button className="btn-gray" onClick={() => history.push("/welcome")}>
        나중에 할게요
      </button>
      <button className="btn-main">작성완료</button>
    </div>
  );
};

export default SignupDetail;
