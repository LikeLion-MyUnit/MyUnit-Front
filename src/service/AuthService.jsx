import axios from "axios";

export async function requestSignup(id, password, nickname) {
  try {
    let response = await axios.post(
      "http://173d-221-152-104-111.ngrok.io/account/user/signup/",

      {
        nickname: nickname,
        email: id,
        password: password,
      }
    );
    response.data.password = "";
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    if (Object.keys(e.response.data).includes("email")) {
      return "중복된 이메일이 존재합니다.";
    } else if (Object.keys(e.response.data).includes("nickname")) {
      return "중복된 닉네임이 존재합니다.";
    } else {
      return "예기치 못한 에러가 발생했습니다.";
    }
    //TODO : save to cookie
  }
}

export async function requestLogin(id, password) {
  try {
    let response = await axios.post(
      "http://173d-221-152-104-111.ngrok.io/account/user/login/",

      {
        email: id,
        password: password,
      }
    );
    response.data.password = "";
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    if (Object.keys(e.response.data).includes("email")) {
      return "해당 이메일이 존재하지 않습니다.";
    } else if (Object.keys(e.response.data).includes("password")) {
      return "비밀번호가 틀립니다.";
    } else {
      return "예기치 못한 에러가 발생했습니다.";
    }
    //TODO : save to cookie
  }
}
