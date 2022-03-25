import React from "react";
import { DiCss3, DiGit, DiGithubBadge, DiHtml5, DiJava, DiJsBadge, DiNodejsSmall, DiNpm, DiPython, DiReact, DiResponsive, DiSass, DiTerminal } from 'react-icons/di';
import { RiVuejsFill } from 'react-icons/ri';
import { SiFlask, SiHeroku, SiIntellijidea, SiMysql, SiNetlify, SiPostgresql } from 'react-icons/si';

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
            My coding journey started 5 years ago when I decided to learn code.  I started out trying to learn on my own and started creating basic websites using HTML and CSS.  Since then I've been learning new technologies and developing a solid foundation in software engineering.  I have also graduated from Western Governors Univesity with a Bachelor's in Computer Science.
          </p>
        </div>
        <div className="skills-section">
          <h2>My Skills and Technologies</h2>
          <div className="skills">
            <div>
              <DiJsBadge />
              <p>JavaScript</p>
            </div>
            <div>
              <DiHtml5 />
              <p>HTML</p>
            </div>
            <div>
              <DiCss3 />
              <p>CSS</p>
            </div>
            <div>
              <DiSass />
              <p>Sass</p>
            </div>
            <div>
              <DiReact />
              <p>React</p>
            </div>
            <div>
              <RiVuejsFill />
              <p>Vue</p>
            </div>
            <div>
              <DiNodejsSmall />
              <p>Node</p>
            </div>
            <div>
              <DiNpm />
              <p>NPM</p>
            </div>
            <div>
              <SiPostgresql />
              <p>PostgreSQL</p>
            </div>
            <div>
              <SiMysql />
              <p>MySQL</p>
            </div>
            <div>
              <DiPython />
              <p>Python</p>
            </div>
            <div>
              <SiFlask />
              <p>Flask</p>
            </div>
            <div>
              <DiJava />
              <p>Java</p>
            </div>
            <div>
              <SiIntellijidea />
              <p>IntelliJ</p>
            </div>
            <div>
              <DiGit />
              <p>Git</p>
            </div>
            <div>
              <DiGithubBadge />
              <p>GitHub</p>
            </div>
            <div>
              <DiTerminal />
              <p>CLI</p>
            </div>
            <div>
              <SiHeroku />
              <p>Heroku</p>
            </div>
            <div>
              <SiNetlify />
              <p>Netlify</p>
            </div>
            <div>
              <DiResponsive />
              <p>Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
