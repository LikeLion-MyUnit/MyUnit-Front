import React, { useContext } from "react";

import styles from "./Login.module.scss";
import "../common/Common.scss";
import { useState } from "react";
import { UserContext } from "../provider/UserProvider";
import { requestLogin } from "../service/AuthService";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [id, setIdTextInput] = useState("");
  const [pw, setPwTextInput] = useState("");
  const { login } = useContext(UserContext);

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

      default:
    }
  }

  async function onSubmit(e) {
    e.preventDefault(); //prevent initialization input
    //TODO : add validate
    if (!id.includes("@")) {
      alert("이메일 형식을 입력하세요.");
    } else {
      let response = await requestLogin(id, pw);
      if (typeof response !== "string") {
        login(response);
        history.push("/");
      } else {
        alert(response);
      }
    }
  }

  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <img src="img/logo.png" alt="logo" className={styles.logo} />
      </Link>
      <form className={styles.column} onSubmit={onSubmit} noValidate>
        <input
          name="id"
          type="text"
          placeholder="아이디"
          onChange={changeTextInput}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={changeTextInput}
          required
        />

        <button id={styles.btn_login} className="btn-main" onClick={onSubmit}>
          로그인
        </button>
      </form>
      <div className={styles.column}>
        <div className="btn-text" onClick={() => history.push("/signup")}>
          처음이신가요?
        </div>
        <div
          className="btn-text"
          style={{ marginTop: 30 }}
          onClick={() => {
            alert("준비중입니다.");
          }}
        >
          비밀번호를 잊으셨나요?
        </div>
      </div>
    </div>
  );
};

export default Login;
