import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { contestCategoryTabs, localTabs } from "../const/const";
import { UserContext } from "../provider/UserProvider";
import { postBoard } from "../service/BoardService";
import styles from "./PostWrite.module.scss";

function PostWrite({ history }) {
  const { user } = useContext(UserContext);
  const [sumbitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [contest, setContest] = useState("");
  const [content, setContent] = useState("");
  const [poster, setPoster] = useState();
  const [city, setCity] = useState("서울");
  const [interest, setInterest] = useState("기획/아이디어");
  const [endDate, setEndDate] = useState("");
  const [isOpen, setIsOpen] = useState(true); //true&false 조건 만들기
  const [recruit, setRecruit] = useState();

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
      setSubmitted(true);
      history.push("/");
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

  // change image file to base64 file
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
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  function changeImageInput(e) {
    const file = e.target.files[0];
    getBase64(file)
      .then((result) => {
        file["base64"] = result;

        setPoster(result);
      })
      .catch((err) => {
        //console.log(err);
      });
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        모집글 작성페이지
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

          <label htmlFor="마감기한">마감기한</label>
          <input
            value={endDate}
            name="endDate"
            id="endDate"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            onChange={changeInput}
          />
          <br />
          <div className={styles.selectBox}>
            <label htmlFor="지역">지역</label>
            <select
              className={styles.select}
              value={city}
              name="city"
              id="city"
              onChange={changeInput}
            >
              {localTabs.map((e) => (
                <option value={e}>{e}</option>
              ))}
            </select>
          </div>
          <br />
          <div className={styles.selectBox}>
            <label htmlFor="대회분류">대회분류</label>
            <select
              className={styles.select}
              value={interest}
              name="interest"
              id="interest"
              onChange={changeInput}
            >
              {contestCategoryTabs.map((e) => (
                <option value={e}>{e}</option>
              ))}
            </select>
          </div>
          <br />
          <div className={styles.selectBox}>
            <label htmlFor="모집 인원수"> 모집 인원수</label>
            <input
              className={styles.recruitInput}
              value={recruit ?? ""}
              name="recruit"
              type="number"
              placeholder="인원 수"
              onChange={changeInput}
            />
          </div>
          <br />
          <div className={styles.selectBox}>
            <label htmlFor="포스터"> 포스터</label>
            <input
              className={styles.fileInput}
              type="file"
              onChange={changeImageInput}
            />
          </div>
          <br />
          <button disabled={sumbitted} type="submit" className="btn-main">
            작성완료
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostWrite;
