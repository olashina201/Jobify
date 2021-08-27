import React from "react";
import "../assets/styles.css";

const Filter = ({ jobs, search }) => {
  const searchLength = search.length;
  return (
    <div className="searched-bar">
      <div className="searched-show">
        {searchLength >= 1
          ? `Showing ${searchLength} Jobs`
          : `Showing ${jobs.length}Jobs`}
      </div>
      <div className="searched-sort">
        Sort by: <span className="post-time">Newest Post</span>
        <span className="menu-icon">▼</span>
      </div>
    </div>
  );
};

export default Filter;
