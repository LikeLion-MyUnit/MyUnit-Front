import React from "react";
import Navbar from "../components/Navbar";
import styles from "./recruit.module.scss";
import TabBar from "./../components/TabBar";

const Recruit = () => {
  return (
    <div>
      <Navbar />
      <TabBar />
      <div className="container"></div>
    </div>
  );
};

export default Recruit;
