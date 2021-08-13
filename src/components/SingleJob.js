import React from "react";
import "../assets/styles.css";

const SingleJob = () => {
  return (
    <div class="job-explain">
      <img class="job-bg" alt="" />
      <div class="job-logos">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 32 32"
          style="background-color:#f76754"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M0 .5h4.2v23H0z"
            fill="#042b48"
            data-original="#212121"
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z"
            fill="#fefefe"
            data-original="#f4511e"
          ></path>
        </svg>
      </div>
      <div class="job-explain-content">
        <div class="job-title-wrapper">
          <div class="job-card-title">UI /UX Designer</div>
          <div class="job-action">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-share-2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
            </svg>
          </div>
        </div>
        <div class="job-subtitle-wrapper">
          <div class="company-name">
            Patreon <span class="comp-location">Londontowne, MD.</span>
          </div>
          <div class="posted">
            Posted 8 days ago<span class="app-number">98 Application</span>
          </div>
        </div>
        <div class="explain-bar">
          <div class="explain-contents">
            <div class="explain-title">Experience</div>
            <div class="explain-subtitle">Minimum 1 Year</div>
          </div>
          <div class="explain-contents">
            <div class="explain-title">Work Level</div>
            <div class="explain-subtitle">Senior level</div>
          </div>
          <div class="explain-contents">
            <div class="explain-title">Employee Type</div>
            <div class="explain-subtitle">Full Time Jobs</div>
          </div>
          <div class="explain-contents">
            <div class="explain-title">Offer Salary</div>
            <div class="explain-subtitle">$2150.0 / Month</div>
          </div>
        </div>
        <div class="overview-text">
          <div class="overview-text-header">Overview</div>
          <div class="overview-text-subheader">
            We believe that design (and you) will be critical to the company's
            success. You will work with our founders and our early customers to
            help define and build our product functionality, while maintaining
            the quality bar that customers have come to expect from modern SaaS
            applications. You have a strong background in product design with a
            quantitavely anf qualitatively analytical mindset. You will also
            have the opportunity to craft our overall product and visual
            identity and should be comfortable to flex into working.
          </div>
        </div>
        <div class="overview-text">
          <div class="overview-text-header">Job Description</div>
          <div class="overview-text-item">
            3+ years working as a product designer.
          </div>
          <div class="overview-text-item">
            A portfolio that highlights your approach to problem solving, as
            well as you skills in UI.
          </div>
          <div class="overview-text-item">
            Experience conducting research and building out smooth flows.
          </div>
          <div class="overview-text-item">
            Excellent communication skills with a well-defined design process.
          </div>
          <div class="overview-text-item">
            Familiarity with design tools like Sketch and Figma
          </div>
          <div class="overview-text-item">
            Up-level our overall design and bring consistency to end-user facing
            properties
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
