import React from "react";
import "../assets/styles.css";

const Filter = () => {
  return (
    <div class="searched-bar">
      <div class="searched-show">Showing 46 Jobs</div>
      <div class="searched-sort">
        Sort by: <span class="post-time">Newest Post </span>
        <span class="menu-icon">▼</span>
      </div>
    </div>
  );
};

export default Filter;
