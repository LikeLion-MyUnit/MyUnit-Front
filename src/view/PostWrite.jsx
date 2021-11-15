import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../provider/UserProvider";
import { postBoard } from "../service/BoardService";
import styles from "./PostWrite.module.scss";

function PostWrite() {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [contest, setContest] = useState("");
  const [content, setContent] = useState("");
  const [poster, setPoster] = useState();
  const [city, setCity] = useState();
  const [interest, setInterest] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isOpen, setIsOpen] = useState(true); //true&false 조건 만들기
  const [recruit, setRecruit] = useState(0);

  // let newDate = new Date();
  // let date = "";
  // let getdate = () => {
  //   if (newDate.getDate() < 10) {
  //     date = `0${newDate.getDate()}`;
  //   } else {
  //     date = newDate.getDate();
  //   }
  // };
  // getdate();
  // let month = newDate.getMonth() + 1;
  // let year = newDate.getFullYear();

  function changeInput(e) {
    // Depends on input's name
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "contest":
        setContest(value);
        break;
      case "content":
        setContent(value);
        break;
      case "poster":
        setPoster(e.target.files[0]);
        break;
      case "city":
        setCity(value);
        break;
      case "interest":
        setInterest(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      case "isOpen":
        setIsOpen(value);
        break;
      case "recruit":
        setRecruit(value);
        break;
      default:
    }
  }

  async function onSubmit(e) {
    e.preventDefault(); //prevent initialization input
    if (title.length > 50) {
      alert("50자 이내로 작성해주세요.");
    } else {
      let response = await postBoard(
        user.token,
        title,
        contest,
        content,
        poster,
        city,
        interest,
        endDate,
        isOpen,
        recruit
      );
      return response.data;
    }
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        모집글 작성페이지.
        <form onSubmit={onSubmit}>
          <input
            value={title}
            name="title"
            type="text"
            placeholder="제목"
            onChange={changeInput}
          />
          <input
            value={contest}
            name="contest"
            type="text"
            placeholder="대회명"
            onChange={changeInput}
          />
          <textarea
            value={content}
            name="content"
            rows="10"
            cols="40"
            placeholder="내용"
            onChange={changeInput}
          />
          <label for="마감기한">마감기한</label>
          <input
            value={endDate}
            name="endDate"
            id="endDate"
            type="date"
            onChange={changeInput}
          />
          <br />
          <label for="지역">지역</label>
          <select value={city} name="city" id="city" onChange={changeInput}>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="인천">인천</option>
            <option value="대구">대구</option>
            <option value="울산">울산</option>
            <option value="대전">대전</option>
            <option value="세종">세종</option>
            <option value="강원">강원</option>
            <option value="경기">경기</option>
            <option value="충청">충청</option>
            <option value="경상">경상</option>
            <option value="전라">전라</option>
            <option value="제주">제주</option>
          </select>
          <br />
          <label for="대회분류">대회분류</label>
          <select
            value={interest}
            name="interest"
            id="interest"
            onChange={changeInput}
          >
            <option value="기획/아이디어">기획/아이디어</option>
            <option value="사진/영상">사진/영상</option>
            <option value="디자인">디자인</option>
            <option value="광고/마케팅">광고/마케팅</option>
            <option value="과학/공학">과학/공학</option>
            <option value="창업">창업</option>
            <option value="기타">기타</option>
          </select>

          <input
            value={recruit}
            name="recruit"
            type="number"
            placeholder="recruit"
            onChange={changeInput}
          />

          <input
            name="poster"
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            onChange={changeInput}
          />

          <button
            type="submit"
            className="btn-main"
            onClick={() =>
              console.log(
                title,
                contest,
                content,
                city,
                interest,
                endDate,
                isOpen,
                recruit,
                poster
              )
            }
          >
            작성완료
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostWrite;
