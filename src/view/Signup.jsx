import React, { useState } from "react";
import "../common/Common.scss";
import { requestLogin } from "../service/AuthService";
import styles from "./Login.module.scss";
// import { useForm } from "react-hook-form";
// import validator from "validator";

const Signup = ({ history }) => {
  // const { register, handleSubmit, errors } = useForm();

  const [id, setIdTextInput] = useState("");
  const [pw, setPwTextInput] = useState("");
  const [rePw, setRePwTextInput] = useState("");
  const [nickname, setNicknameTextInput] = useState("");

  function changeTextInput(e) {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "id":
        setIdTextInput(value);
        break;
      case "password":
        setPwTextInput(value);
        break;
      case "reEnterPassword":
        setRePwTextInput(value);
        break;
      case "nickname":
        setNicknameTextInput(value);
        break;
      default:
    }
  }

  async function onSubmit(e) {
    e.preventDefault(); //prevent initialization input
    //TODO : add validate
    if (rePw !== pw) {
      alert("비밀번호를 확인하세요.");
    } else {
      let response = await requestLogin(id, pw, nickname);
      if (response) {
        history.push("login");
      } else {
        alert(response);
      }
    }
  }

  return (
    <div className={styles.container}>
      <img src="img/logo.png" alt="logo" className={styles.logo} />
      <form className={styles.column} onSubmit={onSubmit} noValidate>
        <input
          value={id}
          name="id"
          type="text"
          placeholder="아이디"
          onChange={changeTextInput}
          required
        />
        <input
          value={pw}
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={changeTextInput}
          required
        />
        <input
          value={rePw}
          name="reEnterPassword"
          type="password"
          placeholder="비밀번호 확인"
          onChange={changeTextInput}
          required
        />
        <input
          value={nickname}
          name="nickname"
          type="text"
          placeholder="닉네임"
          onChange={changeTextInput}
          required
        />
        <button className="btn-main">회원가입</button>
      </form>
      <div className="btn-text" onClick={() => history.push("/login")}>
        이미 가입하셨나요?
      </div>
    </div>
  );
};

export default Signup;
