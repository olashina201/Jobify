import React from "react";
import "../assets/styles.css";
import NavBar from "./NavBar";
import OverViewSideBar from "./OverViewSideBar";
import SingleJobCard from "./SingleJobCard";
import SearchBar from "./SearchBar";

const SingleJob = ({ job }) => {
  return (
    <div className="job">
      <NavBar />
      <div className="wrapper detail-page">
        <SearchBar />
        <div className="main-container">
          <OverViewSideBar />
          <SingleJobCard job={job.url} />
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
