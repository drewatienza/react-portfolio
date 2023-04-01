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
            About 6 years ago, I decided that I wanted to make a career pivot into the tech industry.  I had no tech background, but I decided that I wanted to learn how to code.  I started out trying to learn on my own and started creating basic websites using HTML, CSS, and JavaScript.  Since then I've been learning new technologies and developing a solid foundation in software engineering, network IT, and cybersecurity.  I have also decided to pursue a Bachelor's in Computer Science.
          </p>
          <p>
            Although my tech journey started out wanting to be more of a web developer, I have since learned that my real passion is with cybersecurity.
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
