import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileSettings from "../components/ProfileSettings";
import TabBar from "../components/TabBar";

const tabs = ["프로필", "메시지", "관심목록"];

const MyPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  function changeTab(t) {
    setSelectedTab(t);
  }
  return (
    <div>
      <Navbar />
      <TabBar
        tabs={tabs}
        selected={selectedTab}
        callback={(t) => changeTab(t)}
      ></TabBar>
      {selectedTab === "프로필" ? <ProfileSettings /> : null}
    </div>
  );
};

export default MyPage;
