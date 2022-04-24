import React, { useContext, useEffect, useRef, useState } from "react";
import { contestCategoryTabs, localTabs } from "../const/const";
import { UserContext } from "../provider/UserProvider";
import { postUserProfile } from "../service/AuthService";

import styles from "./SignupDetail.module.scss";

const SignupDetail = ({ history }) => {
  const isNewUser = useRef(false);
  const { user, details, updateProfile, logout } = useContext(UserContext);
  const [inputData, setInputData] = useState({
    is_open: true,
    photo: null,
    nickname: "",
    mycomment: "",
    skill: "",
    portfolio: ["http://"],
    interest: "기획/아이디어",
    gender: "남자",
    city: "서울",
  });
  const [portfolioInputLength, setPortfolioInputLength] = useState(1);

  useEffect(() => {
    if (user === null && details === null) {
    } else {
      if (details.nickname === null) {
        isNewUser.current = true;
      } else {
        let portfolio = details["portfolio"].split("|");
        setPortfolioInputLength(portfolio.length);
        setInputData({
          ...user,
          ...details,
          portfolio: portfolio,
          photo: null,
        });
      }
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
      case "is_open":
        setInputData({ ...inputData, is_open: !inputData.is_open });
        break;
      default:
    }
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (inputData["photo"] === null) {
      alert("프로필 사진이 필요합니다.");
      return;
    }
    let response = await postUserProfile(user.token, {
      user_pk: user.user_pk,
      nickname: inputData.nickname,
      photo: inputData.photo,
      gender: inputData.gender,
      city: inputData.city,
      interest: inputData.interest,
      skill: inputData.skill,
      mycomment: inputData.mycomment,
      portfolio: inputData.portfolio.join("|") ?? "",
      is_open: inputData.is_open,
    });
    if (response !== null) {
      updateProfile(response);
      if (isNewUser.current) {
        history.push("/welcome");
      } else {
        history.push("/mypage");
      }
    }
  }

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        //console.log("Called", reader);
        baseURL = reader.result;
        //console.log(baseURL);
        resolve(baseURL);
      };
      //console.log(fileInfo);
    });
  };

  function changeProfileInput(e) {
    const file = e.target.files[0];
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        //console.log("File Is", file);
        setInputData({ ...inputData, photo: result });
      })
      .catch((err) => {
        //console.log(err);
      });
  }

  function changePortfolioInput(e, index) {
    let arr = inputData["portfolio"];
    arr[index] = e.target.value;
    setInputData({ ...inputData, portfolio: arr });
  }

  function addPortfolioInput(e) {
    let arr = inputData["portfolio"];
    console.log(arr);
    arr.push("");
    setInputData({ ...inputData, portfolio: arr });
    setPortfolioInputLength(portfolioInputLength + 1);
    //console.log(arr);
  }
  function delPortfolioInput(e) {
    if (portfolioInputLength > 1) {
      let arr = inputData["portfolio"];
      arr.pop();
      setInputData({ ...inputData, portfolio: arr });
      setPortfolioInputLength(portfolioInputLength - 1);
      //console.log(arr);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={styles.container}>
          <p className={styles.alert}>
            프로필을 자세히 쓸수록 모집 / 초대 확률이 높아져요
          </p>
          <div className={styles.nicknameBox}>
            닉네임 :{" "}
            <input
              className={styles.nicknameInput}
              name="nickname"
              value={inputData.nickname || ""}
              onChange={changeTextInput}
              required
            ></input>
          </div>
          <div className={styles.profileBox}>
            <img
              src={inputData.photo ?? "http://placehold.jp/50x50.png"}
              alt=""
              className={styles.profileImg}
            />

            <input
              className={styles.fileInput}
              type="file"
              onChange={changeProfileInput}
            />
          </div>
          <div className={styles.selectContainer}>
            <div>
              <select
                className={styles.select}
                name="city"
                value={inputData.city || ""}
                onChange={changeTextInput}
              >
                {localTabs.map((e) => (
                  <option value={e}>{e}</option>
                ))}

                {/* 지역 셀렉트 */}
              </select>
              <select
                className={styles.select}
                name="interest"
                value={inputData.interest || ""}
                onChange={changeTextInput}
              >
                {contestCategoryTabs.map((e) => (
                  <option value={e}>{e}</option>
                ))}

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

            <div className={styles.inputBox}>
              <p>포트폴리오 (URL)</p>
              <hr />
              <div className={styles.portfolioBox}>
                {Array.from({ length: portfolioInputLength }, (v, i) => i).map(
                  (e, i) => (
                    <input
                      key={i}
                      value={inputData.portfolio[i] || ""}
                      className={styles.customInput}
                      onChange={(e) => {
                        changePortfolioInput(e, i);
                      }}
                    ></input>
                  )
                )}

                <div>
                  {" "}
                  <button className="btn-white" onClick={addPortfolioInput}>
                    추가
                  </button>
                  <button className="btn-white" onClick={delPortfolioInput}>
                    삭제
                  </button>
                </div>
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
          {/* <div className={styles.rowBtns}> */}
          {/* <button
          className={`${styles.btnGreyBottom} btn-gray`}
          onClick={() => history.push("/welcome")}
        >
          나중에 할게요
        </button> */}
          <button type="submit" className="btn-main">
            작성완료
          </button>
        </div>
        {/* </div> */}
      </form>
      <div className={styles.warning_box}>
        <p id={styles.warning_comment}>
          서비스를 이용하기 위해
          <br />
          프로필을 반드시 작성해주셔야 해요!
        </p>

        <button
          class="btn-white"
          id={styles.btn_logout}
          onClick={() => {
            logout();
            history.push("/");
          }}
        >
          로그아웃
        </button>
      </div>
    </>
  );
};

export default SignupDetail;
