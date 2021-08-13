import React from "react";
import "../assets/styles.css";

const OverViewSideBar = () => {
  return (
    <div class="job-overview-cards">
      <div class="job-overview-card">
        <div class="job-card overview-card">
          <div class="overview-wrapper">
            <svg
              viewbox="0 -13 512 512"
              xmlns="http://www.w3.org/2000/svg"
              style="background-color:#2e2882"
            >
              <g fill="#feb0a5">
                <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
              </g>
              <path
                d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
                fill="#feb0a5"
              />
            </svg>
            <div class="overview-detail">
              <div class="job-card-title">UI / UX Designer</div>
              <div class="job-card-subtitle">
                2972 Westheimer Rd. Santa Ana.
              </div>
            </div>
            <svg
              class="heart"
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart"
            >
              <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
            </svg>
          </div>
          <div class="job-overview-buttons">
            <div class="search-buttons time-button">Full Time</div>
            <div class="search-buttons level-button">Senior Level</div>
            <div class="job-stat">New</div>
            <div class="job-day">4d</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverViewSideBar;
