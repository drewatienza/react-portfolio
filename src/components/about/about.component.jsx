import React from "react";

import "./about.styles.scss";
import Footer from "../footer/footer.component";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-section">
          <h1>ABOUT ME</h1>
          <p>Hi there! I'm Drew.</p>
          <p>
            I am a self-taught developer and career-changer who decided to learn
            to code at age 38. I love building things and tinkering with tech
            related stuff.
          </p>
          <p>
            I learn fast, I work hard, and I am constantly trying to learn new
            technologies. I have experience and familiarity working with
            technologies such as HTML, CSS, JavaScript, React, Python, Java, and
            SQL.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
