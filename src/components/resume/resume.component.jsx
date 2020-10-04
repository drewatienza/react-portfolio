import React from "react";

import ResumePDF from "../../assets/Resume.pdf";

import "./resume.styles.scss";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-btn-container">
        <a
          download="Resume.pdf"
          className="btn"
          style={{ color: "white" }}
          href={ResumePDF}
        >
          Download Resume
        </a>
      </div>
      <iframe src={ResumePDF} title="Resume"></iframe>
    </div>
  );
};

export default Resume;
