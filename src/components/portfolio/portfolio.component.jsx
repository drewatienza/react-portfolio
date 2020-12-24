import React from 'react';
import { DiCss3, DiGithubBadge, DiHeroku, DiJavascript1, DiReact, DiSass } from 'react-icons/di';
import { BiWindowOpen } from 'react-icons/bi';
import { SiFirebase, SiGithub, SiNetlify, SiRedux } from 'react-icons/si'

import Clothing from '../../assets/clothing.png';
import BoxOffice from '../../assets/box-office.png';
import GitHub from '../../assets/github-finder.png';
import Footer from "../footer/footer.component";

import './portfolio.styles.scss';

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <div className="project-container">
        <div className="image">
          <img src={Clothing} alt='clothing boutique screenshot' />
        </div>
        <div className="port-description">
          <h3>Maricel's Clothing</h3>
          <div className="icon-container">
            <DiReact />
            <SiRedux />
            <DiSass />
            <DiJavascript1 />
            <SiFirebase />
            <DiHeroku />
          </div>
          <p>
            This is a Full-Stack ecommerce website for a boutique clothing store built with React and Firebase.
          </p>
          <div className="portfolio-btn">
            <a href="https://maricel-boutique.herokuapp.com/" target="_blank" rel='noopener noreferrer'><BiWindowOpen /> Live Site</a>
            <a href="https://github.com/drewatienza/maricel-clothing"><DiGithubBadge /> GitHub</a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-container">
        <div className="image">
          <img src={GitHub} alt='github finder screenshot' />
        </div>
        <div className="port-description">
          <h3>GitHub Finder</h3>
          <div className="icon-container">
            <DiReact />
            <DiJavascript1 />
            <DiCss3 />
            <SiNetlify />
          </div>
          <p>
            GitHub Finder is a web app that lets users search for GitHub accounts using the GitHub API.
          </p>
          <div className="portfolio-btn">
            <a href="https://drewatienza-github-finder.netlify.app/" target="_blank" rel='noopener noreferrer'><BiWindowOpen /> Live Site</a>
            <a href="https://github.com/drewatienza/github_finder"><DiGithubBadge /> GitHub</a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-container">
        <div className="image">
          <img src={BoxOffice} alt='box office screenshot' />
        </div>
        <div className="port-description">
          <h3>Box Office</h3>
          <div className="icon-container">
            <DiReact />
            <DiJavascript1 />
            <DiCss3 />
            <SiGithub />
          </div>
          <p>
            This is a React project that lets users search Movie titles or search for actors and actresses.
          </p>
          <div className="portfolio-btn">
            <a href="https://drewatienza.github.io/box-office/" target="_blank" rel='noopener noreferrer'><BiWindowOpen /> Live Site</a>
            <a href="https://github.com/drewatienza/box-office"><DiGithubBadge /> GitHub</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio;
