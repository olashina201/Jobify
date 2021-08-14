import React, { useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import JobCard from "./JobCard";
import "../assets/styles.css";

const Index = () => {
  
  return (
    <div className="job">
      <NavBar />
      <div className="wrapper">
        <SearchBar />
        <div className="main-container">
          <SideBar />
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
