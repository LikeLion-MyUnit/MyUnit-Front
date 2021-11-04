import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TabBar from "../components/TabBar";
import TextTabBar from "../components/TextTabBar";

const tabs = ["모집", "초대"];
const secondTabs = ["지역", "대회분류"];

const Main = () => {
  const [selectedTab, setSelectedTab] = useState("모집");
  const [selectedSecondTab, setSelectedSecondTab] = useState("지역");

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
    </div>
  );
};

export default Main;
