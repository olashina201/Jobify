import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import JobCard from "./JobCard";
import "../assets/styles.css";

const Index = () => {
  const [searchJob, setSearchJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState([]);
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    axios
      .get("https://remotive.io/api/remote-jobs?limit=1")
      .then((res) => {
        console.log(res.data.jobs);
        setJobs(res.data.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getSearch = async (search) => {
    await axios
      .get(`https://remotive.io/api/remote-jobs?search=${search}`)
      .then((res) => {
        setSearch(res.data.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearch(searchJob);
    console.log(search);
  };

  return (
    <div className={darkmode ? "job dark-mode" : "job"}>
      <NavBar darkmode={darkmode} setDarkmode={setDarkmode} />
      <div className="wrapper">
        <SearchBar
          searchJob={searchJob}
          setSearchJob={setSearchJob}
          handleSubmit={handleSubmit}
        />
        <div className="main-container">
          <SideBar />
          <JobCard jobs={jobs} search={search} searchJob={searchJob} />
        </div>
      </div>
    </div>
  );
};

export default Index;
