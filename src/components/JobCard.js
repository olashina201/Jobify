import React from 'react'
import "../assets/styles.css";

const JobCard = () => {
    return (
        <div class="job-cards">

        <div class="job-card">
             <div class="job-card-header">
              <svg viewbox="0 -13 512 512" xmlns="http://www.w3.org/2000/svg" style="background-color:#2e2882">
               <g fill="#feb0a5">
                <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
               </g>
               <path d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0" fill="#feb0a5" />
              </svg>
              <div class="menu-dot"></div>
             </div>
             <div class="job-card-title">UI / UX Designer</div>
             <div class="job-card-subtitle">
              The User Experience Designer position exists to create compelling and digital user experience through excellent design...
             </div>
             <div class="job-detail-buttons">
              <button class="search-buttons detail-button">Full Time</button>
              <button class="search-buttons detail-button">Min. 1 Year</button>
              <button class="search-buttons detail-button">Senior Level</button>
             </div>
             <div class="job-card-buttons">
              <button class="search-buttons card-buttons">Apply Now</button>
              <button class="search-buttons card-buttons-msg">Messages</button>
             </div>
            </div>
        </div>
    )
}

export default JobCard
