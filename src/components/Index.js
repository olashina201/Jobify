import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import JobCard from "./JobCard";
import "../assets/styles.css";

const Index = () => {
  const [searchJob, setSearchJob] = useState([])
  const [jobs, setJobs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchJob)
  }
  const handleChange = (e) => {
    setSearchJob(e.target.value)
  }

  useEffect(() => {
    axios
      .get("https://remotive.io/api/remote-jobs?limit=5")
      .then((res) => {
        console.log(res.data.jobs);
        setJobs(res.data.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://remotive.io/api/remote-jobs?search=${searchJob}`)
      .then((res) => {
        console.log(res.data.jobs);
        setSearchJob(res.data.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className="job">
      <NavBar />
      <div className="wrapper">
        <SearchBar searchJob={searchJob} handleChange={handleChange} handleSubmit={handleSubmit} />
        <div className="main-container">
          <SideBar />
          <JobCard jobs={jobs} />
        </div>
      </div>
    </div>
  );
};

export default Index;
