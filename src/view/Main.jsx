import React, { useEffect, useState,useRef } from "react";
import {Link} from 'react-router-dom';
import MultipleTabBar from "../components/MultipleTabBar";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import TabBar from "../components/TabBar";
import TextTabBar from "../components/TextTabBar";

import styles from "./Main.module.scss";
import UserInfo from "./../components/UserInfo";

import {RequestMainPost} from "../service/BoardService";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";

const tabs = ["모집", "초대"];
const secondTabs = ["지역", "대회분류"];
const localTabs = [
  "서울",
  "부산",
  "인천",
  "대구",
  "울산",
  "광주",
  "대전",
  "세종",
  "강원",
  "경기",
  "충청",
  "경상",
  "전라",
  "제주",
];
const contestCategoryTabs = [
  "기획/아이디어",
  "사진/영상",
  "디자인",
  "광고/마케팅",
  "과학/공학",
  "창업",
  "기타",
];

const Main = () => {
  const [Posts,SetPosts] = useState([]);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedSecondTab, setSelectedSecondTab] = useState(secondTabs[0]);
  const [selectedThirdTab, setSelectedThirdTab] = useState([localTabs[0]]);

  useEffect(() => {
    RequestMainPost().then((value)=>{SetPosts(value)});
  }, []);

  function changeTab(t) {
    setSelectedTab(t);
  }

  function changeSecondTab(t) {
    setSelectedSecondTab(t);
    resetThirdTab(t);
  }

  function resetThirdTab(t) {
    let temp = selectedThirdTab;
    temp = temp.filter((e) => false);
    let defaultElement = t === "지역" ? localTabs[0] : contestCategoryTabs[0];
    setSelectedThirdTab([...temp, defaultElement]);
  }

  function changeThirdTab(t) {
    let temp = selectedThirdTab;
    if (!selectedThirdTab.includes(t)) {
      temp = [...temp, t];
    } else {
      temp = temp.filter((e) => e !== t);
    }
    setSelectedThirdTab(temp);
    console.log(selectedThirdTab);
  }

  return (
    <div>
      <Navbar />
      <TabBar
        className="1stTabBar"
        tabs={tabs}
        selected={selectedTab}
        callback={(t) => changeTab(t)}
      ></TabBar>
      <div className="2ndTabBar">
        <TextTabBar
          tabs={secondTabs}
          selected={selectedSecondTab}
          callback={(t) => changeSecondTab(t)}
        ></TextTabBar>
      </div>
      <MultipleTabBar
        className="3rdTabBar"
        tabs={selectedSecondTab === "지역" ? localTabs : contestCategoryTabs}
        selected={selectedThirdTab}
        callback={(t) => changeThirdTab(t)}
      ></MultipleTabBar>
      <div className={styles.dropdownContainer}>
        <select name={styles.selectSort}>
          <option value="최신순" selected>
            최신순
          </option>
        </select>
        <Link to="/post_write"><button className={`${styles.btnMain} btn-main`}>글쓰기</button></Link>
      </div>

      {selectedTab === "모집" ? (
        <div>
          {Posts.map((post,i)=>(
            <Post key={i} title={post.title} contest={post.contest} end_date={post.end_date}/>
          ))}
          {/* <Link to="post_detail"><Post></Post></Link> */}

        </div>
      ) : (
        // 초대 클릭시
        <div>
          <UserInfo />
          <UserInfo />
          <UserInfo />
          <UserInfo />
          <UserInfo />
        </div>
      )}
    </div>
  );
};

export default Main;
