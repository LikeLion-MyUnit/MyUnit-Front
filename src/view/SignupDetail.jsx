import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../provider/UserProvider";
import { postUserProfile } from "../service/AuthService";

import styles from "./signupDetail.module.scss";

const SignupDetail = ({ history }) => {
  const { user, details, updateProfile } = useContext(UserContext);
  const [inputData, setInputData] = useState({ nickname: "", is_open: true });

  useEffect(() => {
    if (user === null && details === null) {
    } else {
      if (details.city === "선택안함") {
        setInputData({ ...user, ...details, city: "서울" });
      }
      setInputData({ ...user, ...details });
    }
  }, [user, details]);

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

      //TODO: 파일 삽입
      //TODO: 사진 확인

      case "is_open":
        setInputData({ ...inputData, is_open: !inputData.is_open });
        break;
      default:
    }
  }

  async function onSubmit(e) {
    e.preventDefault();

    let response = await postUserProfile(
      user.token,

      {
        user_pk: user.user_pk,
        photo: inputData.photo,
        gender: inputData.gender,
        city: inputData.city,
        interest: inputData.interest,
        skill: inputData.skill,
        mycomment: inputData.mycomment,
        portfolio: inputData.portfolio,
        is_open: inputData.is_open,
      }
    );
    if (response !== null) {
      updateProfile(response);
      history.push("/welcome");
    }
  }

  function changeProfileInput(e) {
    setInputData({ ...inputData, photo: e.target.files[0] });
  }

  function changePortfolioInput(e) {
    setInputData({ ...inputData, portfolio: e.target.files[0] });
  }

  return (
    <div className={styles.container}>
      <p className={styles.alert}>
        프로필을 자세히 쓸수록 모집 / 초대 확률이 높아져요
      </p>
      닉네임 : {inputData.nickname}
      <div className={styles.profileBox}>
        <img
          src="http://placehold.jp/50x50.png"
          alt=""
          className={styles.profileImg}
        />
        <input
          className={styles.profileFileInput}
          name="poster"
          type="file"
          // value={inputData.photo}
          // accept="image/jpg,image/png,image/jpeg,image/gif"
          onChange={changeProfileInput}
        />
      </div>
      <div className={styles.selectContainer}>
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
        {/* <div className={styles.inputBox}>
          <p>포트폴리오</p>
          <hr />
          <textarea
            name="portfolio"
            cols="30"
            rows="10"
            onChange={changeTextInput}
            value={inputData.portfolio}
          ></textarea>
        </div> */}
        <div className={styles.inputBox}>
          <p>수상/자격증/어학</p>
          <hr />
          <div className={styles.addBtnContainer}>
            <input
              className={styles.profileFileInput}
              name="poster"
              type="file"
              // value={inputData.photo}
              // accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={changePortfolioInput}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.checkBoxContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="is_open"
          checked={inputData.is_open}
          onChange={changeTextInput}
        ></input>
        프로필 공개 여부
      </div>
      <div className={styles.rowBtns}>
        {/* <button
          className={`${styles.btnGreyBottom} btn-gray`}
          onClick={() => history.push("/welcome")}
        >
          나중에 할게요
        </button> */}
        <button className="btn-main" onClick={onSubmit}>
          작성완료
        </button>
      </div>
    </div>
  );
};

export default SignupDetail;
