import React from "react";
import "../assets/styles.css";

const Filter = () => {
  return (
    <div className="searched-bar">
      <div className="searched-show">Showing 46 Jobs</div>
      <div className="searched-sort">
        Sort by: <span className="post-time">Newest Post </span>
        <span className="menu-icon">▼</span>
      </div>
    </div>
  );
};

export default Filter;
