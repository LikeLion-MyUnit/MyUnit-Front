import axios from "axios";
import { serverURL } from "./ServerConst";
import React,{useState} from 'react'
import Post from "../components/Post";

export async function requestSignup(id, password, nickname) {
  try {
    let response = await axios.post(
      `${serverURL}/account/user/signup/`,

      {
        nickname: nickname,
        email: id,
        password: password,
      }
    );
    response.data.password = "";
    console.log(response.data);
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



export async function RequestMainPost(){
  try{
    const response = await axios.get(`${serverURL}/board/post_all`)
    console.log(response.data)
    return response.data
  }
    catch(e){
    console.log(e.response.data);
    alert('데이터를 불러오는데 실패해버렸쨔농 ㅜㅜ')
  }
}
