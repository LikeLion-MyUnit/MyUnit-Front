import React, { useEffect, useState } from "react";
import MultipleTabBar from "../components/MultipleTabBar";
import Navbar from "../components/Navbar";
import TabBar from "../components/TabBar";
import TextTabBar from "../components/TextTabBar";

import styles from "./main.module.scss";

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
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedSecondTab, setSelectedSecondTab] = useState(secondTabs[0]);
  const [selectedThirdTab, setSelectedThirdTab] = useState([localTabs[0]]);

  useEffect(() => {
    
  },[])

  function changeTab(t) {
    setSelectedTab(t);
    resetThirdTab(t);
  }
  function changeSecondTab(t) {
    setSelectedSecondTab(t);
    resetThirdTab(t);
  }
  
  function resetThirdTab(t) {
    let temp = selectedThirdTab;
    temp = temp.filter((e) => false)
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
      <MultipleTabBar className="3rdTabBar"
        tabs={selectedSecondTab === "지역" ? localTabs : contestCategoryTabs}
        selected={selectedThirdTab}
        callback={(t) => changeThirdTab(t)}
      ></MultipleTabBar>
      <div className={styles.dropdownContainer}>
       <select name="area">
          <option value="최신순" disabled>
            최신순
          </option>
          {/* 지역 셀렉트 */}
        </select>
        <button className={`${styles.btnMain} btn-main`}>글쓰기</button>
        </div>
    </div>
  );
};

export default Main;
