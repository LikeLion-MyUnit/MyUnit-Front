import axios from "axios";
import { serverURL } from "./ServerConst";

export async function requestSignup(id, password, phonenum) {
  try {
    
    let response = await axios.post(
      `${serverURL}/account/user/signup/`,

      {
    
        email: id,
        password: password,
        phonenum: `+82${phonenum.substring(1)}`,
      }
    );
    // response.data.password = "";
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    if (Object.keys(e.response.data).includes("email")) {
      return "중복된 이메일이 존재합니다.";
    } else {
      return "예기치 못한 에러가 발생했습니다.";
    }
    //TODO : save to cookie
  }
}

export async function requestLogin(id, password) {
  try {
    let response = await axios.post(
      `${serverURL}/account/user/login/`,

      {
        email: id,
        password: password,
      }
    );
    // response.data.password = "";
    // console.log(response.data);
    return response.data;
  } catch (e) {
    return "이메일 혹은 비밀번호를 확인하세요.";
    //TODO : save to cookie
  }
}

export async function getUserProfile(token, pk) {
  try {
    let response = await axios({
      method: "get",
      url: `${serverURL}/account/profile/${pk}/`,
      xstfCookieName: "csrftoken",
      xsrfHeaderName: "X-CSRFToken",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (e) {
    return null;
  }
}


export async function postUserProfile(token, data) {
  try {
console.log(data)
    
    let response = await axios({
      method: "put",
      url: `${serverURL}/account/profile/${data.user_pk}/`,
      xstfCookieName: "csrftoken",
      xsrfHeaderName: "X-CSRFToken",
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        nickname: data.nickname,
        gender: data.gender,
        city: data.city,
        interest: data.interest,
        skill: data.skill,
        mycomment: data.mycomment,
        portfolio: data.portfolio,
        is_open: data.is_open,
        photo:data.photo
      }
    });
    return response.data;
  } catch (e) {
    return null;
  }
}

export async function RequestUsers(){
  try{
    const response = await axios.get(`${serverURL}/account/profile_all`)
    console.log(response.data)
    return response.data
  }
    catch(e){
    console.log(e.response.data);
    alert('데이터를 불러오는데 실패해버렸쨔농 ㅜㅜ')
  }
}


// export async function
