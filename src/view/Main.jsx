import React, { useState } from "react";
import MultipleTabBar from "../components/MultipleTabBar";
import Navbar from "../components/Navbar";
import TabBar from "../components/TabBar";
import TextTabBar from "../components/TextTabBar";

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
  const [selectedTab, setSelectedTab] = useState("모집");
  const [selectedSecondTab, setSelectedSecondTab] = useState("지역");
  const [selectedThirdTab, setSelectedThirdTab] = useState([]);

  function changeTab(t) {
    setSelectedTab(t);
  }
  function changeSecondTab(t) {
    setSelectedSecondTab(t);
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
        tabs={selectedSecondTab === "지역" ? localTabs : contestCategoryTabs}
      ></MultipleTabBar>
    </div>
  );
};

export default Main;
