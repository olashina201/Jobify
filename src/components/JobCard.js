import React from "react";
import Filter from "./Filter";
import "../assets/styles.css";
import { Link } from "react-router-dom";
import Job from "./Job";

const JobCard = ({ jobs, search }) => {
  return (
    <div className="searched-jobs">
      <Filter jobs={jobs} search={search} />
      <div className="job-cards">
        {search.length >= 1
          ? search.map((job) => {
              return (
                <Link
                  to={`/single/${job.id}`}
                  style={{ textDecoration: "none" }}
                  key={job.id}
                >
                  <Job job={job} />
                </Link>
              );
            })
          : jobs.map((job) => {
              return (
                <Link
                  to={`/single/${job.id}`}
                  style={{ textDecoration: "none" }}
                  key={job.id}
                >
                  <Job job={job} />
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default JobCard;
