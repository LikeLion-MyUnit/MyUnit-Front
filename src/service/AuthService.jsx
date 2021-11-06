import axios from "axios";

export async function requestLogin(id, password, nickname) {
  console.log(id);
  console.log(password);
  console.log(nickname);
  let response = await axios.post(
    "https://25d5-221-152-104-111.ngrok.io/account/user/signup/",

    {
      nickname: { nickname },
      email: { id },
      password: { password },
    }
  );

  console.log(response);

  if (id !== response.email) {
    return "중복된 아이디가 존재합니다.";
  } else if (nickname !== response.nickname) {
    return "중복된 닉네임이 존재합니다.";
  } else {
    return true;
  }
}
