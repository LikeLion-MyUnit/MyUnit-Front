import axios from "axios";
import { serverURL } from "./ServerConst";

export async function postBoard(
  token,
  title,
  contest,
  content,
  poster,
  city,
  interest,
  end_date,
  is_open,
  recruit
  // profile
) {
  try {
    let response = await axios({
      method: "post",
      url: `${serverURL}/board/create/`,
      xstfCookieName: "csrftoken",
      xsrfHeaderName: "X-CSRFToken",
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        title: title,
        contest: contest,
        content: content,
        poster: poster,
        city: city,
        interest: interest,
        end_date: end_date,
        is_open: is_open,
        recruit: recruit,
        // profile: profile,
      },
    });
    return response.data;
  } catch (e) {
    //console.log(e.response.data);
    // if (Object.keys(e.response.data).includes("email")) {
    //   return "중복된 이메일이 존재합니다.";
    // } else if (Object.keys(e.response.data).includes("nickname")) {
    //   return "중복된 닉네임이 존재합니다.";
    // }
    return "예기치 못한 에러가 발생했습니다.";
    //TODO : save to cookie
  }
}

export async function getBoard(
  title,
  contest,
  content,
  poster,
  city,
  interest,
  end_date,
  is_open,
  recruit,
  like_count,
  profile
) {
  try {
    let response = await axios.get(
      `${serverURL}/board/post_all/`,

      {
        title: title,
        contest: contest,
        content: content,
        poster: poster,
        city: city,
        interest: interest,
        end_date: end_date,
        is_open: is_open,
        recruit: recruit,
        like_count: like_count,
        profile: profile,
      }
    );
    return response.data;
  } catch (e) {
    //console.log(e.response.data);
    // if (Object.keys(e.response.data).includes("email")) {
    //   return "중복된 이메일이 존재합니다.";
    // } else if (Object.keys(e.response.data).includes("nickname")) {
    //   return "중복된 닉네임이 존재합니다.";
    // }
    return "예기치 못한 에러가 발생했습니다.";
    //TODO : save to cookie
  }
}

export async function RequestMainPost() {
  try {
    const response = await axios.get(`${serverURL}/board/post_all`);
    //console.log(response.data);
    return response.data;
  } catch (e) {
    alert("네트워크 에러가 발생했습니다.");
    return null;
  }
}

// async function SendMessage(token, sender, receiver, message) {
//   try {
//     let response = await axios({
//       method: "post",
//       url: `${serverURL}/chat/messages/`,
//       xstfCookieName: "csrftoken",
//       xsrfHeaderName: "X-CSRFToken",
//       headers: {
//         Authorization: `Token ${token}`,
//       },
//       data: {
//         receiver: receiver,
//         sender: sender,
//         message: message,
//       },
//     });
//   } catch (e) {
//     console.log(e.response.data);
//   }
// }
