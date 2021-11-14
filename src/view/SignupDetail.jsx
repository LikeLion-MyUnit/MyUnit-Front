import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../provider/UserProvider";

import styles from "./SignupDetail.module.scss";

const SignupDetail = ({ history }) => {
  const { user } = useContext(UserContext);
  const [inputData, setInputData] = useState({ nickname: "", is_open: true });

  useEffect(() => {
    if (user === null) {
      // history.push("/");
    } else {
      setInputData({ ...user });
    }
  }, [user]);

  function changeTextInput(e) {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "nickname":
        setInputData({
          ...inputData,
          nickname: value,
        });
        break;
      case "interest":
        setInputData({ ...inputData, interest: value });
        break;
      case "mycomment":
        setInputData({ ...inputData, mycomment: value });
        break;
      case "gender":
        setInputData({ ...inputData, gender: value });
        break;
      case "city":
        setInputData({ ...inputData, city: value });
        break;
      case "skill":
        setInputData({ ...inputData, skill: value });
        break;
      case "portfolio":
        setInputData({ ...inputData, portfolio: value });
        break;
      case "is_open":
        console.log(value);
        setInputData({ ...inputData, is_open: value });
        break;

      default:
    }
  }

  function onSubmit(e) {
    e.target.preventDefault();
  }

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
        <input
          name="nickname"
          className={styles.inputBoxNickname}
          value={inputData.nickname ?? ""}
          onChange={changeTextInput}
        />

        {/* <button className={`${styles.btnWhite} btn-white`}>닉네임 변경</button> */}
      </div>
      <div className={styles.selectContainer}>
        <div>
          <select
            className={styles.select}
            name="age"
            value={inputData.age}
            onChange={changeTextInput}
          >
            <option value="20세" selected>
              20세
            </option>
            <option value="21세">21세</option>
            <option value="22세">22세</option>
            <option value="23세">23세</option>
            <option value="24세">24세</option>
            <option value="25세">25세</option>
            <option value="25세">25세</option>
            <option value="26세">26세</option>
            <option value="27세">27세</option>
            <option value="28세">28세</option>
            <option value="29세">29세</option>
            <option value="30대">30대</option>

            {/* 나이 셀렉트 */}
          </select>
          <select
            className={styles.select}
            name="gender"
            value={inputData.gender}
            onChange={changeTextInput}
          >
            <option value="남자">남자</option>
            <option value="여자">여자</option>
            <option value="선택안함">선택안함</option>
            {/* 성별 셀렉트 */}
          </select>
        </div>
        <div>
          <select
            className={styles.select}
            name="city"
            value={inputData.city}
            onChange={changeTextInput}
          >
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="인천">인천</option>
            <option value="대구">대구</option>
            <option value="울산">울산</option>
            <option value="광주">광주</option>
            <option value="대전">대전</option>
            <option value="세종">세종</option>
            <option value="강원">강원</option>
            <option value="경기">경기</option>
            <option value="충청">충청</option>
            <option value="경상">경상</option>
            <option value="전라">전라</option>
            <option value="제주">제주</option>
            {/* 지역 셀렉트 */}
          </select>
          <select
            className={styles.select}
            name="interest"
            value={inputData.interest}
            onChange={changeTextInput}
          >
            <option value="기획/아이디어">기획/아이디어</option>
            <option value="사진/영상">사진/영상</option>
            <option value="디자인">디자인</option>
            <option value="광고/마케팅">광고/마케팅</option>
            <option value="과학/공학">과학/공학</option>
            <option value="창업">창업</option>
            <option value="기타">기타</option>
            {/* 관심 분야 셀렉트 */}
          </select>
        </div>
      </div>
      <div className="input-container">
        <div className={styles.inputBox}>
          <p>자기소개</p>
          <hr />
          <textarea
            name="mycomment"
            cols="30"
            rows="10"
            onChange={changeTextInput}
            value={inputData.mycomment}
          ></textarea>
        </div>
        <div className={styles.inputBox}>
          <p>가능한 역할 / 기술</p>
          <hr />
          <textarea
            name="skill"
            cols="30"
            rows="10"
            onChange={changeTextInput}
            value={inputData.skill}
          ></textarea>
        </div>
        <div className={styles.inputBox}>
          <p>포트폴리오</p>
          <hr />
          <textarea
            name="portfolio"
            cols="30"
            rows="10"
            onChange={changeTextInput}
            value={inputData.portfolio}
          ></textarea>
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
      <div className={styles.isOpenCheckBox}>
        <input
          type="checkbox"
          name="is_open"
          value={inputData.is_open}
          onChange={changeTextInput}
        ></input>
        프로필 공개 여부
      </div>
      <div className={styles.rowBtns}>
        <button
          className={`${styles.btnGreyBottom} btn-gray`}
          onClick={() => history.push("/welcome")}
        >
          나중에 할게요
        </button>
        <button className="btn-main" onClick={onSubmit}>
          작성완료
        </button>
      </div>
    </div>
  );
};

export default SignupDetail;
