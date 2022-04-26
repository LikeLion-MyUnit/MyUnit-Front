import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import MultipleTabBar from "../components/MultipleTabBar";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import TabBar from "../components/TabBar";
import TextTabBar from "../components/TextTabBar";

import styles from "./Main.module.scss";
import UserInfo from "./../components/UserInfo";
import { UserContext } from "../provider/UserProvider";

import { RequestUsers } from "../service/AuthService";
import { RequestMainPost } from "../service/BoardService";
import { contestCategoryTabs, localTabs } from "../const/const";
const tabs = ["모집", "초대"];
const secondTabs = ["지역", "대회분류"];
const Main = ({}) => {
  const history = useHistory();
  const [Posts, SetPosts] = useState([]);
  const [Users, SetUsers] = useState([]);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedSecondTab, setSelectedSecondTab] = useState(secondTabs[0]);
  const [selectedThirdTab, setSelectedThirdTab] = useState(localTabs);
  const [searchInput, setSearchInput] = useState("");
  const { details, isLoggedIn, user } = useContext(UserContext);

  useEffect(() => {
    //until connecting server, attempt infinitely
    let attemptConnectingServer = setInterval(() => {
      RequestMainPost().then((value) => {
        if (value !== null) SetPosts(value);
      });
      RequestUsers().then((value) => {
        if (value !== null) SetUsers(value);
      });
      if (value) {
        clearInterval(attemptConnectingServer);
      }
    }, 2000);

    if (details !== null && details.city === "선택안함" && isLoggedIn) {
      // if not be written user detail profile yet.
      history.push("/signup_detail");
    }
  }, [details, history, isLoggedIn]);

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
    temp = temp.concat(t === "지역" ? localTabs : contestCategoryTabs);

    setSelectedThirdTab([...temp]);
  }

  function changeThirdTab(t) {
    let temp = selectedThirdTab;
    if (!selectedThirdTab.includes(t)) {
      temp = [...temp, t];
    } else {
      temp = temp.filter((e) => e !== t);
    }
    setSelectedThirdTab(temp);
    //console.log(selectedThirdTab);
  }

  function onClickWrite(e) {
    if (isLoggedIn) history.push("/post_write");
    else history.push("/login");
  }

  return (
    <div>
      <Navbar />
      <TabBar
        className="mainTabBar"
        tabs={tabs}
        selected={selectedTab}
        callback={(t) => changeTab(t)}
      ></TabBar>
      <div className={styles.regionTabBar}>
        <TextTabBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          tabs={secondTabs}
          selected={selectedSecondTab}
          callback={(t) => changeSecondTab(t)}
        ></TextTabBar>
        <div className={styles.searchGroup}>
          <input
            id={styles.searchInput}
            name="keyword"
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder="키워드 검색"
            className={styles.search}
          />
        </div>
      </div>
      <MultipleTabBar
        className="3rdTabBar"
        tabs={selectedSecondTab === "지역" ? localTabs : contestCategoryTabs}
        selected={selectedThirdTab}
        callback={(t) => changeThirdTab(t)}
      ></MultipleTabBar>
      <div className={styles.dropdownContainer}>
        <select name={styles.selectSort}>
          <option value="최신순" defaultValue>
            최신순
          </option>
        </select>
        <button className={`${styles.btnMain} btn-main`} onClick={onClickWrite}>
          글쓰기
        </button>
      </div>

      {selectedTab === "모집" ? (
        Posts.length > 0 ? (
          <div key="recruit">
            {[...Posts].reverse().map((post, i) =>
              (selectedSecondTab === "지역" &&
                selectedThirdTab.includes(post.city)) |
                (selectedSecondTab === "대회분류" &&
                  selectedThirdTab.includes(post.interest)) &&
              (searchInput !== "" && post.title.includes(searchInput)) |
                (searchInput === "") ? (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  key={i}
                  to={{
                    pathname: `/post_detail`,
                    state: {
                      title: post.title,
                      author: post.profile,
                      contest: post.contest,
                      content: post.content,
                      image: post.poster,
                      city: post.city,
                      my_user_pk: user ? user.user_pk : -1,
                    },
                  }}
                >
                  <Post
                    key={i}
                    poster={post.poster}
                    title={post.title}
                    contest={post.contest}
                    end_date={post.end_date}
                  />
                </Link>
              ) : (
                <div key={i}></div>
              )
            )}
            {/* <Link to="post_detail"><Post></Post></Link> */}
          </div>
        ) : (
          <div></div>
        )
      ) : (
        // 초대 클릭시
        Users.length > 0 && (
          <div key="invite">
            {Users.map((otherUser, i) =>
              (selectedSecondTab === "지역" &&
                selectedThirdTab.includes(otherUser.city)) |
                (selectedSecondTab === "대회분류" &&
                  selectedThirdTab.includes(otherUser.interest)) &&
              (searchInput !== "" && otherUser.nickname.includes(searchInput)) |
                (searchInput === "") ? (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  key={i}
                  to={{
                    pathname: `/user_detail`,
                    state: {
                      nickname: otherUser.nickname,
                      gender: otherUser.gender,
                      city: otherUser.city,
                      mycomment: otherUser.mycomment,
                      photo: otherUser.photo,
                      skill: otherUser.skill,
                      interest: otherUser.interest,
                      portfolio: otherUser.portfolio,
                      user: otherUser.user,
                      user_pk: otherUser.user_pk,
                      my_user_pk: user ? user.user_pk : -1,
                    },
                  }}
                >
                  <UserInfo
                    key={i}
                    photo={otherUser.photo}
                    nickname={otherUser.nickname}
                    skill={otherUser.skill}
                    gender={otherUser.gender}
                    interest={otherUser.interest}
                    city={otherUser.city}
                  />
                </Link>
              ) : (
                <div key={i}></div>
              )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Main;
