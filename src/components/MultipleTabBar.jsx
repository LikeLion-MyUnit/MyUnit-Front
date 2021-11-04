import React from "react";

const MultipleTabBar = ({ tabs }) => {
  return (
    <div>
      {tabs.map((t) => (
        <span>{t}</span>
      ))}
    </div>
  );
};

export default MultipleTabBar;
