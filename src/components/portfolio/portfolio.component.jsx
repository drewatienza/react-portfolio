import React from 'react';
import { DiFirebase, DiGithubBadge, DiHeroku, DiJavascript1, DiReact, DiSass } from 'react-icons/di';
import { BiWindowOpen } from 'react-icons/bi';

import Clothing from '../../assets/clothing.png';
import BoxOffice from '../../assets/box-office.png';
import GitHub from '../../assets/github-finder.png';

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
          {/* <h4>Group Project | One Week</h4> */}
          <div className="icon-container">
            <div>
              <DiReact />
            </div>
              <DiSass />
            <div>
              <DiJavascript1 />
            </div>
            <div>
              <DiFirebase />
            </div>
            <div>
              <DiHeroku />
            </div>
          </div>
          <p>
            Maricel's Clothing is a boutique clothing store website.
          </p>

          <p>
            This project was was built with React and Firebase.  The concept for Spoonder was an idea of mine after a peer suggested we build dating app for our final project. We based Spoonder on Tinder (incase you hadn't already guessed). The majority of the backend was built as a 3 using VS Code Live Share. I then built out a number of the frontend components and did all design work and Sass.
          </p>
          <div className="portfolio-btn">
            <a href="https://maricel-boutique.herokuapp.com/" target="_blank" rel='noopener noreferrer'><BiWindowOpen /> Live Site</a>
            <a href="https://github.com/drewatienza/maricel-clothing"><DiGithubBadge /> GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
